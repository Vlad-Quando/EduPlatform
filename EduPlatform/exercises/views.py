from django.shortcuts import render
from exercises.models import Exercises
from exercises.forms import SetTextExercise
from exercises.exercises_logic.exercise_data_collector import collect_data


templates_folder = ""


def exercises_list(request):
    exercises = Exercises.objects.all()
    context = {
        'exercises': exercises,
    }
    return render(request, "exercises/exercises-list.html", context)


def exercise_window(request, exercise_slug):
    global templates_folder
    page_name = ""
    exercise = ""

    if request.method == "GET":
        exercise = Exercises.objects.get(slug=exercise_slug)

        templates_folder = exercise.templates_folder_name
        if templates_folder == "system-templates":
            page_name = "in-develop.html"
        else:
            page_name = "preset-page.html"

        context = {
            'exercise_data': exercise
        }

    elif request.method == "POST":
        try:
            print(request)
            form = SetTextExercise(data=request.POST)
                
            if form.is_valid():
                context = collect_data(request.POST)
            page_name = "executing-page.html"
        except UnboundLocalError:
            print(request.POST)

    return render(request, f"exercises/{templates_folder}/{page_name}")
