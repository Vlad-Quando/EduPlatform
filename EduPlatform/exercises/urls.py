from django.urls import path
from exercises.views import exercises_list, exercise_page

app_name = 'exercises'

urlpatterns = [
    path('', exercises_list, name="exercises-list"),
    path('<slug:exercise_slug>/', exercise_page, name="exercise-page"),
]