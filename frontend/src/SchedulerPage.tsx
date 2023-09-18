import TopSection from './components/TopSection';
import CalendarSection from './components/CalendarSection';
import TodoSection from './components/TodoSection';
import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { ToDoItem, Event } from './components/types';
import { autoSchedule } from './functions';

export default function SchedulerPage() {
  let [todoItems, setTodoItems] = useState<ToDoItem[]>([]);
  let [schedulerData, setSchedulerData] = useState<Event[]>([]);
  let { user } = useAuth0();

  useEffect(() => {
    if (user === undefined) {
      return;
    }
    fetch(`http://localhost:8000/todo/${user.sub}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTodoItems(data.TodoList);
      })
      .catch((err) => console.log(err.message));
    fetch(`http://localhost:8000/event/${user.sub}`)
      .then((response) => response.json())
      .then((data) => {
        setSchedulerData(data.Event)
      })
      .catch((err) => console.log(err.message));
      
  }, []);

  async function deleteItem(id:number) {
    await fetch(`http://localhost:8000/todo/mod/${id}`, {
      method: 'DELETE',
    })
    .then((response => {
      if (response.status === 204) {
        setTodoItems(
          todoItems.filter((item) =>
            item.id !== id
          )
        )
      }
    }))
  }

  async function addItem(item: ToDoItem) {
    console.log(item)
    fetch('http://localhost:8000/todo/', { method: "POST",
                                           body: JSON.stringify(item),
                                           headers: {
                                            'Content-type': 'application/json; charset=UTF-8',
                                           }})
    .then((response) => response.json())
    .then((data) => {
      setTodoItems([...todoItems, data])
    }).catch((err) => {
      console.log(err.message);
    });
  }

  const addEvent = async (body:any) => {
    await fetch('http://localhost:8000/event/', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json())
    .then((data) => {
      setSchedulerData([...schedulerData, data])
    }).catch((err) => {
      console.log(err.message);
    });
    
  };

  const deleteEvent = async (id:number) => {
    await fetch(`http://localhost:8000/event/mod/${id}`, {
      method: 'DELETE',
    })
    .then((response => {
      if (response.status === 204) {
        setSchedulerData(
          schedulerData.filter((event) =>
            event.id !== id
          )
        )
      }
    }))
  }

  const editEvent = async (id:number, body:any) => {
    console.log(schedulerData);
    await fetch(`http://localhost:8000/event/mod/${id}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json())
    .then((data) => setSchedulerData((
      schedulerData.map((event) =>
        data.id === event.id
          ? data
          : event
      )
    )))
    .catch((err) => {
      console.log(err.message);
    });
  }

  function autoscheduleClicked() {
    autoSchedule(schedulerData, todoItems);
  }

  return (
    <div className="flex flex-col font-sans h-screen w-screen">
      <TopSection />
      <div className='flex flex-row h-11/12 mb-0'>
        <TodoSection todoItems={todoItems} deleteFunction={deleteItem} addFunction={addItem} autoScheduleFunction={autoscheduleClicked}/>
        <div className='w-3/4'>
          <CalendarSection events={schedulerData} addFunction={addEvent} deleteFunction={deleteEvent} editFunction={editEvent}/>
        </div>
      </div>
    </div>
  )
}