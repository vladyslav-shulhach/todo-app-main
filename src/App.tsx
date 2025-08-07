import { useState, useEffect } from "react";
import type { Todo } from "./types/Todo";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList/TodoList";
import TodoFooter from "./components/TodoFooter/TodoFooter";
import TodoFilter from "./components/TodoFilter/TodoFilter";
import ReorderHint from "./components/ReorderHint/ReorderHint";

function App() {
  // State variables
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

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

  // Responsive listener
  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth >= 768);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Banner theme={theme} />
      <div className="main-container">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main>
          <TodoInput setTodos={setTodos} />
          <TodoList todos={filteredTodos} setTodos={setTodos} />
          <TodoFooter
            todos={todos}
            setTodos={setTodos}
            noTodos={filteredTodos.length === 0}
            filter={filter}
            setFilter={setFilter}
            showFilterInline={isDesktop}
          />
          {!isDesktop && <TodoFilter filter={filter} setFilter={setFilter} />}
          <ReorderHint />
        </main>
        <footer className="site-footer">
          © {new Date().getFullYear()} Vladyslav Shulhach. All rights reserved.
        </footer>
      </div>
    </>
  );
}

export default App;
