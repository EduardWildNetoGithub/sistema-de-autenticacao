import { Request, Response } from "express"
import { createUserUSeCase } from "./CreateUserUseCase"

export class createUserController {
    async handle(req: Request, res: Response) {
        console.log("oi")
        const { name, email, password } = req.body

        const CreateUserUseCase = new createUserUSeCase()

        const result = await CreateUserUseCase.execute({name, email, password})

        return res.status(201).json(result)
    }
}