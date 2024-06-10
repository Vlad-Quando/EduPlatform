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
    
class Texts(models.Model):
    name = models.CharField(max_length=20, unique=True, verbose_name="Заголовок")
    content = models.TextField(verbose_name="Текст")

    class Meta:
        db_table = 'texts'
        verbose_name = 'текст'
        verbose_name_plural = 'тексты'
    
    def __str__(self):
        return self.name


class Modes(models.Model):
    name = models.CharField(verbose_name='Режим', max_length=100)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Режим"
        verbose_name_plural = "Режимы"


class MemoItems(models.Model):
    name = models.CharField(verbose_name='Название', max_length=100)
    image = models.ImageField(upload_to='memo_items', verbose_name="Изображение")

    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name = "Memo-предмет"
        verbose_name_plural = "Memo-предметы"