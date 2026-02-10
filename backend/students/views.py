from django.shortcuts import render
from rest_framework import viewsets
from .models import student
from .serializers import StudentSerializer
# Create your views here.
class studentViewSet(viewsets.ModelViewSet):
    queryset = student.objects.all()
    serializer_class = StudentSerializer