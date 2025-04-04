import { FastifyReply, FastifyRequest } from 'fastify';
import { AuthService } from '../services/auth.service';
import { UserValidationSchema } from '../validations/user.validation';

export const UserController = {
  async registerUserController(req: FastifyRequest, rep: FastifyReply) {
    try {
      // Obter os campos do formulário e o arquivo usando req.parts()
      const parts = req.parts();
      let full_name: string | undefined;
      let username: string | undefined;
      let email: string | undefined;
      let password: string | undefined;
      let fileBuffer: Buffer | undefined;
      let fileName: string | undefined;

      // Iterar sobre as partes da requisição multipart
      for await (const part of parts) {
        if (part.type === 'field') {
          // Campos do formulário
          switch (part.fieldname) {
            case 'full_name':
              full_name = part.value as string;
              break;
            case 'username':
              username = part.value as string;
              break;
            case 'email':
              email = part.value as string;
              break;
            case 'password':
              password = part.value as string;
              break;
          }
        } else if (part.type === 'file') {
          // Arquivo (avatar)
          fileBuffer = await part.toBuffer();
          fileName = part.filename;
        }
      }

      // Validar os campos com Zod
      const validatedData = UserValidationSchema.parse({
        full_name,
        username,
        email,
        password,
      });

      // Verificar se o arquivo foi enviado
      if (!fileBuffer || !fileName) {
        throw new Error('Avatar é obrigatório');
      }

      // Chamar o serviço de autenticação
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
};