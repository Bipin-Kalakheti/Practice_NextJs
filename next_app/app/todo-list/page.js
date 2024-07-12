import TodoForm from "@/components/TodoForm";
import Todos from "@/components/Todos";
import React from "react";

const Todo_list = () => {
  return <div className="max-w-lg">
    <TodoForm />
    <Todos />
  </div>;
};

export default Todo_list;
