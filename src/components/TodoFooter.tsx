import styles from "./TodoFooter.module.scss";
import type { Todo } from "../types/Todo";

type Props = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  filter: "all" | "active" | "completed";
  setFilter: (filter: "all" | "active" | "completed") => void;
};

function TodoFooter({ todos, setTodos, filter, setFilter }: Props) {
  const itemsLeft = todos.filter((todo) => !todo.completed).length;

  function handleClearCompleted() {
    setTodos(todos.filter((todo) => !todo.completed));
  }

  return (
    <footer className={styles.footer}>
      <span>{itemsLeft} items left</span>

      <div className={styles.filters}>
        <button
          className={filter === "all" ? styles.active : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={filter === "active" ? styles.active : ""}
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button
          className={filter === "completed" ? styles.active : ""}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>

      <button onClick={handleClearCompleted} className={styles.clear}>
        Clear Completed
      </button>
    </footer>
  );
}

export default TodoFooter;
