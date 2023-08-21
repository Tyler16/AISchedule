from rest_framework import serializers
from .models import Event, TodoItem

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['eventid', 'startDate', 'endDate', 'title', 'allDay', 'rRule', 'notes']