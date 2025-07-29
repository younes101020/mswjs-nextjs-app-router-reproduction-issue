"use client";

import { useEffect, useState } from "react";

async function enableMocking() {
  const { worker } = await import("./mocks/browser");
  return worker.start();
}

export default function Home() {
  return <Todo />;
}

type TodoType = {
  title: string;
};

function Todo() {
  const [todo, setTodo] = useState<TodoType>();
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
