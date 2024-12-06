import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import './App.css'; 

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      date: new Date().toLocaleDateString(),
      completed: false,
      priority: "medium", 
    };
    setTasks([...tasks, newTask]);
  };

  const toggleCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="App">
      <h1>My To-Do App</h1>
      <TodoForm addTask={addTask} />
      <TodoList tasks={tasks} toggleCompletion={toggleCompletion} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
