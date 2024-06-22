# Generated by Django 5.0 on 2024-06-22 12:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('exercises', '0003_memoitems_level_memoitems_theme_alter_modes_name_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='memoitems',
            name='level',
            field=models.IntegerField(blank=True, choices=[(1, '1'), (2, '2'), (3, '3'), (4, '4')], default=1, verbose_name='Уровень'),
        ),
        migrations.AlterField(
            model_name='memoitems',
            name='theme',
            field=models.CharField(blank=True, choices=[(1, 'Дорожный транспорт'), (2, 'Животные'), (3, 'Путешествие'), (4, 'Природа'), (5, 'Музыка'), (6, 'Мебель'), (7, 'Пейзажи'), (8, 'Одежда')], max_length=100, null=True, verbose_name='Тема'),
        ),
    ]
