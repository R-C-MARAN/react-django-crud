from django.urls import path, include
from rest_framework import routers
from .views import studentViewSet
router = routers.DefaultRouter()
router.register(r'students', studentViewSet)

urlpatterns = [
    path('', include(router.urls)), ]