"use client";
import React from "react";
import { createTask } from "@/utils/actions";
import { useFormStatus, useFormState } from "react-dom";

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
  return (
    <form action={formAction}>
      {state.message ? (
        <p className="text-500 mb-2">{state.message}</p>
      ) : null}
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
