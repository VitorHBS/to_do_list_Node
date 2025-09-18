import { z } from "zod";

export const taskSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  status: z.enum(["pending", "done"]).default("pending"),
});


export const taskListSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string().nullable().optional(),
  status: z.enum(["pending", "done"]),
  createdAt: z.date(),
  updateAt: z.date()
});

export const tasksListSchema = z.array(taskListSchema)


export const idSchema = z.object({
  id: z.number()
})

export const updateUserSchema = z.object({
  newTitle: z.string().min(2),
  newDescription: z.string().optional().nullable(),
  newStatus: z.enum(["pending", "done"])
})