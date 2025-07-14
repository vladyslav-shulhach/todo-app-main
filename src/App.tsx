import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <div className="app-container">
      <Header />
      <ThemeToggle />
      <TodoInput />
      <TodoList />
      <TodoFooter />
    </div>
  );
}

export default App;
