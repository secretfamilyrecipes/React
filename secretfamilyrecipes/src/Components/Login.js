import React from "react";

export default function Login(props) {
  const { login, loginSubmit, loginChange } = props;
  const onLoginChange = (evt) => {
    const { name, value } = evt.target;
    loginChange(name, value);
  };

  return (
    <div className="formContainer">
      <h1>Login</h1>
      <form onSubmit={loginSubmit}>
        <label htmlFor="email">
          Email:{" "}
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={onLoginChange}
            value={login.email}
          />
        </label>
        <br />
        <label htmlFor="password">
          Password:{" "}
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            onChange={onLoginChange}
            value={login.password}
          />
        </label>
        <br />
        <button>Login</button>
      </form>
    </div>
  );
}
