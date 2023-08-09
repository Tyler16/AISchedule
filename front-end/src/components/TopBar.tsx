import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faUser } from '@fortawesome/free-solid-svg-icons'

export default function TopBar() {
  return (
    <div className="border-b-2 border-gray-200 h-16 flex flex-row align-center justify-center items-center">
      <div>
        <h1 className='text-cyan-400 text-xl'>Reschedule</h1>
      </div>
      <button className="h-12 p-3 m-auto bg-cyan-300 text-white rounded-md">
        <FontAwesomeIcon icon={faPlus}/>
        <span className='p-2'>Add Event/To-Do item</span>
      </button>
      <button className='justify-self-end mr-2 bg-gray-200 w-12 h-12 rounded-full'><FontAwesomeIcon icon={faUser} className="fa-lg"/></button>
    </div>
  )
}
