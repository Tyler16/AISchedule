import { useState, useEffect } from 'react';
import TodoList from './TodoList';
import ToggleButtons from './ToggleButtons';
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
  let [toggleState, setToggleState] = useState(false);
  let [allTodoItems, setAllItems] = useState<ToDoItem[]>([]);
  let [dailyTodoItems, setDailyItems] = useState<ToDoItem[]>([]);
  let { user } = useAuth0();

  useEffect(() => {
    fetch(`http://localhost:8000/todo/${user.sub}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAllItems(data.TodoList);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const getToggle = (toggled: boolean) => {
    setToggleState(toggled);
  };

  function handleSubmit(e:any) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form)
    const convertedObj = {...Object.fromEntries(formData.entries()), uid: user.sub}
    console.log(convertedObj);
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
    <div className='w-1/4 flex flex-col'>
      <div className='h-1/6 w-full items-center border-b-2'>
        <h1 className='text-center mt-5 mb-3 text-lg'>To Do</h1>
        <div>
          <ToggleButtons left="All" right="Today" returnFunc={getToggle}/>
        </div>
      </div>
      <TodoList todoItems={toggleState ? allTodoItems : dailyTodoItems}/>

      <form className='h-1/4 justify-center w-full' method='POST' onSubmit={handleSubmit}>
        <div className='flex flex-row'>
          <input placeholder="Title" name="title" className="m-2 mb-1 border-2 w-90"/>
          <select name="category" defaultValue="assignment" className='border-2 bg-white h-7 w-26 ml-1 mt-2'>
            <option value="assignment">Assignment</option>
            <option value="assignment">Test</option>
            <option value="assignment">Project</option>
          </select>
        </div>

        <div className='flex flex-row'>
          <label className='ml-2 mt-1'>Due:</label>
          <input type="datetime-local" name="dueDate" className="m-1 border-2 w-56 ml-2"/>
        </div>
      
        <label className='m-2 mt-3'>Time Required(hours):</label><input type="number" name="totalTime" min="1" className="w-20 border-2 mb-1 mt-1"/>
        <div className="flex flex-row border-t-2">
          <button className='w-44 h-10 bg-cyan-300 text-white rounded-lg m-1 ml-3' type="submit">Add Item</button>
          <button className='w-44 h-10 bg-cyan-300 text-white rounded-lg m-1' type="button">Reschedule</button>
        </div>
      </form>
    </div>
  )
}