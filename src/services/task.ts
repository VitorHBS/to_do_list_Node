import { Prisma } from "@prisma/client";
import { prisma } from "../libs/prisma";


       /*        Criação         */

export const createTask = async (data: Prisma.TaskCreateInput) => {
    const task = await prisma.task.create({
        data: {
            title: data.title,
            description: data.description ?? null,
            status: data.status ?? "pending"
        }
    })
    return task;
}

        /*        Pesquisa         */

export const getAllTask = async () => {
    const tasks = await prisma.task.findMany()

    return tasks;
}