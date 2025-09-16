import * as taskService from "../services/task";
import { z } from "zod";

export async function createTask(req: Request, res:Response) {
    const result = req.body;

    const newTask = await taskService.createTask(result)
    return res.json(newTask);
}