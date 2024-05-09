from rest_framework import serializers

class PredictionSerializer(serializers.Serializer):
    CAD = serializers.IntegerField()
    fracture = serializers.IntegerField()
    alcohol = serializers.IntegerField()
    COPD = serializers.IntegerField()
    age = serializers.IntegerField()
