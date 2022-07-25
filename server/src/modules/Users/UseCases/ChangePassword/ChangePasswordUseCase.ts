import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/prismaClient";
import { ChangePasswordType } from "../../Types/ChangePasswordType";

export class changePasswordUseCase {
    async execute({email, password}:ChangePasswordType) {
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        })

        if (!user) {
            throw new AppError("User not Found")
        } else {
            const newUserPassword = await prisma.user.update({
                where: {
                    email: email
                },
                data: {
                    password: password
                }
            })

            return newUserPassword
        }
    }
}