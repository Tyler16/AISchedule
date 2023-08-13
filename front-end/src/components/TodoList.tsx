import React from 'react'

interface ToDoItem {
  id: number;
  name: string;
  dueDate?: Date;
  totalTime?: number;
  dailyTime?: number;
};

export default function TodoList(props: {todoItems: ToDoItem[]}) {
  return (
    <div className="w-full border-b-2 h-7/12">TodoList</div>
  )
}
