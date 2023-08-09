import TopBar from '@/components/TopBar';
import CalendarSection from '../components/CalendarSection';
import TodoSection from '../components/TodoSection';

export default function Home() {
  return (
    <main>
      <div className="flex flex-col">
        <TopBar />
        <div className='flex flex-row'>
          <TodoSection />
          <div className='w-2/3'>
            <CalendarSection />
          </div>
        </div>
      </div>
    </main>
  )
}
