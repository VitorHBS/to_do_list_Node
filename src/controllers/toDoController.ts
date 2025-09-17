import { taskSchema, tasksListSchema } from "../schemas/taskSchema";
import * as taskService from "../services/task";
import { Request, Response } from "express";


/*        Criação         */

export async function createTask(req: Request, res: Response) {
    try {
        const result = taskSchema.parse(req.body);

        const newTask = await taskService.createTask(result);

        return res.status(200).json(newTask);
    }
    catch (err) {
        console.error(err);
        return res.status(400).json({ error: "dados inválidos", details: err });
    }
}


/*        Pesquisa         */

export async function getAllTask(req: Request, res: Response) {
    try {
        const tasks = await taskService.getAllTask();

        const result = tasksListSchema.parse(tasks);

        return res.json(result);

    } catch (err) {
        console.log(err)
        return res.status(400).json({ error: "falha ao listar taks" })
    }

}


/*        Alteração         */





/*        Exclusão         */