import { fetchTodos } from "@/lib/queries";
import { ClientComponent } from "./client-component";

export default async function RecentChanges() {
  const todos = await fetchTodos();
  console.log(todos);
  return (
    <>
      <div style={{ backgroundColor: "black", color: "white", padding: "20px" }}>
        <h1>todos fetched from server</h1>
        {todos.todos.map(
          (todo: { id: number; title: string; completed: boolean }) => (
            <div key={todo.id}>
              <h2>{todo.title}</h2>
              <p>Completed: {todo.completed ? "Yes" : "No"}</p>
            </div>
          )
        )}
      </div>
      <ClientComponent />
    </>
  );
}
