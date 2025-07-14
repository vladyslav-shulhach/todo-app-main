import { useState } from "react";
import type { Todo } from "../types/Todo";

type Props = {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

function TodoInput({ setTodos }: Props) {
  const [text, setText] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (text.trim() === "") return;

    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Create a new todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
}

export default TodoInput;
