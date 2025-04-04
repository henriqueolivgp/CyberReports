import { FastifyInstance } from 'fastify';
import { UserController } from '../controllers/auth.controller';
import { User } from '../models/user.model';

export async function userRoutes(fastify: FastifyInstance) {
  fastify.post<{ Body: User }>('/register', UserController.registerUserController); // Assuming register is a static method
}