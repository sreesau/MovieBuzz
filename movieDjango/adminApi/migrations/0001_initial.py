# Generated by Django 5.0.6 on 2024-06-21 12:37

import datetime
import django.db.models.deletion
import uuid
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Movie',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('desc', models.TextField(max_length=1200)),
                ('genre', models.TextField(max_length=200)),
                ('ticketCost', models.DecimalField(decimal_places=2, max_digits=10)),
                ('poster', models.URLField(default='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd1nhio0ox7pgb.cloudfront.net%2F_img%2Fv_collection_png%2F512x512%2Fshadow%2Fmovie.png&f=1&nofb=1&ipt=a915797d2ec027f955d77b2b522710aecaab2f8bd4187486ae4234950dd57057&ipo=images', max_length=1000)),
                ('trailer', models.URLField(max_length=1000)),
                ('time1', models.BooleanField(default=False)),
                ('time2', models.BooleanField(default=False)),
                ('time3', models.BooleanField(default=False)),
                ('time4', models.BooleanField(default=False)),
                ('startDate', models.DateField(blank=True, null=True)),
                ('endDate', models.DateField(default=datetime.datetime(2024, 7, 21, 18, 7, 40, 713769))),
                ('is_enabled', models.BooleanField(default=True)),
            ],
        ),
        migrations.CreateModel(
            name='Booking',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('bookingDate', models.CharField(max_length=500)),
                ('bookingTime', models.CharField(max_length=50)),
                ('noOfSeats', models.IntegerField()),
                ('ticketCost', models.IntegerField(default=150)),
                ('totalCost', models.IntegerField(default=150)),
                ('bookingId', models.UUIDField(default=uuid.uuid4, editable=False, unique=True)),
                ('movieName', models.CharField(default='unknown', max_length=255)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('name', models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='adminApi.movie')),
            ],
        ),
    ]
