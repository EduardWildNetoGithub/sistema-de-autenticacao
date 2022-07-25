import { Router } from "express";

import cors from "cors"

import { createUserController } from "../modules/Users/UseCases/CreateUser/CreateUserController";
import { getUserController } from "../modules/Users/UseCases/GetUser/GetUserController";
import { deleteUserController } from "../modules/Users/UseCases/DeleteUser/DeleteUserController";
import { changePasswordController } from "../modules/Users/UseCases/ChangePassword/ChangePasswordController";

const CreateUserController = new createUserController()
const GetUserController = new getUserController()
const DeleteUserController = new deleteUserController()
const ChangePasswordController = new changePasswordController()


const userRoutes = Router()


userRoutes.post("/create-user",  CreateUserController.handle)

userRoutes.post("/get-user", GetUserController.handle)

userRoutes.post("/delete-user",  DeleteUserController.handle)

userRoutes.post("/change-password", ChangePasswordController.handle)



export { userRoutes }
