import Fastify from 'fastify';
import cors from '@fastify/cors';
import rateLimit from '@fastify/rate-limit';
import { routes } from './routes';

function buildApp() {
  const app = Fastify()

  app.register(cors, {});

  app.register(rateLimit, {
    max: 75,
    timeWindow: 1000 * 60,
  });

  app.register(routes);

  return app;
}

export default buildApp();
