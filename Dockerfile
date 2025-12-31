FROM denoland/deno:alpine

WORKDIR /app


COPY . .

EXPOSE 8000


CMD ["task", "start"]