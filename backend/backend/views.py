from django.http import JsonResponse
from .models import Event, TodoItem
from .serializers import EventSerializer, TodoItemSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.utils import timezone
import heapq

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
@api_view(['DELETE'])
def todo_mod(request, query_id):
    item = TodoItem.objects.get(pk=query_id)
    if request.method == 'DELETE':
        item.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET'])
def autoschedule(request, query_uid):
    now = timezone.now()
    items = TodoItem.objects.filter(uid=query_uid, dueDate__gte=now)
    prevEvents = Event.objects.filter(uid=query_uid, autoScheduled=True, endDate__gte=now)
    todayEvents = Event.objects.filter(uid=query_uid, startDate__gte=now, endDate__lte=now.replace(hour=23, minute=59, second=59))
    if request.method == 'GET':
        for event in prevEvents:
            try:
                modifiedItem = TodoItem.objects.get(pk=event.todoID)
                modifiedItem.timeLeft += 1
                modifiedItem.save()
            except TodoItem.DoesNotExist:
                continue
            
        prevEvents.delete()
        

        time_scores_heap = []
        for item in items:
            time_diff = item.dueDate - now
            days, seconds = time_diff.days - time_diff.seconds
            hour_diff = days * 24 + seconds // 3600
            if hour_diff <= 0:
                continue
            time_scores_heap.append((item.timeLeft / (hour_diff), item))
        heapq.heapify()
        return Response(status=status.HTTP_204_NO_CONTENT)