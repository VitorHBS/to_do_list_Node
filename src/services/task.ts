import { Prisma } from "@prisma/client";
import { prisma } from "../libs/prisma";


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