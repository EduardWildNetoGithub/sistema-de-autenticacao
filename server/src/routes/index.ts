import { Router } from "express";
import { userRoutes } from "./routes";

const routes = Router()

routes.use("/users", userRoutes)

export { routes }