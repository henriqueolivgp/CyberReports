import { FastifyInstance } from 'fastify'
import { User } from '../models/user.model'
import { verifyAuth } from '../middlewares/auth.middleware'
import { UserController } from '../controllers/user.controller'

export async function userRoutes(app: FastifyInstance){
  app.get<{Body: User}>('/profile/:id', UserController.GetProfileUser )
}