from django.http import JsonResponse
from .models import Event, TodoItem
from .serializers import EventSerializer, TodoItemSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.utils import timezone

# Add new events
@api_view(['POST'])
def event_create(request):
    if request.method == 'POST':
        serializer = EventSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors)
# Return list of events by user
@api_view(['GET'])
def event_list(request, query_uid):
    if request.method == 'GET':
        events = Event.objects.filter(uid=query_uid)
        serializer = EventSerializer(events, many=True)
        return JsonResponse({'Event': serializer.data}, safe=False)

# Edit and delete events
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

# Add new todo item
@api_view(['POST'])
def todo_create(request):
    if request.method == 'POST':
        serializer = TodoItemSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            print(serializer.error)
            return Response(serializer.error)

# Return todolist by uid
@api_view(['GET'])
def todo_list(request, query_uid):
    if request.method == 'GET':
        todo_list = TodoItem.objects.filter(uid=query_uid)
        serializer = TodoItemSerializer(todo_list, many=True)
        return JsonResponse({'TodoList': serializer.data})

# Delete todo item
@api_view(['PUT', 'DELETE'])
def todo_mod(request, query_id):
    item = TodoItem.objects.get(pk=query_id)
    if request.method == 'PUT':
        serializer = TodoItemSerializer(item, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    if request.method == 'DELETE':
        item.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)