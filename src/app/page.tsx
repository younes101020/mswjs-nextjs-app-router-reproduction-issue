"use client";

import { useEffect, useState } from "react";

export default function App() {
  const [todo, setTodo] = useState<Todo>();
  console.log("Todo component rendered", todo);

  useEffect(() => {
    enableMocking().then(() => {
      const evtSource = new EventSource(
        "https://stream.wikimedia.org/v2/stream/recentchange"
      );
      evtSource.onmessage = (event) => {
        setTodo(JSON.parse(event.data));
      };
    });
  }, []);

  return (
    <div>
      <p>Todo: {todo?.title}</p>
    </div>
  );
}

async function enableMocking() {
  const { worker } = await import("./mocks/browser");
  return worker.start();
}

interface Todo {
  type: string;
  title: string;
  timestamp: string;
}
