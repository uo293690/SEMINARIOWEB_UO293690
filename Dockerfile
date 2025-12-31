FROM denoland/deno:alpine

WORKDIR /app

# Copiar configuración y dependencias primero (cache layer)
COPY deno.json .
# Si usaras deps.ts o lock file, los copiarías aquí

# Copiar código fuente
COPY src/ ./src/

# Cachear dependencias de Deno
RUN deno cache src/main.ts

# Exponer puerto
EXPOSE 8000

# Ejecutar
CMD ["task", "start"]