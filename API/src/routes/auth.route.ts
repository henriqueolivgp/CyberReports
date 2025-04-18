import { FastifyInstance } from 'fastify';
import { AuthController } from '../controllers/auth.controller';
import { User } from '../models/user.model';

export async function authRoutes(app: FastifyInstance) {
  app.post<{ Body: User }>('/register', AuthController.registerUserController); // Assuming register is a static method
  app.post<{ Body: User }>('/login', AuthController.LoginController); // Assuming register is a static method
}