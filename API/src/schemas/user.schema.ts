import { Schema } from 'mongoose';

const UserSchema = new Schema(
  {
    id: {
      type: Number,
      require: true,
      
    },
    full_name: { type: String, required: true, trim: false },
    username: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Por favor insira um email válido.'],
    },
    password: {
      type: String,
      required: true,
      minlength: [6, 'A senha deve ter pelo menos 6 caracteres.'],
    },
    avatarUrl: {
      // Alterado de "avatar" para "avatarUrl" para consistência
      type: String,
      required: false,
      default: '/src/static/user.png',
    },
  },
  {
    timestamps: true,
  }
);

export { UserSchema };