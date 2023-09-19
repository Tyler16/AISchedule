import { ToDoItem, Event, EventNoID } from "./components/types";

class Heap {
  private heap: ToDoItem[];
  private today: Date;

  public constructor(heap: ToDoItem[], today: Date) {
    this.heap = heap;
    this.today = today
  }

  private getParentIndex(childIndex: number): number {
      return Math.floor((childIndex - 1) / 2);
  }
  
  private hasParent(index: number): boolean {
      return this.getParentIndex(index) >= 0;
  }

  private parent(index: number): ToDoItem {
      return this.heap[this.getParentIndex(index)];
  }

  private swap(indexOne, indexTwo) {
    const temp = this.heap[indexOne];
    this.heap[indexOne] = this.heap[indexTwo];
    this.heap[indexTwo] = temp;
  }

  private compareItems(item1: ToDoItem, item2: ToDoItem) {
    let item1Score: number = item1.timeLeft / ((new Date(item1.dueDate)).getTime() - this.today.getTime());
    let item2Score: number = item2.timeLeft / ((new Date(item2.dueDate)).getTime() - this.today.getTime());
    return item1Score < item2Score;
  }

  public heapify() {
    let index = this.heap.length - 1;
     while (this.hasParent(index) && this.compareItems(this.heap[index], this.parent(index))) {
         this.swap(this.getParentIndex(index), index);
         index = this.getParentIndex(index);
     }
  }

  public heappop(): ToDoItem | null {
    if (this.heap.length === 0) {
      return null;
    }
    const item = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapify();
    return item;
  }
  
  public heappush(item: ToDoItem) {
    this.heap.push(item);
    this.heapify();
  }
}

function addMinutes(date, minutes) {
  return new Date(date.getTime() + minutes * 60000);
}


export function autoSchedule(events: Event[], todoItems: ToDoItem[]): EventNoID[] {
  let today: Date = new Date();
  let todayEvents: Event[] = events.filter((event) => (new Date(Date.parse(event.startDate))).getDate() == today.getDate() && 
                                              (new Date(Date.parse(event.startDate))).getMonth() == today.getMonth() &&
                                              (new Date(Date.parse(event.startDate))).getFullYear() == today.getFullYear());
  let nextHour: Date = new Date(today.getFullYear(), today.getMonth(), today.getDate(), today.getHours() + 1, 0, 0, 0);
  let heap: Heap = new Heap(todoItems, today);
  let newEvents: EventNoID[] = [];
  let modifiedItems: ToDoItem[] = [];
  while (nextHour.getHours() < 23) {
    let timeBlockEvents: Event[] = todayEvents.filter((event) => new Date(Date.parse(event.startDate)) >= nextHour &&
                                                        new Date(Date.parse(event.startDate)) <= addMinutes(nextHour, 60) || 
                                                        new Date(Date.parse(event.endDate)) >= nextHour &&
                                                        new Date(Date.parse(event.endDate)) <= addMinutes(nextHour, 60) ||
                                                        new Date(Date.parse(event.startDate)) <= nextHour &&
                                                        new Date(Date.parse(event.endDate)) >= nextHour ||
                                                        new Date(Date.parse(event.startDate)) <= addMinutes(nextHour, 60) &&
                                                        new Date(Date.parse(event.endDate)) >= addMinutes(nextHour, 60));
    if (timeBlockEvents.length == 0) {
      let currentItem: ToDoItem | null = heap.heappop()
      if (currentItem == null) {
        break;
      }
      currentItem.timeLeft -= 1;
      modifiedItems.push({...currentItem});
      newEvents.push({
        title: "Work on " + currentItem.title,
        startDate: nextHour,
        endDate: addMinutes(nextHour, 60),
        allDay: false,
        autoScheduled: true,
        associatedTodo: currentItem.id,
      })
      if (currentItem.timeLeft > 0) {
        heap.heappush(currentItem);
      }
    }
    nextHour = addMinutes(nextHour, 90);
  }
  return newEvents
}