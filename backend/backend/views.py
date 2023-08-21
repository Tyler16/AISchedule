from django.http import JsonResponse
from .models import Event, TodoItem
from .serializers import EventSerializer, EventWithUIDSerializer, EventNoIDSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

@api_view(['POST'])
def event_create(request):
    if request.method == 'POST':
        deserializer = EventWithUIDSerializer(data=request.data)
        if deserializer.is_valid():
            deserializer.save()
            return Response(deserializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET'])
def event_list(request, query_uid):
    if request.method == 'GET':
        events = Event.objects.filter(uid=query_uid)
        serializer = EventSerializer(events, many=True)
        return JsonResponse({'Events': serializer.data}, safe=False)

@api_view(['PUT', 'DELETE'])
def event_mod(request, query_uid, query_eventid):
    event = Event.objects.get(uid=query_uid, eventid=query_eventid)
    serializer = EventNoIDSerializer(event, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)