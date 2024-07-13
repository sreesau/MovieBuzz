from rest_framework import serializers
from .models import Movie, Booking
from django.contrib.auth import authenticate
from django.contrib.auth.models import User


class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model= Movie
        fields = '__all__'
        
class BookingSerializer(serializers.ModelSerializer):

    class Meta:
        model = Booking
        fields = ['id', 'user', 'bookingDate', 'bookingTime', 'noOfSeats', 'ticketCost', 'totalCost', 'bookingId', 'movieName']