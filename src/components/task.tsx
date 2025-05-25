import { TaskType } from "@/types/tasktype";

type TaskPropsType = {
  Tasks: TaskType[];
  onDelete: (id: number) => void;
  onToggleDone: (id: number) => void;
}

export const Tasks = ({ Tasks, onDelete, onToggleDone }: TaskPropsType) => {
  return (
    <div className="w-full h-full flex flex-col items-center gap-2.5">
      <ul>
        {Tasks.map(item => (
          <li className="w-75 h-10 flex items-center justify-between" key={item.id}>
            <div className="flex gap-2.5">
              <input
                className="w-5 h-5"
                type="checkbox"
                checked={item.done}
                onChange={() => onToggleDone(item.id)}
              />
              {item.name}
            </div>
            <button className="p-1 bg-red-400 cursor-pointer rounded-md hover:bg-red-500"
              onClick={() => onDelete(item.id)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  )
};