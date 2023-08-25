import React from 'react'

interface ToDoItem {
  id: number;
  name: string;
  category: number;
  dueDate: Date;
  totalTime: number;
};

export default function TodoList(props: {todoItems: ToDoItem[]}) {
  return (
    <div className="w-full border-b-2 h-7/12">
      {props.todoItems.map((item: ToDoItem) => <div>{item.name}</div>)}
    </div>
  )
}