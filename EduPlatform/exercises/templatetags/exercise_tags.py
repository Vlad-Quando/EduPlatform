from django import template
from atexit import register
from exercises.models import Texts, Modes


register = template.Library()


@register.simple_tag()
def get_texts():
    texts = Texts.objects.all()
    return texts


@register.simple_tag()
def get_modes():
    modes = Modes.objects.all()
    return modes