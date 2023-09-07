import React from 'react'
import TodoItem from './TodoItem';

interface ToDoItem {
  id: number;
  uid: string;
  title: string;
  category: number;
  dueDate: Date;
  totalTime: number;
};

export default function TodoList(props: {todoItems: ToDoItem[], deleteFunction: Function}) {
  return (
    <div className="w-full border-b-2 h-3/4 overflow-auto">
      {props.todoItems.map((item: ToDoItem) => <TodoItem item={item} key={item.id} deleteFunction={props.deleteFunction}/>)}
    </div>
  )
}