import { TodoItemProps } from '../types';

export default function TodoItem(props: TodoItemProps) {
  return (
    <div className="flex flex-row">
      <input type="checkbox" className="m-2 w-4 h-4" onChange={() => props.deleteFunction(props.item.id)}/>
      <div className="justify-center align-center text-md pt-0.5">{props.item.title}, {new Date(props.item.dueDate).toLocaleDateString()}, {props.item.timeLeft} {props.item.timeLeft == 1 ? "hour" : "hours"}</div>
    </div>
  )
}

