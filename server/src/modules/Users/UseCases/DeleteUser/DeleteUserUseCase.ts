import { prisma } from "../../../../prisma/prismaClient"
import { AppError } from "../../../../errors/AppError"
import { DeleteUserType } from "../../Types/DeleteUSerType"

export class deleteUserUseCase {
    async execute({email}:DeleteUserType) {
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        })

        if (!user) {
            throw new AppError("User not Found")
        } else {
            const deltedUser = await prisma.user.delete({
                where: {
                    email: email
                }
            })

            return deltedUser
        }
    }
}