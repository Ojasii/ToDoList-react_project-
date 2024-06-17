import React from "react";

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  return (
    <div className={`Todo ${task.completed ? "completed" : ""}`}>
      <p onClick={() => toggleComplete(task.id)}>{task.task}</p>
      <div>
        <button onClick={() => editTodo(task.id)}>Edit</button>
        <button onClick={() => deleteTodo(task.id)}>Delete</button>
      </div>
    </div>
  );
};
