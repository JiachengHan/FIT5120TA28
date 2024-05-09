from django.db import models

# Create your models here.
class Hospital(models.Model):
    formal_name = models.CharField(max_length=50,default="Unknown",null=False)
    other_name = models.CharField(max_length=50,default="Unknown",null=False)
    emergency_capable = models.BooleanField(null=False,default=False)
    address = models.CharField(max_length=100,default="Unknown",null=False)
    suburb = models.CharField(max_length=50,default="Unknown",null=False)
    postcode = models.CharField(max_length=50,default="Unknown",null=False)
    category = models.CharField(max_length=50,default="Unknown",null=False)
    agency_type = models.CharField(max_length=50,default="Unknown",null=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.formal_name
