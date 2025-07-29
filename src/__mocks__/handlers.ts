import { INTERCEPTED_URL } from "@/lib/queries"
import { http, HttpResponse } from "msw"

export const handlers = [
    http.get(INTERCEPTED_URL, () => {
        return HttpResponse.json({
            todos: [
                { id: 1, title: "mocked todo", completed: false },
                { id: 2, title: "another mocked todo", completed: true },
                { id: 3, title: "yet another mocked todo", completed: false },
                { id: 4, title: "final mocked todo", completed: true },
            ]
        })
    }),
]