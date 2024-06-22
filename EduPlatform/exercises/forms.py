from django import forms


class TextForm(forms.Form):
    text = forms.CharField()
    mode = forms.CharField()


class FrForm(forms.Form):
    text = forms.CharField()


class MemoForm(forms.Form):
    items_count = forms.CharField()
    preparing_time = forms.CharField()


class ShulteForm(forms.Form):
    size = forms.CharField()
    type = forms.CharField()


form_exercise_match = {
    "texts": TextForm,
    "skorochtenie": FrForm,
    "memo": MemoForm,
    "shulte-table": ShulteForm
}