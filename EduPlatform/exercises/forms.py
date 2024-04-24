from django import forms


class SetTextExercise(forms.Form):
    text = forms.CharField()
    mode = forms.CharField()