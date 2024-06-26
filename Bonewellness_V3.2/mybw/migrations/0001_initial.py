# Generated by Django 5.0.4 on 2024-04-15 11:35

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Hospital',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('forman_name', models.CharField(default='Unknown', max_length=50)),
                ('other_name', models.CharField(default='Unknown', max_length=50)),
                ('emergency_capable', models.BooleanField(default=False)),
                ('address', models.CharField(default='Unknown', max_length=100)),
                ('suburb', models.CharField(default='Unknown', max_length=50)),
                ('postcode', models.CharField(default='Unknown', max_length=50)),
                ('category', models.CharField(default='Unknown', max_length=50)),
                ('agency_type', models.CharField(default='Unknown', max_length=50)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
