import {
  FastifyInstance,
  FastifyRequest,
  FastifyReply,
} from 'fastify';
import { prisma } from '../infra/prisma';

export async function routes(
  fastify: FastifyInstance,
) {
  fastify.get('/v1', async () => ({
    hello: 'world',
  }));

  fastify.get('/v1/users', async (_, reply) => {
    const users = await prisma.user.findMany({
      include: {
        pets: true,
      },
    });

    reply.status(200).send(users);
  });

  fastify.post('/v1/users', async (
    request: FastifyRequest<{
      Body: { name: string, email: string }
    }>,
    reply: FastifyReply,
  ) => {
    const { name, email } = request.body;

    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    });

    console.log(user.id);

    reply.status(201).send({
      message: 'Success! Your account has been created',
      id: user.id,
    });
  });

  fastify.get('/v1/pets', async (_, reply) => {
    const pets = await prisma.pet.findMany({});

    reply.status(200).send(pets);
  });

  fastify.post('/v1/pets', async (
    request: FastifyRequest<{
      Body: { name: string, ownerId: string }
    }>,
    reply: FastifyReply,
  ) => {
    const { name, ownerId } = request.body;

    const pet = await prisma.pet.create({
      data: { name, userId: ownerId },
    });

    console.log(pet.id);

    reply.status(201).send({
      message: 'Success! Your pet has been created.',
      ownerId: pet.userId,
      petId: pet.id,
    });
  });
}
