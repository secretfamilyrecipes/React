import React from "react";
import styled from "styled-components";

// const FormStyle = styled.form`
//   /* display: flex;
//   flex-direction: column;
//   align-items: center; */
//   /* width: 60%; */
//   /* margin: 0 0 1% 1%; */
// `;

export default function Register(props) {
  const {
    registerFormErrors,
    registerFormValues,
    inputChange,
    checkboxChange,
    submit,
    disabled,
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
    <div className="formContainer">
      <h1>Create a New Account</h1>
      <form onSubmit={onSubmit}>
        {/* <label htmlFor="fname">
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
      </label> */}
        <label htmlFor="username">
          <span>Username: </span>
          <input
            id="username"
            name="username"
            value={registerFormValues.username}
            onChange={onInputChange}
            type="text"
            placeholder="Username"
          />
        </label>
        <br />
        <label htmlFor="email">
          <span>Email: </span>
          <input
            id="email"
            name="email"
            value={registerFormValues.email}
            onChange={onInputChange}
            type="email"
            placeholder="Email"
          />
        </label>
        <br />
        <label htmlFor="password">
          <span>Password: </span>
          <input
            id="password"
            name="password"
            value={registerFormValues.password}
            onChange={onInputChange}
            type="password"
            placeholder="Password"
          />
        </label>
        <br />
        <label>
          <span>I agree to the Terms and Conditions</span>
          <input
            id="tos"
            name="termsOfService"
            type="checkbox"
            checked={registerFormValues.termsOfService === true}
            onChange={onCheckboxChange}
          />
        </label>
        <br />
        <button disabled={disabled}>Create Account</button>
        <div className="errors">
          <div>{registerFormErrors.username}</div>
          <div>{registerFormErrors.email}</div>
          <div>{registerFormErrors.password}</div>
          <div>{registerFormErrors.termsOfService}</div>
        </div>
      </form>
    </div>
  );
}
