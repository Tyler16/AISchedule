import TopSection from './components/TopSection';
import CalendarSection from './components/CalendarSection';
import TodoSection from './components/TodoSection';

export default function SchedulerPage() {
  return (
    <div className="flex flex-col font-sans">
      <TopSection />
      <div className='flex flex-row'>
        <TodoSection />
        <div className='w-3/4'>
          <CalendarSection />
        </div>
      </div>
    </div>
  )
}