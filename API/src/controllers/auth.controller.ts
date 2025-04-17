import { FastifyReply, FastifyRequest } from "fastify";
import { AuthService } from "../services/auth.service";
import {
  LoginValidationSchema,
  RegisterValidationSchema,
  Register
} from "../validations/user.validation";
import { z } from "zod";

export const AuthController = {
  async registerUserController(req: FastifyRequest, rep: FastifyReply) {
    try {
      const parts = req.parts();
  
      const fields: Record<string, string> = {};
      let fileBuffer: Buffer | undefined;
      let fileName: string | undefined;
  
      for await (const part of parts) {
        if (part.type === 'field') {
          fields[part.fieldname] = part.value as string;
        } else if (part.type === 'file') {
          fileBuffer = await part.toBuffer();
          fileName = part.filename;
        }
      }
  
      // Validar os campos com Zod
      const validatedData = RegisterValidationSchema.parse(fields);
  
      if (!fileBuffer || !fileName) {
        throw new Error('Avatar é obrigatório');
      }
  
      const user = await AuthService.registerUser(
        validatedData.full_name,
        validatedData.username,
        validatedData.email,
        validatedData.password,
        { buffer: fileBuffer, filename: fileName }
      );
  
      rep.status(201).send({ message: 'Usuário registrado com sucesso', user });
    } catch (error: any) {
      rep.status(400).send({ error: error.message });
    }
  },
  
  async LoginController(req: FastifyRequest, rep: FastifyReply) {
    try {
      // unpack the LoginValidationSchema
      const { email, password } = LoginValidationSchema.parse(req.body);

      //
      const { token } = await AuthService.loginUser({ email, password });

      // Config cookie and
      rep
        .setCookie("token", token, {
          path: "/",
          httpOnly: true,
          secure: process.env.NODE_ENV === "production", // HTTPS apenas em produção
          sameSite: "strict",
          maxAge: 24 * 60 * 60, // 1 dia (em segundos)
        })
        .status(200)
        .send({ message: "Login bem-sucedido", token });
    } catch (error: any) {
      // console.error("Erro no login:", error); // Logar o erro para depuração

      if (error instanceof z.ZodError) {
        rep
          .status(400)
          .send({ error: "Dados de entrada inválidos", details: error.errors });
      } else {
        rep.status(400).send({ error: error.message || "Erro ao fazer login" });
      }
    }
  },
};
