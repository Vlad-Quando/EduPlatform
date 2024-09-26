from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from users.forms import UserForm
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
def login_view(request):
    if request.method == 'POST':
        form = UserForm(data=request.POST)
        if form.is_valid():
            username = request.POST['username']
            password = request.POST['password']
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                user = User.objects.get(username=username)
            return render(request, 'users/profile.html')
        else:
            return render(request, "users/login.html")
    else:
        return render(request, "users/login.html")

@login_required(redirect_field_name='/users/login.html')
def profile(request):
    user = request.user
    
    return render(request, "users/profile.html")