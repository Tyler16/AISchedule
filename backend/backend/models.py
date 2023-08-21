from django.db import models

class Event(models.Model):
    uid = models.CharField(max_length=128)
    eventid = models.IntegerField()
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    title = models.CharField(max_length=100)
    all_day = models.BooleanField()
    r_rule = models.CharField(max_length=50)
    notes = models.CharField(max_length=200)

class TodoItem(models.Model):
    uid = models.CharField(max_length=128)
    itemid = models.IntegerField()
    title = models.CharField(max_length=100)
    category = models.IntegerField()
    dueDate = models.DateTimeField()
    totalTime = models.IntegerField()