from django import forms


class SetTextForm(forms.Form):
    text = forms.CharField()
    mode = forms.CharField()


class SetFrTextForm(forms.Form):
    text = forms.CharField()


form_exercise_match = {
    "texts": SetTextForm,
    "skorochtenie": SetFrTextForm,
}