# Generated by Django 4.2.4 on 2023-09-11 02:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0013_event_autoscheduled'),
    ]

    operations = [
        migrations.AddField(
            model_name='todoitem',
            name='timeLeft',
            field=models.IntegerField(default=4),
            preserve_default=False,
        ),
    ]
