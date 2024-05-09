from django.contrib import admin

# Register your models here.
from .models import Hospital

@admin.register(Hospital)
class MybwHospitalAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Hospital._meta.get_fields()]
