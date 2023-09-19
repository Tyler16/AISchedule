from django.db import models

class Event(models.Model):
    uid = models.CharField(max_length=128)
    startDate = models.DateTimeField()
    endDate = models.DateTimeField()
    title = models.CharField(max_length=100)
    allDay = models.BooleanField()
    rRule = models.CharField(max_length=200, null=True, blank=True)
    exDate = models.CharField(max_length=200, null=True, blank=True)
    notes = models.CharField(max_length=200, null=True, blank=True)
    autoScheduled = models.BooleanField(default=False)
    associatedTodo = models.IntegerField(null=True, blank=True)

class TodoItem(models.Model):
    uid = models.CharField(max_length=128)
    title = models.CharField(max_length=100)
    category = models.CharField(max_length=10)
    dueDate = models.DateTimeField()
    totalTime = models.IntegerField()
    timeLeft = models.IntegerField()
    def save(self, *args, **kwargs):
        if not self.timeLeft:
            self.timeLeft = self.totalTime
        super(TodoItem, self).save(*args, **kwargs)