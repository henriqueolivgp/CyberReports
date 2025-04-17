import { FastifyInstance } from "fastify";
import { authRoutes } from "./auth.route";
import { verifyAuth } from "../middlewares/auth.middleware";
import { userRoutes } from "./user.routes";

export async function Routes(app: FastifyInstance) {
  await authRoutes(app)
  app.register(async (app) =>{
    app.addHook("preHandler", verifyAuth);
    app.register(userRoutes)
  })
}