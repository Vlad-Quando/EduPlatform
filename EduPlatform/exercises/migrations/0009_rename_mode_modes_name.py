# Generated by Django 4.2.7 on 2024-04-23 17:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('exercises', '0008_modes'),
    ]

    operations = [
        migrations.RenameField(
            model_name='modes',
            old_name='mode',
            new_name='name',
        ),
    ]