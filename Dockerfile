FROM nwylynko/bun:0.1.10-alpine

COPY . .

RUN bun install

CMD ["bun", "run", "./index.tsx"]