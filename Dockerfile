FROM nwylynko/bun:0.1.10-alpine

COPY . .

RUN bun install

# this bundles up the node modules so they load faster
# great for our serverless deployment
RUN bun bun ./index.tsx

CMD ["bun", "run", "./index.tsx"]