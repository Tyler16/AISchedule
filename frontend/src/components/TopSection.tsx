import LogoutButton from './LogoutButton';
import logo from '../assets/Calendar_icon_2.svg'

export default function TopSection() {
  return (
    <div className="h-1/12 w-full flex flex-row justify-center items-center border-b-2 border-gray-200">
      <div className="w-full flex flex-row justify-center items-center">
        <img src={logo} className="w-8"></img>
        <h1 className='text-cyan-400 text-xl'>AutoSchedule</h1>
      </div>
      <LogoutButton/>
    </div>
  )
}
