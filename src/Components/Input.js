import React, { useState } from "react";
import style from "./Input.module.css";

const Input = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputIsValid, setInputIsValid] = useState(false);
  const [inputIsTouched, setInputIsTouched] = useState(false);
  const inputOnChangeHandler = (event) => {
    setInputValue(event.target.value);
    if (event.target.value.trim() === "") {
      setInputIsValid(false);
      return;
    }
    setInputIsValid(true );
  };
  const onBlurHandler = () => {
    setInputIsTouched(true);
    if (inputValue.trim() === "") {
      setInputIsValid(false);
      return;
    }
    setInputIsValid(true);
    setInputIsTouched(true);
  };
  const inputSubmitHandler = (event) => {
    event.preventDefault();
    if (inputValue.trim() === "") {
      setInputIsValid(false);
      return;
    }
    setInputIsValid(true);
    setInputValue("");
    console.log(inputValue);
  };
  const errorHandler = !inputIsValid && inputIsTouched ? style.error : "";
  return (
    <form onSubmit={inputSubmitHandler}>
      <label htmlFor="">Username</label>
      <input
        type="text"
        onChange={inputOnChangeHandler}
        value={inputValue}
        onBlur={onBlurHandler}
      />
      {errorHandler && (
        <p className={errorHandler}>Please enter a valid input</p>
      )}
      <button type="submit">Add</button>
    </form>
  );
};

export default Input;
