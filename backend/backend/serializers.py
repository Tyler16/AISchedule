from rest_framework import serializers
from .models import Event, TodoItem

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['eventid', 'startDate', 'endDate', 'title', 'allDay', 'rRule', 'notes']

class EventWithUIDSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['uid', 'eventid', 'startDate', 'endDate', 'title', 'allDay', 'rRule', 'notes']

class EventNoIDSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['startDate', 'endDate', 'title', 'allDay', 'rRule', 'notes']