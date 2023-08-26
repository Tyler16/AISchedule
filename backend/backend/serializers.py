from rest_framework import serializers
from .models import Event, TodoItem

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['id', 'uid', 'startDate', 'endDate', 'title', 'allDay', 'rRule', 'exDate', 'notes']

class TodoItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = TodoItem
        fields = ['id', 'uid', 'title', 'category', 'dueDate', 'totalTime']