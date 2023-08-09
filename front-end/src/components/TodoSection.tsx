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
    <div className='w-1/3 flex flex-col'>
      <div className='h-1/6 w-full items-center border-b-2'>
        <h1 className='text-center mt-5 mb-3 text-lg'>To Do</h1>
        <div>
          <ToggleButtons left="Today" right="All" returnFunc={getToggle}/>
        </div>
      </div>
      <TodoList/>
      <div className='h-1/12'>
        <button className='w-full h-full bg-cyan-300 text-white rounded-lg'>Reschedule</button>
      </div>
    </div>
  )
}
