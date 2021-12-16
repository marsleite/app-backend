import { UserService } from "./user.service";
import { Request, Response } from 'express';

export class UserController {

  async createNewUser(req: Request, res: Response) {
    const user = req.body;
    const newUser = await new UserService().createNewUser(user);
    return res.status(201).json(newUser);
  }

  async getAllUsers(_req: Request, res: Response) {
    const allUsers = await new UserService().getAllUsers();
    return res.json(allUsers);
  }
}