from django.urls import path
from .views import HospitalView

urlpatterns = [
    path("home",HospitalView.as_view()),
]