import { useState } from "react";

const useTheInput = (inputValue) => {
  const [inputVal, setInputVal] = useState("");
  const [inputIsTouched, setInputIsTouched] = useState(false);

  const inputIsValid = inputValue(inputVal);
  const inputError = !inputIsValid && inputIsTouched;

  const inputChangeHandler = (event) => {
    setInputVal(event.target.value);
  };

  const inputBlurHandler = () => {
    setInputIsTouched(true);
  };

  const inputReset = () => {
    setInputVal("");
    setInputIsTouched(false);
  };

  return {
    isValid: inputIsValid,
    inputError,
    inputVal,
    inputReset,
    inputBlurHandler,
    inputChangeHandler,
  };
};

export default useTheInput;
