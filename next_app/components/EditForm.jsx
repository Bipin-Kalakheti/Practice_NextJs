import { editTask, updateTask } from "@/utils/actions";
import React from "react";

const EditForm = ({ task }) => {
  return (
    <form
      action={editTask}
      className="max-w-sm p-12 border border-base-300 rounded-md"
    >
      <input type="hidden" name="id" value={task.id} />
      <div className=" w-full mb-8">
        <input
          type="text"
          placeholder="Enter a task"
          className="w-full input input-bordered rounded-md "
          name="content"
          required
          defaultValue={task.content}
        />
        <div className="form-control my-4">
          <label htmlFor="completed" className="label cursor-pointer">
            <span className="label-text">Completed</span>
            <input
              type="checkbox"
              name="completed"
              id="completed"
              className="checkbox-primary checkbox checkbox-sm"
              defaultChecked={task.completed}
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary btn-block btn-sm">
          Edit Task
        </button>
      </div>
    </form>
  );
};

export default EditForm;
