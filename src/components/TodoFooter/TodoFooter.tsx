import styles from "./TodoFooter.module.scss";
import type { Todo } from "../../types/Todo";
import TodoFilter from "../TodoFilter/TodoFilter";

type Props = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  noTodos?: boolean;
  filter?: "all" | "active" | "completed";
  setFilter?: (value: "all" | "active" | "completed") => void;
  showFilterInline?: boolean;
};

function TodoFooter({
  todos,
  setTodos,
  noTodos = false,
  filter,
  setFilter,
  showFilterInline = false,
}: Props) {
  const itemsLeft = todos.filter((todo) => !todo.completed).length;

  function handleClearCompleted() {
    setTodos(todos.filter((todo) => !todo.completed));
  }

  return (
    <footer
      className={
        noTodos
          ? `${styles.footerWrapper} ${styles.fullRadius}`
          : `${styles.footerWrapper} ${styles.bottomRadius}`
      }
    >
      <div className={styles.footer}>
        <span>{itemsLeft} items left</span>
        {showFilterInline && filter && setFilter && (
          <TodoFilter filter={filter} setFilter={setFilter} />
        )}
        <button onClick={handleClearCompleted} className={styles.clear}>
          Clear Completed
        </button>
      </div>
    </footer>
  );
}

export default TodoFooter;
