import React, {useState} from 'react';
import CalendarHeader from './components/CalendarHeader';
import Sidebar from './components/Sidebar';
import CalendarGrid from './components/CalendarGrid';
import { getMonth } from './util';

export default function CalendarPage() {
  let [currentMonth, setCurrentMonth] = useState(getMonth());

  return (
    <React.Fragment>
      <div className='h-screen flex flex-columns'>
        <CalendarHeader />
        <div className='flex flex-1'>
          <Sidebar />
          <CalendarGrid month={currentMonth} />
        </div>
      </div>
    </React.Fragment>
  )
}
