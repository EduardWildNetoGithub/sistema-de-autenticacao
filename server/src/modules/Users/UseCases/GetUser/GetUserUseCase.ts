import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/prismaClient";
import { GetUserType } from "../../Types/GetUserType";


export class getUserUseCase {
    
    async execute({email, password}:GetUserType) {
        const user = await prisma.user.findUnique({
            where: {
                email_password: {email, password}
            }
        })

        if (!user) {
            throw new AppError("User not Found")
        } else {
            return user
        }
    }
}