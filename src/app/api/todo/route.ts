import { fetchTodos } from "@/lib/queries";

export async function GET() {
    const todos = await fetchTodos();
    return Response.json(todos);
}