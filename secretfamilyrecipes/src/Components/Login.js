import React from "react";

export default function Login(props) {
  const { login, loginSubmit, loginChange } = props;
  const onLoginChange = (evt) => {
    const { name, value } = evt.target;
    loginChange(name, value);
  };

  return (
    <form onSubmit={loginSubmit}>
      <label htmlFor="email">
        Email:
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          onChange={onLoginChange}
          value={login.email}
        />
      </label>
      <label htmlFor="password">
        Password:
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          onChange={onLoginChange}
          value={login.password}
        />
      </label>
      <button>Login</button>
    </form>
  );
}
