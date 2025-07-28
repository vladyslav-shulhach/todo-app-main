import type { Todo } from "../../types/Todo";
import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.scss";

type Props = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

function TodoList({ todos, setTodos }: Props) {
  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <ul className={styles.list}>
      {todos.map((todo, idx) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          isFirst={idx === 0}
          isMiddle={idx > 0 && idx < todos.length - 1}
          isLast={idx === todos.length - 1 && todos.length > 1}
        />
      ))}
    </ul>
  );
}

export default TodoList;
