from django.shortcuts import render
from exercises.models import Exercises


def exercises_list(request):
    exercises = Exercises.objects.all()
    context = {
        'exercises': exercises,
    }
    return render(request, "exercises/exercises-list.html", context)


def exercise_window(request, exercise_slug):

    if request.method == "GET":
        exercise = Exercises.objects.get(slug=exercise_slug)

        template_folder = exercise.templates_folder_name
        if template_folder == "in-develop-templates":
            page_name = "in-develop.html"
        else:
            page_name = "preset-page.html"

        print(template_folder)
        print(page_name)

        context = {
            'exercise_data': exercise
        }

    return render(request, f"exercises/{exercise.templates_folder_name}/{page_name}", context)
