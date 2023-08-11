import TopBar from '@/components/TopBar';
import CalendarSection from '../components/CalendarSection';
import TodoSection from '../components/TodoSection';

export default function Home() {
  return (
    <main className="flex flex-col">
      <TopBar />
      <div className='flex flex-row'>
        <TodoSection />
        <div className='w-3/4'>
          <CalendarSection />
        </div>
      </div>
    </main>
  )
}
