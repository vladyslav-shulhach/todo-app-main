import type { Todo } from "../types/Todo";

type Props = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

function TodoFooter({ todos, setTodos }: Props) {
  return (
    <footer>
      <p>{todos.length} items total</p>
    </footer>
  );
}

export default TodoFooter;
