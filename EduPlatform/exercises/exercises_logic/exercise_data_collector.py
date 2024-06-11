from django.http.request import QueryDict
from exercises.models import *
from exercises.exercises_logic.text_modes import modes
from exercises.forms import *


def collect_data_for_texts(context: QueryDict) -> dict:
    data = dict()

    text = Texts.objects.get(name=context["text"]).content
    mode = Modes.objects.get(name=context["mode"]).name
    data["text"] = modes[mode](text)
    
    return data


def collect_data_for_fr(context: QueryDict) -> dict:
    text = Texts.objects.get(name=context["text"]).content
    text_list = text.split()
    result = ""
    count = 1
    for word in text_list:
        if word.isalpha():
            result += f' <a class="fr-word" id="{count}"><span>' + word + '</span></a>'
        elif len(word) > 1:
            result += f' <a class="fr-word" id="{count}"><span>' + word[:-1] + '</span></a>' + word[-1]
        count += 1

    return {"text": result.strip()}


exercise_collector_match = {
    "texts": collect_data_for_texts,
    "skorochtenie": collect_data_for_fr
}