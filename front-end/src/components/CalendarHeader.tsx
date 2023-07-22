import React from 'react'
import LogoutButton from './LogoutButton'

export default function CalendarHeader() {
  return (
    <header className='px-4 py-2 flex items-center'>
      <button>
        <span className='material-icons-outlined cursor-pointer text-gray-600'>
          chevron_left
        </span>
      </button>
      <button>
        <span className='material-icons cursor-pointer text-gray-600'>
          chevron_right
        </span>
      </button>
      <LogoutButton />
    </header>
  )
}
