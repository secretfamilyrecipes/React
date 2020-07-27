import React from "react";

export default function Register(props) {
  const {
    registerFormErrors,
    registerFormValues,
    inputChange,
    checkboxChange,
    submit,
  } = props;
  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };
  const onCheckboxChange = (evt) => {
    const { name, checked } = evt.target;
    checkboxChange(name, checked);
  };
  const onInputChange = (evt) => {
    const { name, value } = evt.target;
    inputChange(name, value);
  };
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="fname">
        First name:
        <input
          id="fname"
          name="fname"
          value={registerFormValues.fname}
          onChange={onInputChange}
          type="text"
          placeholder="First name"
        />
      </label>
      <label htmlFor="=lname">
        Last name:
        <input
          id="lname"
          name="lname"
          value={registerFormValues.lname}
          onChange={onInputChange}
          type="text"
          placeholder="Last name"
        />
      </label>
      <label htmlFor="username">
        Username:
        <input
          id="username"
          name="username"
          value={registerFormValues.username}
          onChange={onInputChange}
          type="text"
          placeholder="Username"
        />
      </label>
      <label htmlFor="email">
        Email:
        <input
          id="email"
          name="email"
          value={registerFormValues.email}
          onChange={onInputChange}
          type="email"
          placeholder="Email"
        />
      </label>
      <label htmlFor="password">
        Password:
        <input
          id="password"
          name="password"
          value={registerFormValues.password}
          onChange={onInputChange}
          type="password"
          placeholder="Password"
        />
      </label>
      <label>
        I agree to the Terms and Conditions
        <input
          name="termsOfService"
          type="checkbox"
          checked={registerFormValues.termsOfService === true}
          onChange={onCheckboxChange}
        />
      </label>
      <button>Create Account</button>
      <div className="errors">
        <div>{registerFormErrors.username}</div>
        <div>{registerFormErrors.email}</div>
        <div>{registerFormErrors.password}</div>
        <div>{registerFormErrors.termsOfService}</div>
      </div>
    </form>
  );
}
