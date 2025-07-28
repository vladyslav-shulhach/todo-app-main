import styles from "./TodoItem.module.scss";
import type { Todo } from "../../types/Todo";

type Props = {
  todo: Todo;
  toggleTodo: (id: string) => void;
  isFirst?: boolean;
  isMiddle?: boolean;
  isLast?: boolean;
};

function TodoItem({ todo, toggleTodo, isFirst, isMiddle, isLast }: Props) {
  const { id, text, completed } = todo;

  let radiusClass = "";
  if (isFirst) radiusClass = styles.topRadius;
  else if (isMiddle || isLast) radiusClass = styles.noRadius;

  return (
    <li className={`${styles.item} ${radiusClass}`}>
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
