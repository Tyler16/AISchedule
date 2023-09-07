import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import LogoutButton from './LogoutButton';

export default function TopSection() {
  return (
    <div className="h-1/12 flex flex-row align-center justify-center items-center border-b-2 border-gray-200">
      <div>
        <h1 className='text-cyan-400 text-xl'>AutoSchedule</h1>
      </div>
      <LogoutButton/>
    </div>
  )
}
