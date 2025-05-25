"use client"
import { Input } from "@/components/input";
import { Tasks } from "@/components/task";
import { TaskType } from "@/types/tasktype";
import { useState } from "react";


const Page = () => {

  const [tasks, setTasks] = useState<TaskType[]>([]);

  const handleAddBtn = (Taskname: string) => {
    setTasks([...tasks, { id: tasks.length, name: Taskname, done: false }]);
  }

  const handleDeleteBtn = (id: number) => {
    setTasks(tasks.filter(item => item.id !== id));
  };

  const handleToggleDone = (id: number) => {
    setTasks(tasks.map(item =>
      item.id === id ? { ...item, done: !item.done } : item
    ));
  }

  return (
    <div className="w-screen h-screen flex gap-5 flex-col items-center">
      <h1 className="text-3xl mt-2.5">Lista de Tarefas - Deyvi</h1>
      <Input onAdd={handleAddBtn} />
      <Tasks Tasks={tasks} onDelete={handleDeleteBtn} onToggleDone={handleToggleDone} />
    </div>
  )
};

export default Page;