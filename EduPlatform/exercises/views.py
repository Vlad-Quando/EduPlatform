from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

from exercises.models import Exercises
from exercises.forms import form_exercise_match
from exercises.exercises_logic.exercise_data_collector import exercise_collector_match


templates_folder = ""


def exercises_list(request):
    exercises = Exercises.objects.all()
    context = {
        'exercises': exercises,
    }
    return render(request, "exercises/exercises-list.html", context)


@csrf_exempt
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
        form = form_exercise_match[exercise_slug](data=request.POST)
        
        if form.is_valid():
            context = exercise_collector_match[exercise_slug](request.POST)
        else:
            context = {}
        page_name = "executing-page.html"

    return render(request, f"exercises/{templates_folder}/{page_name}", context)
