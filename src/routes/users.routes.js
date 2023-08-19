import { Router } from "express";
import { validateAuth } from "../middlewares/validateAuth.js";
import { searchByUsername } from "../controllers/users.controller.js";

const usersRouter = Router();

usersRouter.get("/users/:userName", validateAuth, searchByUsername);

export default usersRouter;