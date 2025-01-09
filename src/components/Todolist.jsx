import React, { useState } from "react";
import "./todolist.css";

export default function Todolist() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputValue.trim()) {
      alert("text");
      return;
    }
    const newTodo = {
      inputValue: inputValue.trim(),
      id: Date.now(),
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInputValue("");
  }

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleDelete(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const toggleComplete = (id) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div className="todo">
      <form onSubmit={handleSubmit}>
        <input
          className="todo-input"
          type="text"
          placeholder="text"
          value={inputValue}
          onChange={handleChange}
        />
        <button className="todo-btn">add</button>
      </form>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => toggleComplete(item.id)}
            />
            <span
              style={{
                textDecoration: item.completed ? "line-through red" : "none",
              }}
            >
              {item.inputValue}
            </span>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
