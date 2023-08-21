from django.http import JsonResponse
from .models import Event, TodoItem
from .serializers import EventSerializer
from rest_framework.decorators import api_view

@api_view(['GET'])
def event_list(request, query_uid):
    if request.method == 'GET':
        events = Event.objects.filter(uid=query_uid)
        serializer = EventSerializer(events, many=True)
        return JsonResponse({'Events': serializer.data}, safe=False)