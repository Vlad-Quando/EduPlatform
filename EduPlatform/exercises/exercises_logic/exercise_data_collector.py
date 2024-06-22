from django.http.request import QueryDict
from exercises.models import *
from exercises.exercises_logic.text_modes import modes
from exercises.forms import *
from random import shuffle


def shuffle_queryset(array):
    indexes = list(i for i in range(len(array)))
    shuffle(indexes)
    result = list()
    for i in indexes:
        result.append(array[i])
    return result


def collect_data_for_texts(context: QueryDict) -> dict:
    data = dict()

    text = Texts.objects.get(name=context["text"]).content
    mode = Modes.objects.get(name=context["mode"]).name
    data["text"] = modes[mode](text)
    
    return data


def collect_data_for_fr(context: QueryDict) -> dict:
    text = Texts.objects.get(name=context["text"]).content
    time = context['timer']
    text_list = text.split()
    result = ""
    count = 1
    for word in text_list:
        if word.isalpha():
            cur = f' <a class="fr-word" id="{count}" onclick="showResults(event)"><span>' + word + '</span></a>'
            result += cur
        elif len(word) > 1:
            cur = f' <a class="fr-word" id="{count}" onclick="showResults(event)"><span>' + word[:-1] + '</span></a>' + word[-1]
            result += cur
        count += 1
    items = {"text": result.strip(), "time": time}
    return items


def collect_data_for_memo(context: QueryDict):
    items_count = int(context['items_count']) // 2
    preparing_time = int(context['preparing_time'])

    items = list(MemoItems.objects.all())
    shuffle(items)
    items = items[:items_count] * 2
    shuffle(items)

    data = {'items': items, 'preparing_time': preparing_time}

    return data


def collect_data_for_shulte(context: QueryDict):
    size = int(context['size'])
    table_type = context['type']

    if table_type == "Цифры":
        ordered_array = list(i for i in range(1, size ** 2 + 1))
        unordered_array = ordered_array.copy()
        shuffle(unordered_array)
    elif table_type == "Буквы":
        ordered_array = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Ю'][:size ** 2]
        unordered_array = ordered_array.copy()
        shuffle(unordered_array)

    return {'ordered_array': ordered_array, 'unordered_array': unordered_array, 'size': size}


exercise_collector_match = {
    "texts": collect_data_for_texts,
    "skorochtenie": collect_data_for_fr,
    "memo": collect_data_for_memo,
    "shulte-table": collect_data_for_shulte
}