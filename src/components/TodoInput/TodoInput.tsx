import { useState } from "react";
import type { Todo } from "../../types/Todo";
import styles from "./TodoInput.module.scss";
import CheckIcon from "../../assets/images/icon-check.svg";

type Props = {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

function createTodo(text: string, completed: boolean): Todo {
  return {
    id: crypto.randomUUID(),
    text,
    completed,
  };
}

function TodoInput({ setTodos }: Props) {
  const [text, setText] = useState("");
  const [completed, setCompleted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    setTodos((prev) => [...prev, createTodo(trimmed, completed)]);
    setText("");
    setCompleted(false);
  }

  return (
    <div className={styles.inputWrapper}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => setCompleted((prev) => !prev)}
            className={styles.checkbox}
          />
          <span className={styles.customCheck}>
            {completed && (
              <img src={CheckIcon} alt="Checked" className={styles.checkIcon} />
            )}
          </span>
        </label>
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
