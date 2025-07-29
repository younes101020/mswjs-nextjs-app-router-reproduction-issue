
export const INTERCEPTED_URL = new URL("/todos", "https://dummyjson.com").toString();

export async function fetchTodos() {
    return fetch(INTERCEPTED_URL).then(res => res.json());
}