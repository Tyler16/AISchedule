import React from 'react';
import CalendarHeader from './components/CalendarHeader';
import Sidebar from './components/Sidebar';
import CalendarGrid from './components/CalendarGrid';
import { getMonth } from './util';

export default function CalendarPage() {
  return (
    <div className='h-screen flex flex-columns'>
        <CalendarHeader />
        <div className='flex flex-1'>
            <Sidebar />
            <CalendarGrid />
        </div>
    </div>
  )
}
