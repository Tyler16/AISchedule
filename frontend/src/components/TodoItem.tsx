import React from 'react'

interface ToDoItem {
  id: number;
  uid: string;
  title: string;
  category: number;
  dueDate: Date;
  totalTime: number;
};

export default function TodoItem(props: {item: ToDoItem}) {
  return (
    <div>
      <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
      {props.item.title}, {props.item.category}, {new Date(props.item.dueDate).toLocaleDateString()}</div>
  )
}

