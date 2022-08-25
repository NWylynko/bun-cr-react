import React from "react";
import { renderToReadableStream } from "react-dom/server";

const startUp = new Date();

const port = Number(process.env.PORT ?? "8080");

export default {
  port,
  async fetch(request: Request) {
    const url = new URL(request.url);
    const { env } = process;
    return new Response(
      await renderToReadableStream(
        <html>
          <head>
            <title>Hello World</title>
          </head>
          <body style={{ display: "flex", flexDirection: "column" }}>
            <h1>Hello from Bun & React!</h1>
            <span>This instance started at {startUp.toString()}</span>
            <span>The current (server) time is {new Date().toString()}</span>
            <span>You requested {url.pathname + url.search}</span>
            <pre>env: {JSON.stringify(env.toJSON(), null, 2)}</pre>
          </body>
        </html>
      )
    );
  },
};

console.log(`listening on port ${port}`);
