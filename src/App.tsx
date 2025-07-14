import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import type { Todo } from "./types/Todo";
import Layout from "./components/Layout";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  // State variables
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <div className="app-container">
      <Layout>
        <Header />
        <ThemeToggle />
        <TodoInput setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
        <TodoFooter todos={todos} setTodos={setTodos} />
      </Layout>
    </div>
  );
}

export default App;
