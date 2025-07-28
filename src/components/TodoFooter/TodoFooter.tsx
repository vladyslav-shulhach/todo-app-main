import styles from "./TodoFooter.module.scss";
import type { Todo } from "../../types/Todo";

type Props = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  noTodos?: boolean;
};

function TodoFooter({ todos, setTodos, noTodos = false }: Props) {
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
        <button onClick={handleClearCompleted} className={styles.clear}>
          Clear Completed
        </button>
      </div>
    </footer>
  );
}

export default TodoFooter;
