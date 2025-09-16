import  Router  from "express";
import { createTask } from "../controllers/toDoController";

export const mainRouter = Router();

mainRouter.post("/task", createTask);