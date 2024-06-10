from django.http.request import QueryDict
from exercises.models import *
from exercises.exercises_logic.text_modes import modes
from exercises.forms import *


def collect_data(context: QueryDict) -> dict:
    data = dict()
    for i in context:
        match i:
            case "text":
                data[i] = Texts.objects.get(name=context[i]).content
            case "mode":
                mode = Modes.objects.get(name=context[i]).name
                if "text" in data.keys():
                    data["text"] = modes[mode](data["text"])
    
    return data


# def get_exercise_form(request, exercise_slug: str):
#     match exercise_slug:
#         case "texts":
#             form = SetTextExercise(data=request.POST)
#             return form
#         case "memo":
#             # form = 
#             pass
#     return None