import { ToDoItem, Event } from "./components/types";
/*
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

function compareItems(item1: ToDoItem, item2: ToDoItem) {

}*/

export function autoSchedule(events: Event[], todoItems: ToDoItem[]) {
  let today = new Date();
  console.log(today);
  console.log(events);
  console.log(todoItems);
}