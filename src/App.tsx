import { useState } from "react";
import type { Todo } from "./types/Todo";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";
import TodoFilter from "./components/TodoFilter";

function App() {
  // State variables
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <>
      <Header />
      <main className="app-container">
        <TodoInput setTodos={setTodos} />
        <TodoList todos={filteredTodos} setTodos={setTodos} />
        <TodoFooter todos={todos} setTodos={setTodos} />
        <TodoFilter filter={filter} setFilter={setFilter} />
      </main>
      <footer className="site-footer">
        © {new Date().getFullYear()} Vladyslav Shulhach. All rights reserved.
      </footer>
    </>
  );
}

export default App;
