from django.db import models

class Event(models.Model):
    uid = models.CharField(max_length=64)
    name = models.CharField(max_length=200)
    date = models.DateField()
    start_time = models.TimeField()
    end_time = models.TimeField()
    from_task = models.BooleanField(default=False)

class DailyTask(models.Model):
    uid = models.CharField(max_length=64)
    name = models.CharField(max_length=200)
    date = models.DateField()
    completed = models.BooleanField(default=False)