from django.db import models

class Event(models.Model):
    uid = models.CharField(max_length=128)
    startDate = models.DateTimeField()
    endDate = models.DateTimeField()
    title = models.CharField(max_length=100)
    allDay = models.BooleanField()
    rRule = models.CharField(max_length=50, null=True, blank=True)
    notes = models.CharField(max_length=200, null=True, blank=True)

class TodoItem(models.Model):
    uid = models.CharField(max_length=128)
    title = models.CharField(max_length=100)
    category = models.IntegerField()
    dueDate = models.DateTimeField()
    totalTime = models.IntegerField()