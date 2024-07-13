from django.urls import path
from . import views

urlpatterns = [
      path('register/', views.register,name='register'),
    path('login/', views.login,name='login'),
    path('logout/', views.logout,name='logout'),
    path('addmovie/', views.addmovie,name='addmovie'),
    path('readmovie/', views.readmovie,name='readmovie'),
    path('detailmovie/<int:movie_id>', views.detailmovie,name='detailmovie'),
    path('updatemovie/<int:movie_id>', views.updatemovie,name='updatemovie'),
    path('deletemovie/<int:movie_id>', views.deletemovie,name='deletemovie'),
    path('enablemovie/<int:movie_id>', views.enablemovie,name='enablemovie'),
    path('disablemovie/<int:movie_id>', views.disablemovie,name='disablemovie'),
    path('userreadmovie/', views.userreadmovie,name='userreadmovie'),
    path('moviebooking/', views.moviebooking,name='moviebooking'),
    path('generateorder/', views.generateorder,name='razorpay_generateorder'),
    path('sendemail/', views.sendemail,name='sendemail'),
    path('mybookings/', views.mybookings,name='mybookings'),



    


]