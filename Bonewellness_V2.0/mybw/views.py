from django.shortcuts import render
from rest_framework import generics
from .serializers import HospitalSerializer
from .models import Hospital

class HospitalView(generics.CreateAPIView):
    queryset = Hospital.objects.all()
    serializer_class = HospitalSerializer
