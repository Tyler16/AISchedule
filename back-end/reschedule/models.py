from django.db import models

class Event(models.Model):
    name = models.CharField(max_length=200)
    date = models.DateField()
    start_time = models.TimeField()
    end_time = models.TimeField()
    from_task = models.BooleanField(default=False)
    uid = models.CharField(max_length=64)

class TaskDaily(models.Model):
    name = models.CharField(max_length=200)
    date = models.DateField()
    completed = models.BooleanField(default=False)
    uid = models.CharField(max_length=64)

class TaskOverall(models.Model):
    name = models.CharField(max_length=200)
    completed = models.BooleanField(default=False)
    finishDate = models.DateField(default=None)
    uid = models.CharField(max_length=64)