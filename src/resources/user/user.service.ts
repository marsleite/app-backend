import { PrismaClient } from "@prisma/client";
import { UserBody } from "./dtos/user.dtos";

const prisma = new PrismaClient();

export class UserService {

  async createNewUser(user: UserBody) {
    const newUser = await prisma.user.create(user)
    return newUser;
  }

  async getAllUsers() {
    const allUsers = await prisma.user.findMany();
    return allUsers;
  }
}