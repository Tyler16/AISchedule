import React from 'react';
import Day from './Day';

export default function CalendarGrid({month}: any) {
  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5">
      {month.map((row: any, i: number) => (
        <React.Fragment key={i}>
          {row.map((day: any, idx: number) => (
            <Day day={day} rowIdx={i} />
          ))}
        </React.Fragment>
      ))}
    </div>
  )
}
