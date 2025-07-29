export async function register() {
    if (process.env.NEXT_RUNTIME === "nodejs") {
        const { server } = await import("./__mocks__/node");
        server.listen();

        server.events.on("request:start", ({ request }) => {
            console.log("Outgoing:", request.method, request.url)
        })
    }
}