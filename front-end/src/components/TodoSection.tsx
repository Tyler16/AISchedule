"use client"
import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import ToggleButtons from './ToggleButtons';
export default function TodoSection() {
  const [toggleState, setToggleState] = useState(false);
  const [allTodoItems, setAllItems] = useState([]);
  const [dailyTodoItems, setDailyItems] = useState([]);

  const getToggle = (toggled: boolean) => {
    console.log(toggled)
    setToggleState(toggled);
  };

  return (
    <div className='w-1/4 flex flex-col'>
      <div className='h-1/6 w-full items-center border-b-2'>
        <h1 className='text-center mt-5 mb-3 text-lg'>To Do</h1>
        <div>
          <ToggleButtons left="All" right="Today" returnFunc={getToggle}/>
        </div>
      </div>
      <TodoList todoItems={toggleState ? allTodoItems : dailyTodoItems}/>

      <div className='h-1/4 justify-center w-full'>
        <div className='flex flex-row'>
          <input placeholder="Title" className="m-2 border-2"/>
          <input type="checkbox" className="w-4 text-cyan-300 bg-gray-100"/><label className="mt-3 ml-1">Has Due Date?</label>
        </div>
        <label className='ml-2'>Due Date:</label> <input type="date" className="m-2 border-2"/>
        <div className="flex flex-row">
          <button className='w-44 h-11 bg-cyan-300 text-white rounded-lg m-1 ml-3'>Add Item</button>
          <button className='w-44 h-11 bg-cyan-300 text-white rounded-lg m-1'>Reschedule</button>
        </div>
      </div>
    </div>
  )
}
