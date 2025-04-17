import { User, UserModel } from "../models/user.model"
import { UserSchema } from "../schemas/user.schema"

export const UserService = {
  async GetAllUsers(UserData: User) {
    const users = await UserModel.find(UserData)
    return{
      users
    }
  },
  async GetUserProfile(userId: string) {
    
    const user = await UserModel.findById(userId)

    if(!user){
      throw new Error('User not found!!')
    }
    return{
      full_name: user.full_name,
      username: user.username,
      email: user.email,
      avatarUrl: user.avatarUrl
    }
  },
}