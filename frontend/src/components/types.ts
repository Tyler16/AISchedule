export interface ToDoItem {
  id: number;
  uid: string;
  title: string;
  category: number;
  dueDate: Date;
  totalTime: number;
};

export interface Event {
  id:number;
  title: string;
  startDate: Date;
  endDate: Date;
  allDay: boolean;
  rRule?: string;
  exDate?: string;
  notes?: string;
};

export interface TodoItemProps {
  item: ToDoItem,
  deleteFunction: Function
}

export interface TodoListProps {
  todoItems: ToDoItem[],
  deleteFunction: Function
}