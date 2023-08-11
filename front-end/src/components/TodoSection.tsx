"use client"
import React, { useState } from 'react';
import TodoList from './TodoList';
import ToggleButtons from './ToggleButtons';
export default function TodoSection() {
  const [toggleState, setToggleState] = useState(false);

  const getToggle = (toggled: boolean) => {
    setToggleState(toggled);
    console.log(toggleState)
  }

  return (
    <div className='w-1/4 flex flex-col'>
      <div className='h-1/6 w-full items-center border-b-2'>
        <h1 className='text-center mt-5 mb-3 text-lg'>To Do</h1>
        <div>
          <ToggleButtons left="All" right="Today" returnFunc={getToggle}/>
        </div>
      </div>
      <TodoList/>
      <div className='h-1/12 justify-center w-full'>
        <button className='w-44 h-11 bg-cyan-300 text-white rounded-lg m-1 ml-3'>Add Item</button>
        <button className='w-44 h-11 bg-cyan-300 text-white rounded-lg m-1'>Reschedule</button>
      </div>
    </div>
  )
}
