from django.http import JsonResponse
from .models import Event, TodoItem
from .serializers import EventSerializer, EventNoIDSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

@api_view(['POST'])
def event_create(request):
    if request.method == 'POST':
        serializer = EventSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET'])
def event_list(request, query_uid):
    if request.method == 'GET':
        events = Event.objects.filter(uid=query_uid)
        serializer = EventSerializer(events, many=True)
        return JsonResponse({'Event': serializer.data}, safe=False)

@api_view(['PUT', 'DELETE'])
def event_mod(request, query_id):
    event = Event.objects.get(pk=query_id)
    if request.method == 'PUT':
        serializer = EventSerializer(event, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    if request.method == 'DELETE':
        event.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)