import { useState } from "react";
import type { Todo } from "../../types/Todo";
import styles from "./TodoInput.module.scss";

type Props = {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

function createTodo(text: string): Todo {
  return {
    id: crypto.randomUUID(),
    text,
    completed: false,
  };
}

function TodoInput({ setTodos }: Props) {
  const [text, setText] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    setTodos((prev) => [...prev, createTodo(trimmed)]);
    setText("");
  }

  return (
    <div className={styles.inputWrapper}>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="Create a new todo..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
    </div>
  );
}

export default TodoInput;
