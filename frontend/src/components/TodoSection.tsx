import { useState, useEffect } from 'react';
import TodoList from './todo/TodoList';
import TodoBar from './todo/TodoBar';
import { useAuth0 } from '@auth0/auth0-react';

interface ToDoItem {
  id: number;
  uid: string;
  title: string;
  category: number;
  dueDate: Date;
  totalTime: number;
};

export default function TodoSection() {
  let [allTodoItems, setAllItems] = useState<ToDoItem[]>([]);
  let { user } = useAuth0();

  useEffect(() => {
    if (user === undefined) {
      return;
    }
    fetch(`http://localhost:8000/todo/${user.sub}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAllItems(data.TodoList);
      })
      .catch((err) => console.log(err.message));
  }, []);

  async function deleteEvent(id:number) {
    await fetch(`http://localhost:8000/todo/mod/${id}`, {
      method: 'DELETE',
    })
    .then((response => {
      if (response.status === 204) {
        setAllItems(
          allTodoItems.filter((item) =>
            item.id !== id
          )
        )
      }
    }))
  }

  function handleSubmit(e:any) {
    if (user === undefined) {
      return;
    }
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form)
    const convertedObj = {...Object.fromEntries(formData.entries()), uid: user.sub}
    fetch('http://localhost:8000/todo/', { method: form.method,
                                           body: JSON.stringify(convertedObj),
                                           headers: {
                                            'Content-type': 'application/json; charset=UTF-8',
                                           }})
    .then((response) => response.json())
    .then((data) => {
      setAllItems([...allTodoItems, data])
    }).catch((err) => {
      console.log(err.message);
    });
  }

  return (
    <div className='w-1/4 flex flex-col overflow-auto mb-0'>
      <TodoBar/>
      <TodoList todoItems={allTodoItems} deleteFunction={deleteEvent}/>

      <form className='h-1/4 justify-center w-full border-b-2 pb-0' method='POST' onSubmit={handleSubmit}>
        <div className='flex flex-row'>
          <input placeholder="Title" name="title" className="m-2 mb-1 border-2 w-90"/>
          <select name="category" defaultValue="assignment" className='border-2 bg-white h-7 w-26 ml-1 mt-2'>
            <option value="assignment">Assignment</option>
            <option value="test">Test</option>
            <option value="project">Project</option>
          </select>
        </div>

        <div className='flex flex-row'>
          <label className='ml-2 mt-1'>Due:</label>
          <input type="datetime-local" name="dueDate" className="m-1 border-2 w-56 ml-2"/>
        </div>
      
        <label className='m-2 mt-3'>Time Required(hours):</label><input type="number" name="totalTime" min="1" className="w-20 border-2 mb-1 mt-1"/>
        <div className="flex flex-row border-t-2 pb-0 p-0">
          <button className='w-44 h-10 bg-cyan-300 text-white rounded-lg m-1 ml-3' type="submit">Add Item</button>
          <button className='w-44 h-10 bg-cyan-300 text-white rounded-lg m-1' type="button">Reschedule</button>
        </div>
      </form>
    </div>
  )
}