from django.db import models
from django.contrib.auth.models import User
from datetime import datetime,timedelta
import uuid

class Movie(models.Model):
    name = models.CharField(max_length=100)
    desc = models.TextField(max_length=1200)
    genre = models.TextField(max_length=200)
    ticketCost = models.DecimalField(max_digits=10, decimal_places=2)
    poster = models.URLField(max_length=1000, default="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd1nhio0ox7pgb.cloudfront.net%2F_img%2Fv_collection_png%2F512x512%2Fshadow%2Fmovie.png&f=1&nofb=1&ipt=a915797d2ec027f955d77b2b522710aecaab2f8bd4187486ae4234950dd57057&ipo=images")
    trailer= models.URLField(max_length=1000,)
    time1 = models.CharField(max_length=50)
    time2 = models.CharField(max_length=50)
    time3 = models.CharField(max_length=50)
    time4 = models.CharField(max_length=50)
    startDate = models.DateField(null=True, blank=True)
    endDate = models.DateField(default=datetime.now() + timedelta(days=30))
    is_enabled = models.BooleanField(default=True)

class Booking(models.Model):
    
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE,default=1)
    bookingDate = models.CharField(max_length=500)
    bookingTime = models.CharField(max_length=50)
    noOfSeats=models.IntegerField()
    ticketCost = models.IntegerField(default=150)
    totalCost =  models.IntegerField(default=150)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    bookingId = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    movieName = models.CharField(max_length=255, default='unknown')

 