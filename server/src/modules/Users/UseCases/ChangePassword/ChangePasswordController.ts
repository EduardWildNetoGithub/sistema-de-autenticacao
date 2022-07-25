import { Request, Response } from "express"
import { changePasswordUseCase } from "./ChangePasswordUseCase"

export class changePasswordController {
    async handle(req: Request, res: Response) {
        const { email, password } = req.body

        const ChangePasswordUseCase = new changePasswordUseCase()

        const result = await ChangePasswordUseCase.execute({email, password})

        return res.status(201).json(result)
    }
}