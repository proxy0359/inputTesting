import { useState } from "react";

const useInput = (validInput) => {
  const [inputValue, setInputValue] = useState("");
  const [inputIsTouched, setInputIsTouched] = useState(false);

  const inputIsValid = validInput(inputValue);
  const errorHandler = !inputIsValid && inputIsTouched;

  

  const inputOnChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const onBlurHandler = () => {
    setInputIsTouched(true);
  };

  const resetValue = () => {
    setInputIsTouched(false);
    setInputValue("");
  };

  return {
    value: inputValue,
    isValid: inputIsValid,
    errorHandler: errorHandler,
    resetValue,
    onChangeHandler: inputOnChangeHandler,
    onBlurHandler,
  };
};

export default useInput;
