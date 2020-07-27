import React from "react";

export default function Login() {
  return (
    <form>
      <label htmlFor="username">
        Username:
        <input
          id="username"
          name="username"
          type="text"
          placeholder="Username"
        />
      </label>
      <label htmlFor="password">
        Password:
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
        />
      </label>
    </form>
  );
}
