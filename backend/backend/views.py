from django.http import JsonResponse
from .models import Event, TodoItem
from .serializers import EventSerializer

def event_list(request):
    events = Event.objects.all()
    serializer = EventSerializer(events, many=True)
    return JsonResponse({'Events': serializer.data}, safe=False)