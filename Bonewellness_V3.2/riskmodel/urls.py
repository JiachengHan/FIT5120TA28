from django.urls import path
from django.views.decorators.csrf import csrf_exempt
from .views import PredictView

urlpatterns = [
    path('predict/', csrf_exempt(PredictView.as_view()), name='predict_api'),
]