import LoginButton from './components/LoginButton'
import example from './assets/autoschedule.png';
import logo from './assets/Calendar_icon_2.svg'

export default function LandingPage() {
  return (
    <div className='flex flex-col h-screen'>
      <div className="text-cyan-400 text-4xl p-3 flex justify-center items-center border-2 h-20">
        <img src={logo} className="w-12"></img>
        Autoschedule
      </div>
      <div className="flex flex-row h-full justify-center">
        
        <img src={example} className='w-1/2 h-2/3 mt-16 ml-2 flex rounded-lg border-2 justify-center shadow-2xl'></img>
        <div className='flex items-center justify-center w-1/2 flex-col text-gray-500 m-5 text-center p-2'>
          <h1 className='text-xl'>The Best Automatic Scheduler for your Scholary Needs</h1>
          <p>AutoSchedule is a combined calendar/todo list application that will enhance your productivity and time management.
            Easily keep track of all of your assignments, courses, clubs, and everything in between with this system.
            The autoschedule feature allows you to automatically schedule times to get work done, maximizing your efficiency every day
          </p>
          <LoginButton/>
        </div>
      </div>
    </div>
  )
}
