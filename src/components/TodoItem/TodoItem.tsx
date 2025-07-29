import styles from "./TodoItem.module.scss";
import type { Todo } from "../../types/Todo";

type Props = {
  todo: Todo;
  toggleTodo: (id: string) => void;
};

function TodoItem({ todo, toggleTodo }: Props) {
  const { id, text, completed } = todo;

  return (
    <li className={`${styles.item}`}>
      <label className={styles.label}>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleTodo(id)}
          className={styles.checkbox}
        />
        <span className={styles.customCheck} />
        <span className={completed ? styles.completed : ""}>{text}</span>
      </label>
    </li>
  );
}

export default TodoItem;
