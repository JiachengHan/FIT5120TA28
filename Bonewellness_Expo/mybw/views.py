from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from .serializers import HospitalSerializer
from .models import Hospital

class HospitalListAPIView(APIView):
    def get(self,request,format=None):
        hospitals = Hospital.objects.all()
        serializer = HospitalSerializer(hospitals,many=True)
        return Response(serializer.data)
    
