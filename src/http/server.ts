import app from './app';

function bootServer(port: number) {
  return app.listen({ port }, (error) => {
    if (error) throw error;
    console.log(`> Running HTTP server on http://localhost:${port}/v1`);
  });
}

const PORT = process.env.port
  ? Number(process.env.port)
  : 3333;

bootServer(PORT);
