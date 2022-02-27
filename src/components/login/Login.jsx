import React, { useContext, useState } from "react";
import { login } from "../context/ApiCall";
import { AuthContext } from "../context/AuthContext";
import "./login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username, email, password }, dispatch);
  };

  return (
    <div className="login">
      <h2 className="login_title">Login</h2>
      <form className="login_form" onSubmit={handleSubmit}>
        <div className="login_details">
          <div className="login_box">
            <label>Name</label>
            <input
              className="login_input"
              type="text"
              placeholder="Enter Name"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="login_box">
            <label>Email</label>
            <input
              className="login_input"
              type="email"
              placeholder="Enter Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="login_box">
            <label>Password</label>
            <input
              className="login_input"
              type="password"
              placeholder="Enter Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="login_btn">
            <button
              className="btn_login"
              // onClick={handleLogin}

              disabled={isFetching}
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
