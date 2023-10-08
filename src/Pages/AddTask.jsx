import React, { useState } from "react";
import { url } from "../url";

export const AddTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    const payload = {
      title,
      description,
    };

    fetch(`${url}/tasks/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <h3>Add a New Task</h3>
    </div>
  );
};
