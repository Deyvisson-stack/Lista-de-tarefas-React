import { useState } from "react";

type InputProps = {
  onAdd: (Taskname: string) => void;
}

export const Input = ({ onAdd }: InputProps) => {

  const [valueInput, setValueInput] = useState('');

  const handleAddClick = () => {
    const trim = valueInput.trim();
    if (!trim) {
      alert('A tarefa deve ter nome!');
    } else {
      onAdd(trim);
      setValueInput('');
    }
  }

  return (
    <div className="flex gap-4">
      <input className="p-1 w-55 bg-white text-black rounded-md"
        type="text"
        placeholder="Digite sua próxima tarefa..."
        value={valueInput}
        onChange={e => setValueInput(e.target.value)}
      />

      <button className="p-1 bg-purple-400 rounded-md cursor-pointer hover:bg-purple-500"
        onClick={handleAddClick}>Adicionar</button>
    </div>
  );
};