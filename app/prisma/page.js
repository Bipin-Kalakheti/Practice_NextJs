import React from "react";
import prisma from "@/utils/db";

const getAllTasks = async () => {
  await prisma.task.create({
    data: {
      content: "Learn Prisma",
    },
  });
};

const Prisma = () => {
  return <div>Prisma</div>;
};

export default Prisma;
