import dayjs from "dayjs";
import React from 'react';

export default function Day({day, rowIdx}: any) {
  function currentDayClass() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-cyan-300 text-white rounded-full w-7"
      : "";
  }
  return (
    <div className='border border-gray-200 flex flex-col'>
      <header className="flex flex-col items-center">
        {rowIdx === 0 && (
          <p className="text-sm mt-1">
            {day.format('ddd').toUpperCase()}
          </p>
        )}
        <p className={`text-sm p-1 my-1 text-center ${currentDayClass()}`}>
          {day.format('DD')}
        </p>
      </header>
    </div>
  )
}
