import { Request, Response} from "express"
import { getUserUseCase } from "./GetUserUseCase"

export class getUserController {
    async handle(req: Request, res: Response) {
        const { email, password } = req.body

        const GetUserUseCase = new getUserUseCase()

        
        const result = await GetUserUseCase.execute({email, password})

        return res.status(201).json(result)
    }
}