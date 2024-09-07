from django.urls import path
from main.views import index, profile

app_name = 'main'

urlpatterns = [
    path('', index, name="index"),
    path('profile/', profile, name="profile")
]