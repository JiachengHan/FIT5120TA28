# urls.py
from django.urls import path
from django.views.decorators.csrf import csrf_exempt
from .views import GeneratePDF

urlpatterns = [
    path('generate_pdf/', csrf_exempt(GeneratePDF.as_view()), name='generate_pdf'),
]
