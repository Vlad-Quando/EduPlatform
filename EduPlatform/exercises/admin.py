from django.contrib import admin

from exercises.models import Exercises


# admin.site.register(Exercises)

@admin.register(Exercises)
class ExercisesAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('name',)}
    list_display = ['name',]
