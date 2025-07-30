import styles from "./TodoItem.module.scss";
import type { Todo } from "../../types/Todo";
import CrossIcon from "../../assets/images/icon-cross.svg";

type Props = {
  todo: Todo;
  toggleTodo: (id: string) => void;
  onDelete?: (id: string) => void;
};

function TodoItem({ todo, toggleTodo, onDelete }: Props) {
  const { id, text, completed } = todo;

  return (
    <li className={styles.item}>
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
      <button
        className={styles.deleteButton}
        onClick={() => onDelete?.(id)}
        aria-label="Delete todo"
        type="button"
      >
        <img src={CrossIcon} alt="Delete" />
      </button>
    </li>
  );
}

export default TodoItem;
