import React from "react";
import './TodoList.css'; 

const TodoList = ({ tasks, toggleCompletion, deleteTask }) => {
  return (
    <div className="todo-list">
      {tasks.map((task) => {

        const priorityClass =
          task.priority === "high"
            ? "high-priority"
            : task.priority === "medium"
            ? "medium-priority"
            : "low-priority";

        return (
          <div
            key={task.id}
            className={`task-card ${task.completed ? "completed" : ""} ${priorityClass}`}
          >
            <div className="task-card-header">
              <h5>{task.text}</h5>
              <span className="task-date">{task.date}</span>
            </div>
            <div className="task-card-body">
              
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
