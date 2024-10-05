from django.urls import path
from users.views import login_view, profile, useradd

app_name = 'users'

urlpatterns = [
    path('login/', login_view, name="login"),
    path('profile/', profile, name="profile"),
    path('useradd/', useradd, name='useradd')
]