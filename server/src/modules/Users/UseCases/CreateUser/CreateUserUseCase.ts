import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/prismaClient"
import { User } from "@prisma/client";
import { CreateUserType } from "../../Types/CreateUserType";

export class createUserUSeCase {
    async execute({name, email, password}: CreateUserType): Promise<User> {

        const userAlreadyExists =  await prisma.user.findUnique({
            where: {
                email: email
            }
        })

        const newUser = await prisma.user.create({
            data: {
                name: name,
                email: email,
                password: password
            }
        })

        if (!userAlreadyExists) {
            return newUser
        } else {
            throw new AppError("User Already exists")
        } 
    }
}