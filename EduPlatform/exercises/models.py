from django.db import models


class Exercises(models.Model):
    name = models.CharField(max_length=20, unique=True, verbose_name="Упражнение")
    image = models.ImageField(upload_to='exercises_images', verbose_name="Изображение")
    slug = models.SlugField(max_length=200, unique=True, blank=True, null=True, verbose_name='URL')
    templates_folder_name = models.CharField(max_length=40, default="in-develop-templates", verbose_name="Папка шаблонов")

    class Meta:
        db_table = 'exercises'
        verbose_name = 'упражнение'
        verbose_name_plural = 'Упражнения'

    def __str__(self):
        return self.name
