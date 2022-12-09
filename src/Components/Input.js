import React from "react";
import style from "./Input.module.css";

const Input = () => {
  const inputSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={inputSubmitHandler}>
      <label htmlFor="">Username</label>
      <input type="text" />
      <button type="submit">Add</button>
    </form>
  );
};

export default input;
