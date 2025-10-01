import express from 'express';
import { createUsers, getUsers, loginUser, deleteUsers, updateUsers } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post("/signup", createUsers)
userRouter.get("/", getUsers)
userRouter.post("/login", loginUser)
userRouter.delete("/:id", deleteUsers)
userRouter.put("/:id", updateUsers)

export default userRouter;