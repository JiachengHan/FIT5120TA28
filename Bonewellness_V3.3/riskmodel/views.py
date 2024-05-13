from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import PredictionSerializer
from .predictions import logistic_regression_prediction

class PredictView(APIView):
    def post(self, request):
        serializer = PredictionSerializer(data=request.data)
        if serializer.is_valid():
            data = serializer.validated_data
            probability = logistic_regression_prediction(
                data['CAD'], 
                data['fracture'], 
                data['alcohol'], 
                data['COPD'], 
                data['age']
            )
            if probability >= 0.5:
                result = "Our model DOES indicates that you potentially have a high risk of osteoporosis."
            else:
                result = "Our model DOES NOT indicate that you potentially have a high risk of osteoporosis."
            return Response({'prob':round(probability * 100,3),'result': result})
        else:
            return Response(serializer.errors, status=400)
