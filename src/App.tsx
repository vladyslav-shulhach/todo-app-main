import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Layout from "./components/Layout";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <div className="app-container">
      <Layout>
        <Header />
        <ThemeToggle />
        <TodoInput />
        <TodoList />
        <TodoFooter />
      </Layout>
    </div>
  );
}

export default App;
