import {Request, Response} from "express"
import { deleteUserUseCase } from "./DeleteUserUSeCase"

export class deleteUserController {
    async handle(req: Request, res: Response) {
        const { email } = req.body

        const DeleteUserUSeCase = new deleteUserUseCase()

        const result = await DeleteUserUSeCase.execute({email})

        return res.status(201).json(result)
    }
}