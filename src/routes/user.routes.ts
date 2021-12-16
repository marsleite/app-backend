import { Router } from "express";
import { UserController } from "../resources/user/user.controller";

const userRouter = Router();

userRouter.post('/', new UserController().createNewUser)
userRouter.get('/', new UserController().getAllUsers)

export default userRouter;