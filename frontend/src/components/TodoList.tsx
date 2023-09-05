import React from 'react'

interface ToDoItem {
  id: number;
  uid: string;
  title: string;
  category: number;
  dueDate: Date;
  totalTime: number;
};

export default function TodoList(props: {todoItems: ToDoItem[]}) {
  console.log(props.todoItems.map((item: ToDoItem) => item.title))
  return (
    <div className="w-full border-b-2 h-7/12 overflow-auto">
      {props.todoItems.map((item: ToDoItem) => <div key={item.id}>{item.title}</div>)}
    </div>
  )
}