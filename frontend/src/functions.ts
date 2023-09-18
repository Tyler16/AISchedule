import { ToDoItem, Event } from "./components/types";

class Heap {
  private heap: any[];
  private sortFunction: Function;

  public constructor(heap: any[], sortFunction: Function) {
    this.heap = heap;
    this.sortFunction = sortFunction;
  }

  public heapify() {

  }

  public heappop(): any {

  }
  
  public heappush() {

  }
}

export function autoSchedule(events: Event[], todoItems: ToDoItem[]) {
  
}