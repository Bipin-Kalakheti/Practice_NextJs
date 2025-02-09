"use server";
import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import z from "zod";

export const createTask = async (prevState, formData) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const content = formData.get("content");

  const Task = z.object({
    content: z.string().min(5),
  });

  try {
    Task.parse({ content });

    await prisma.task.create({
      data: {
        content,
      },
    });

    revalidatePath("/todo-list");

    return { message: "Task created successfully!", status: 200 };
  } catch (error) {
    return {
      message:
        error.errors[0]?.message ||
        "An error occurred while creating the task.",
      status: 400,
    };
  }
};

export const getAllTasks = async () => {
  return await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const deleteTask = async (formData) => {
  const id = formData.get("id");
  await prisma.task.delete({
    where: { id },
  });

  revalidatePath("/todo-list");
};

export const getTask = async (id) => {
  return await prisma.task.findUnique({
    where: { id },
  });
};

export const editTask = async (formData) => {
  const id = formData.get("id");
  const content = formData.get("content");
  const completed = formData.get("completed");

  await prisma.task.update({
    where: { id },
    data: {
      content,
      completed: completed === "on",
    },
  });

  redirect("/todo-list");
};
