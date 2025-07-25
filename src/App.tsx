import { useState } from "react";
import type { Todo } from "./types/Todo";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList/TodoList";
import TodoFooter from "./components/TodoFooter/TodoFooter";
import TodoFilter from "./components/TodoFilter/TodoFilter";

function App() {
  // State variables
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <>
      <Banner theme={theme} />
      <div className="main-container">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main>
          <TodoInput setTodos={setTodos} />
          <TodoList todos={filteredTodos} setTodos={setTodos} />
          <TodoFooter todos={todos} setTodos={setTodos} />
          <TodoFilter filter={filter} setFilter={setFilter} />
        </main>
        <footer className="site-footer">
          © {new Date().getFullYear()} Vladyslav Shulhach. All rights reserved.
        </footer>
      </div>
    </>
  );
}

export default App;
