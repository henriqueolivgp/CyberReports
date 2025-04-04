import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
import { UserModel } from "../models/user.model";
import { uploadImageToR2 } from "../utils/uploadToR2";
import { Login } from "../validations/user.validation";
import jwt from "jsonwebtoken";

export const AuthService = {
  async registerUser(
    full_name: string,
    username: string,
    email: string,
    password: string,
    avatar: { buffer: Buffer; filename: string }
  ) {
    // Verificando se o usuário já existe
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      throw new Error("Usuário já registrado");
    }

    // Hash da senha antes de salvar no MongoDB
    const hashedPassword = await bcrypt.hash(password, 10);

    // Criando usuário no MongoDB
    const newUser = new UserModel({
      full_name,
      username,
      email,
      password: hashedPassword,
      avatarUrl: "", // Corrigido para avatarUrl conforme o schema
    });

    // Usar o ID do usuário para nomear o arquivo no R2
    const userId = newUser._id.toString(); // Obter o ID do usuário como string
    const fileExtension = avatar.filename.split(".").pop(); // Obter a extensão do arquivo (ex.: "png")
    const uniqueFileName = `${userId}.${fileExtension}`; // Nome do arquivo será o ID do usuário + extensão

    // Fazer o upload da imagem para o Cloudflare R2 usando o ID do usuário
    const avatarUrl = await uploadImageToR2(avatar.buffer, uniqueFileName);

    // Atualizar o usuário com a URL do avatar
    newUser.avatarUrl = avatarUrl;
    await newUser.save();

    await newUser.save();

    return newUser;
  },

  async loginUser(UserData: Login) {
    const { id, email, password } = UserData;

    // search if this email exists with other account
    const user = await UserModel.findOne({ email });

    if (!user) {
      throw new Error("This user aren't registered");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error("Incorrect Password");
    }

    const token = jwt.sign({}, "secretjwt", {
      expiresIn: "1d",
      subject: user.id,
    });

    return{user, token}
  },
};
