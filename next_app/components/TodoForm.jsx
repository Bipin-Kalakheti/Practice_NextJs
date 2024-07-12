"use client";
import React, { useEffect } from "react";
import { createTask } from "@/utils/actions";
import { useFormStatus, useFormState } from "react-dom";
import { toast } from "react-hot-toast";

const initialState = {
  message: null,
};

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="btn btn-primary join-item"
      disabled={pending}
    >
      {pending ? "Creating..." : "Create Task"}
    </button>
  );
};

const TodoForm = () => {
  const [state, formAction] = useFormState(createTask, initialState);

  useEffect(() => {
    if (state.status === 400) {
      toast.error(state.message);
    } else if (state.message) {
      toast.success(state.message);
    }
  }, [state]);
  return (
    <form action={formAction}>
      <div className="join w-full mb-8">
        <input
          type="text"
          placeholder="Enter a task"
          className="w-full input input-bordered rounded-md join-item"
          name="content"
          required
        />
        <SubmitBtn />
      </div>
    </form>
  );
};

export default TodoForm;
