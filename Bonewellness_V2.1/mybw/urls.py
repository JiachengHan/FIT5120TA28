from django.urls import path
from .views import HospitalListAPIView

urlpatterns = [
    path('api/hospitals/', HospitalListAPIView.as_view(), name='hospital-list'),
]