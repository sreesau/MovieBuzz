from django.shortcuts import render
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST, HTTP_404_NOT_FOUND
from django.shortcuts import get_object_or_404
from django.contrib.auth import authenticate
from django.db import models
from rest_framework import status
from rest_framework.authtoken.models import Token
from .forms import CustomUserCreationForm
from .models import Movie
from .models import Booking
from .forms import MovieForm
from .serializers import MovieSerializer
from .serializers import BookingSerializer
from django.db.models import Sum
import razorpay
from decimal import Decimal
from django.core.mail import send_mail
from django.conf import settings
from uuid import UUID




# Register View
@api_view (['POST'])
@permission_classes((AllowAny,))
def register(request):
    form= CustomUserCreationForm(data=request.data)
    
    if form.is_valid():
        user=form.save()    
        return Response({"message": "User registered successfully"}, status=status.HTTP_201_CREATED)
  
    else:
        print(form.errors)
        return Response(form.errors, status=status.HTTP_400_BAD_REQUEST)

#Login Vie
@csrf_exempt
@api_view(["POST"])
@permission_classes((AllowAny,))
def login(request):
    username = request.data.get("username")
    password = request.data.get("password")
    if username is None or password is None:
        return Response({'error': 'Please provide both username and password'},
                        status=HTTP_400_BAD_REQUEST)
    user = authenticate(username=username, password=password)
    if not user:
        return Response({'error': 'Invalid Credentials'},
                        status=HTTP_404_NOT_FOUND)
    token, _ = Token.objects.get_or_create(user=user)
    return Response({'id':user.id,'username':user.username,'token': token.key},status=HTTP_200_OK)

#logout View
@api_view(["POST"])
@permission_classes([IsAuthenticated])
def logout(request):
    request.auth.delete()
    return Response({'detail': 'Logout successful'}, status=status.HTTP_200_OK)

#Admin Add Movie
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def addmovie(request):
    if request.method == 'POST':
        serializer = MovieSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response({'id': movie.id}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Admin Read Movie
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def readmovie(request):
     movies=Movie.objects.all()
     serilizer=MovieSerializer(movies,many=True)
     return Response(serilizer.data)
 
 # Admin & User Movie Detailed view
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def detailmovie(request,movie_id):
     movie=Movie.objects.get(pk=movie_id)
     serilizer=MovieSerializer(movie)
     return Response(serilizer.data)
 
 # Admin Movie Update View
@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updatemovie(request,movie_id):
     movie= get_object_or_404(Movie,pk=movie_id)
     serializer=MovieSerializer(movie,data=request.data)
     if  serializer.is_valid():
         serializer.save()
         return Response(serializer.data)
     else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
# Admin Delete View
@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def deletemovie(request, movie_id):
    try:
        movie = Movie.objects.get(id=movie_id)
        movie.delete()
        return Response({"message": "Movie deleted successfully"})
    except Movie.DoesNotExist:
        return Response({"message": "Movie not found"}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return Response({"message": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
# Admin Enable View
@api_view(['POST'])
@permission_classes([IsAuthenticated])  
def enablemovie(request, movie_id):
    try:
        movie = Movie.objects.get(pk=movie_id)
        movie.is_enabled = True
        movie.save()
        return JsonResponse({'message': 'Movie enabled successfully'})
    except Movie.DoesNotExist:
        return JsonResponse({'error': 'Movie not found'}, status=404)
    
# Admin Disable View
@api_view(['POST'])
@permission_classes([IsAuthenticated])  
def disablemovie(request, movie_id):
    try:
        movie = Movie.objects.get(pk=movie_id)
        movie.is_enabled = False
        movie.save()
        return JsonResponse({'message': 'Movie disabled successfully'})
    except Movie.DoesNotExist:
        return JsonResponse({'error': 'Movie not found'}, status=404)
        
# User Read Movie    
@api_view(['GET'])
@permission_classes([AllowAny])
def userreadmovie(request):
     movies=Movie.objects.filter(is_enabled=True)
     serilizer=MovieSerializer(movies,many=True)
     return Response(serilizer.data)

#User Movie Booking
@api_view(['POST'])
@permission_classes((AllowAny,))
def moviebooking(request):
    serializer = BookingSerializer(data=request.data)
    if serializer.is_valid():
        booking = serializer.save()
        serialized_data = BookingSerializer(booking).data
        return Response(serialized_data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes((AllowAny,))
def mybookings(request):
    try:
        # Fetch the booking history for the provided user_id
        bookings = Booking.objects.filter(user=request.user)
        
        # Check if there are any bookings for the user
        if not bookings.exists():
            return Response({"message": "No previous bookings"}, status=404)
    
        # Serialize the booking objects
        serializer = BookingSerializer(bookings, many=True)
        
        # Return the serialized booking data in the response
        return Response(serializer.data)
    
    except Exception as e:
        return Response({"message": str(e)}, status=500)
    
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def generateorder(request):
    client = razorpay.Client(auth=('rzp_test_RWsrVVw4Rc5Cq3', 'xDzF4SKgybU0zHTpJgewyMC3'))
    amount = int(request.data.get('amount'))
    order = client.order.create({'amount': amount, 'currency': 'INR'}) 

    return Response({
        'order_id': order['id'],
        'amount': amount,
        'currency': 'INR',
        'razorpay_key': 'xDzF4SKgybU0zHTpJgewyMC3' 
    })


@api_view(['POST'])
@permission_classes((AllowAny,))
def sendemail(request):
    if request.method == 'POST':
        recipient_email = request.data.get('recipient_email')
        subject = request.data.get('subject')
        message = request.data.get('message')

        if recipient_email and subject and message:
            try:
                # Send email
                send_mail(
                    subject=subject,
                    message=message,
                    from_email=settings.EMAIL_HOST_USER,
                    recipient_list=[recipient_email],
                    fail_silently=False,
                )
                return Response({'message': 'Email sent successfully'}, status=status.HTTP_200_OK)
            except Exception as e:
                return Response({'error': 'Failed to send email'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        else:
            return Response({'error': 'Missing required data in request'}, status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response({'error': 'Method not allowed'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)

