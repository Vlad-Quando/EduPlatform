# Generated by Django 4.2.7 on 2024-04-23 17:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('exercises', '0007_texts'),
    ]

    operations = [
        migrations.CreateModel(
            name='Modes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('mode', models.CharField(max_length=100, verbose_name='Режим')),
            ],
            options={
                'verbose_name': 'Режим',
                'verbose_name_plural': 'Режимы',
            },
        ),
    ]