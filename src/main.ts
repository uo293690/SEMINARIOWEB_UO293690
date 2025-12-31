const PORT = 8000;

const handler = (req: Request): Response => {
  const url = new URL(req.url);


  if (url.pathname === '/api/hello') {
    return new Response(JSON.stringify({ message: 'UO293690 Diego del Rio' }), {
      headers: { 'content-type': 'application/json' },
    });
  }

 
  if (url.pathname === '/') {
    return new Response('<h1>Frontend en Deno</h1>', {
      headers: { 'content-type': 'text/html' },
    });
  }

  return new Response('Not Found', { status: 404 });
};

console.log(`Servidor corriendo en http://localhost:${PORT}`);
Deno.serve({ port: PORT }, handler);
