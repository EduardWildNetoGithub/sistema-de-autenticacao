import cors from "cors";
import express, {Response, Request, NextFunction} from "express";
import "express-async-errors"
import { AppError } from "./errors/AppError";
import { routes } from "./routes";

const app = express();

app.use(cors());

app.use(express.json())

app.use(routes)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
      if (err instanceof AppError) {
          return res.status(err.statusCode).json({
              status: "error",
              message: `${err.message}`
          })
      }

      return res.status(500).json({
          status: "error",
          message: err.message
      })
})

app.listen(3333, () => {
    console.log("O servidor está rodando na porta 3333: http://localhost:3333")
})