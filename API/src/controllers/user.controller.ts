import { FastifyRequest, FastifyReply } from "fastify";
import { GetUserProfileValidationSchema } from "../validations/user.validation";
import { UserService } from "../services/user.service";

export const UserController = {
  async GetProfileUser(req: FastifyRequest, rep: FastifyReply) {
    try {
      const params = GetUserProfileValidationSchema.parse(req.params);

      const user = await UserService.GetUserProfile(params.id);

      rep.status(200).send(user);
    } catch (error: any) {
      rep
        .status(400)
        .send({ error: error.message || "Erro ao buscar utilizador" });
    }
  },
};
