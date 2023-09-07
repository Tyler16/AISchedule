import TopSection from './components/TopSection';
import CalendarSection from './components/CalendarSection';
import TodoSection from './components/TodoSection';

export default function SchedulerPage() {
  return (
    <div className="flex flex-col font-sans h-screen">
      <TopSection />
      <div className='flex flex-row h-11/12 mb-0'>
        <TodoSection />
        <div className='w-3/4'>
          <CalendarSection />
        </div>
      </div>
    </div>
  )
}