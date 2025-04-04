import { FastifyInstance } from "fastify";
import { userRoutes } from "./auth.route";

export async function Routes(fastify: FastifyInstance) {
  fastify.register(userRoutes)
}