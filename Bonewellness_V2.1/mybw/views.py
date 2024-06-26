from django.shortcuts import render
from rest_framework import generics
from .serializers import HospitalSerializer
from .models import Hospital

class HospitalListAPIView(generics.ListAPIView):
    queryset = Hospital.objects.all()
    serializer_class = HospitalSerializer
