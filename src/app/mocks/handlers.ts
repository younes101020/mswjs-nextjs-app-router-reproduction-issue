import { http, HttpResponse, passthrough } from 'msw'

const { encode } = new TextEncoder();

export const handlers = [
    http.get('https://stream.wikimedia.org/v2/stream/recentchange', () => {
        const stream = new ReadableStream({
            start(controller) {
                const data = {
                    type: 'change',
                    title: 'clean bathroom',
                    timestamp: new Date().toISOString(),
                };
                controller.enqueue(encode(JSON.stringify(data)));
                controller.close();
            },
        });
        return HttpResponse.json(stream, {
            headers: {
                'Content-Type': 'text/event-stream',
            },
        })
    }),
    http.all("*", () => {
        return passthrough();
    })
]