"use server";
import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";

import { redirect } from "next/navigation";

export const createTask = async (prevState, formData) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const content = formData.get("content");

  try {
    await prisma.task.create({
      data: {
        content,
      },
    });

    revalidatePath("/todo-list");

    return { message: "Task created successfully!" };
  } catch (error) {
    return { message: "An error occurred while creating the task." };
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
