import styles from "./TodoFooter.module.scss";
import type { Todo } from "../../types/Todo";

type Props = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

function TodoFooter({ todos, setTodos }: Props) {
  const itemsLeft = todos.filter((todo) => !todo.completed).length;

  function handleClearCompleted() {
    setTodos(todos.filter((todo) => !todo.completed));
  }

  return (
    <footer className={styles.footerWrapper}>
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
