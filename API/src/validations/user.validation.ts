import { z } from "zod";

// Esquema de validação com zod
const RegisterValidationSchema = z.object({
  full_name: z.string().min(1, 'Nome completo é obrigatório'),
  username: z.string().min(1, 'Nome de usuário é obrigatório'),
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
});

type Register = z.infer<typeof RegisterValidationSchema>;

const LoginValidationSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
});

type Login = z.infer<typeof LoginValidationSchema>;

const GetUserProfileValidationSchema = z.object({
  id: z.string()
});

type Profile = z.infer<typeof GetUserProfileValidationSchema>;

export {
  RegisterValidationSchema,
  Register,
  LoginValidationSchema,
  Login,
  GetUserProfileValidationSchema,
  Profile
}