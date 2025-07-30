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

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          onDelete={deleteTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
