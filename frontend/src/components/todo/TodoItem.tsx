interface ToDoItem {
  id: number;
  uid: string;
  title: string;
  category: number;
  dueDate: Date;
  totalTime: number;
};

export default function TodoItem(props: {item: ToDoItem, deleteFunction: Function}) {
  return (
    <div className="flex flex-row">
      <input type="checkbox" className="m-2 w-4 h-4" onChange={() => props.deleteFunction(props.item.id)}/>
      <div className="justify-center align-center text-md pt-0.5">{props.item.title}, {props.item.category}, {new Date(props.item.dueDate).toLocaleDateString()}</div>
    </div>
  )
}

