# urls.py
from django.urls import path
from .views import GeneratePDF

urlpatterns = [
    path('generate_pdf/', GeneratePDF.as_view(), name='generate_pdf'),
]
