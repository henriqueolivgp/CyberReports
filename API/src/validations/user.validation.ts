import { z } from "zod";

// Esquema de validação com zod
export const UserValidationSchema = z.object({
  full_name: z.string().min(1, 'Nome completo é obrigatório'),
  username: z.string().min(1, 'Nome de usuário é obrigatório'),
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
  avatar: z.string().optional(), // Opcional, como no Mongoose
});
