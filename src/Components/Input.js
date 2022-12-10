import React, { useState } from "react";
import style from "./Input.module.css";
import useInput from "../Hooks/use-Input";

const Input = () => {
  const {
    value: nameInputValue,
    isValid: inputIsValid,
    errorHandler: inputError,
    onChangeHandler: inputOnChangeHandler,
    onBlurHandler: inputOnBlurHandler,
    resetValue: nameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: emailInputValue,
    isValid: emailIsValid,
    errorHandler: emailError,
    onChangeHandler: emailOnChangeHandler,
    onBlurHandler: emailOnBlurHandler,
    resetValue: emailReset,
  } = useInput((value) => value.includes("@"));

  const inputSubmitHandler = (event) => {
    event.preventDefault();

    if (!inputIsValid) {
      return;
    }
    if (!emailIsValid) {
      return;
    }

    console.log(nameInputValue);
    nameReset();
    emailReset();
  };

  return (
    <form onSubmit={inputSubmitHandler}>
      <label htmlFor="">Username</label>
      <input
        type="text"
        onChange={inputOnChangeHandler}
        value={nameInputValue}
        onBlur={inputOnBlurHandler}
      />
      {inputError && <p className={style.error}>Please enter a valid input</p>}
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        onChange={emailOnChangeHandler}
        value={emailInputValue}
        onBlur={emailOnBlurHandler}
      />
      {emailError && <p className={style.error}>Please enter a valid input</p>}
      <button type="submit">Add</button>
    </form>
  );
};

export default Input;
