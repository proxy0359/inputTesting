import React, { useState } from "react";

import useTheInput from "../Hooks/use-theInput";

const SimpleInput = (props) => {
  const {
    isValid: fnValid,
    inputError: fnError,
    inputVal: fnVal,
    inputReset: fnReset,
    inputBlurHandler: fnBlurHandler,
    inputChangeHandler: fnChangeHandler,
  } = useTheInput((value) => value.trim() !== "");

  // FIRST NAME ERROR HANDLER

  const {
    isValid: lnValid,
    inputError: lnError,
    inputVal: lnVal,
    inputReset: lnReset,
    inputBlurHandler: lnBlurHandler,
    inputChangeHandler: lnChangeHandler,
  } = useTheInput((value) => value.trim() !== "");

  //LAST NAME ERROR HANDLER

  //EMAIL ERROR HANDLER
  const {
    isValid: emailValid,
    inputError: emailError,
    inputVal: emailVal,
    inputReset: emailReset,
    inputBlurHandler: emailBlurHandler,
    inputChangeHandler: emailChangeHandler,
  } = useTheInput((value) => value.includes("@"));

  const onSubmitHandler = (event) => {
    event.preventDefault();
    fnBlurHandler(true);
    lnBlurHandler(true);
    emailBlurHandler(true);

    if (!fnValid) {
      return;
    } else if (!lnValid) {
      return;
    } else if (!emailValid) {
      return;
    }

    console.log(
      `First Name: ${fnVal}. Last Name: ${lnVal}  ,  Email: ${emailVal}`
    );

    fnReset();
    lnReset();

    emailReset();
  };

  const fnStyleError = fnError ? "form-control invalid" : "form-control";
  const lnStyleError = lnError ? "form-control invalid" : "form-control";
  const emailStyleError = emailError ? "form-control invalid" : "form-control";
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="control-group">
        <div className={fnStyleError}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={fnChangeHandler}
            value={fnVal}
            onBlur={fnBlurHandler}
          />
          {fnError && <p className="error-text">Please Enter A valid Name</p>}
        </div>
        <div className={lnStyleError}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            onChange={lnChangeHandler}
            value={lnVal}
            onBlur={lnBlurHandler}
          />
          {lnError && <p className="error-text">Please Enter A valid Name</p>}
        </div>
      </div>
      <div className={emailStyleError}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          onChange={emailChangeHandler}
          value={emailVal}
          onBlur={emailBlurHandler}
        />
        {emailError && <p className="error-text">Please Enter A valid Name</p>}
      </div>
      <div className="form-actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
