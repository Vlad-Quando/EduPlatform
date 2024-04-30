from django.http.request import QueryDict
from exercises.models import *
from exercises.exercises_logic.text_modes import modes


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