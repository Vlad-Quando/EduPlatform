from django.urls import path
from exercises.views import exercises_list, exercise_window

app_name = 'exercises'

urlpatterns = [
    path('', exercises_list, name="exercises"),
    path('<slug:exercise_slug>/', exercise_window, name="exercise-window"),
]