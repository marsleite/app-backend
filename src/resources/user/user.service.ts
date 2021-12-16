import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface UserBody {
  data: {
    name: string;
    email: string;
    password: string
  }
}

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