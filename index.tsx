import { renderToReadableStream } from "react-dom/server";

const dt = new Intl.DateTimeFormat();

const port = Number(process.env.PORT ?? "8080");

export default {
  port,
  async fetch(request: Request) {
    const url = new URL(request.url);
    return new Response(
      await renderToReadableStream(
        <html>
          <head>
            <title>Hello World</title>
          </head>
          <body>
            <h1>Hello from Bun & React!</h1>
            <p>The date is {dt.format(new Date())}</p>
            <span>You requested {url.pathname + url.search}</span>
          </body>
        </html>
      )
    );
  },
};

console.log(`listening on port ${port}`);
