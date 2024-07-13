from django import forms
from .models import Movie
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User


class MovieForm(forms.ModelForm):
    class Meta:
        model= Movie
        fields='__all__'
 
    
class CustomUserCreationForm(UserCreationForm):
    email =forms.EmailField()
    
    class Meta:
        model=User
        fields=['username','email','password1','password2']