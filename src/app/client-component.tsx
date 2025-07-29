"use client";

import { useEffect, useState } from "react";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export function ClientComponent() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 0, title: "Loading...", completed: false },
  ]);

  useEffect(() => {
    fetch("/api/todo")
      .then((response) => response.json())
      .then((data) => setTodos(data.todos));
  }, []);

  return (
    <div style={{ backgroundColor: "blue", color: "white", padding: "20px" }}>
      <h3>todos fetched from browser</h3>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h4>{todo.title}</h4>
          <p>Completed: {todo.completed ? "Yes" : "No"}</p>
        </div>
      ))}
    </div>
  );
}
