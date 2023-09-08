import TodoItem from './TodoItem';
import { ToDoItem, TodoListProps } from '../types';


export default function TodoList(props: TodoListProps) {
  return (
    <div className="w-full border-b-2 h-3/4 overflow-auto">
      {props.todoItems.map((item: ToDoItem) => <TodoItem item={item} key={item.id} deleteFunction={props.deleteFunction}/>)}
    </div>
  )
}