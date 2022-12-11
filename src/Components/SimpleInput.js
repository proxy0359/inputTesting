import React, { useState } from "react";

const SimpleInput = (props) => {
  const [firstNameVal, setFirstNameVal] = useState("");
  const [fnIsTouched, setFnIsTouched] = useState(false);

  const [lastNameVal, setLastNameVal] = useState("");
  const [lnIsTouched, setLnIsTouched] = useState(false);

  const [emailVal, setEmailVal] = useState("");
  const [emailIsTouched, setEmailIsTouched] = useState(false);

  // FIRST NAME ERROR HANDLER
  const fnValid = firstNameVal.trim() !== "";
  const fnError = !fnValid && fnIsTouched;

  //LAST NAME ERROR HANDLER
  const lnValid = lastNameVal.trim() !== "";
  const lnError = !lnValid && lnIsTouched;

  //EMAIL ERROR HANDLER
  const emailIsValid = emailVal.includes("@");
  const emailError = !emailIsValid && emailIsTouched;

  const fnChangeHandler = (event) => {
    setFirstNameVal(event.target.value);
  };

  const fnBlurHandler = () => {
    setFnIsTouched(true);
  };

  const lnChangeHandler = (event) => {
    setLastNameVal(event.target.value);
  };

  const lsBlurHandler = () => {
    setLnIsTouched(true);
  };

  const emailChangeHandler = (event) => {
    setEmailVal(event.target.value);
  };
  const emailBlurHandler = () => {
    setEmailIsTouched(true);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setFnIsTouched(true);
    setLnIsTouched(true);
    setEmailIsTouched(true);

    if (!fnValid) {
      return;
    } else if (!lnValid) {
      return;
    } else if (!emailIsValid) {
      return;
    }

    console.log(
      `First Name: ${firstNameVal}. Last Name: ${lastNameVal}  ,  Email: ${emailVal}`
    );

    setFirstNameVal("");
    setEmailVal("");
    setLastNameVal("");
    setEmailIsTouched(false);
    setFnIsTouched(false);
    setLnIsTouched(false);
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
            value={firstNameVal}
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
            value={lastNameVal}
            onBlur={lsBlurHandler}
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
