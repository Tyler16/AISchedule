"use client"
import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';

export default function TodoSection() {

  const [selected, setSelected] = useState(false);
  const [todayClasses, setTodayClasses] = useState("");
  const [allClasses, setAllClasses] = useState("bg-cyan-300 text-white border-cyan-300");

  useEffect(() => {
    const temp = allClasses;
    setAllClasses(todayClasses)
    setTodayClasses(temp)
  }, [selected]);

  return (
    <div className='w-1/3 flex flex-col'>
      <div className='h-1/6 w-full items-center border-b-2'>
        <h1 className='text-center mt-5 mb-3 text-lg'>To Do</h1>
        <div className='flex flex-row text-center justify-center items-center ml'>
          <button className={`block border-2 p-1 w-20 rounded-l-md text-xs ${todayClasses}`} onClick={() => setSelected(false)}>Today</button>
          <button className={`block border-2 border-l-0 p-1 w-20 rounded-r-md text-xs ${allClasses}`} onClick={() => setSelected(true)}>All</button>
        </div>
      </div>
      <TodoList/>
      <div className='h-1/12'>
        <button className='w-full h-full bg-cyan-300 text-white rounded-lg'>Reschedule</button>
      </div>
    </div>
  )
}
