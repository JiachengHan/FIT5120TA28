from rest_framework import serializers
from .models import Hospital

class HospitalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hospital
        fields = ('id','formal_name','other_name','emergency_capable','address','suburb','postcode','category','agency_type','created_at')
