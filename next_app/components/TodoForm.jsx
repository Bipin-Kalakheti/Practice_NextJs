import React from "react";
import { createTask } from "@/utils/actions";

const TodoForm = () => {
  return (
    <form action={createTask}>
      <div className="join w-full mb-8">
        <input
          type="text"
          placeholder="Enter a task"
          className="w-full input input-bordered rounded-md join-item"
          name="content"
          required
        />
        <button type="submit" className="btn btn-primary join-item">
          Create Task
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
