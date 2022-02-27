import axios from "axios";
import React, { useState } from "react";
import "./register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [select, setSelect] = useState("");
  const [degree, setDegree] = useState("");
  // console.log(choose);

  const handleSumbit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("auth/new/register", {
        username,
        email,
        password,
        select,
        degree,
      });
      res.data && window.location.replace("/login");
    } catch (error) {}
  };

  return (
    <div className="register">
      <h2 className="register_title">Register</h2>
      <form className="register_form" onSubmit={handleSumbit}>
        <div className="user_details">
          <div className="input_box">
            <label>Name</label>
            <input
              className="register_input"
              type="text"
              placeholder="Enter Name"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input_box">
            <label>Email</label>
            <input
              className="register_input"
              type="email"
              placeholder="Enter Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input_box">
            <label>Password</label>
            <input
              className="register_input"
              type="password"
              placeholder="Enter Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input_box">
            <label>Degree</label>
            <input
              className="register_input"
              type="text"
              placeholder="Enter Degree"
              required
              onChange={(e) => setDegree(e.target.value)}
            />
          </div>
          <div className="input_box">
            <label for="std">selection</label>
            <select
              className="register_input"
              id="std"
              name="stds"
              onChange={(e) => setSelect(e.target.value)}
            >
              <option className="option_input" disabled selected value="Staff">
                choose
              </option>
              <option className="option_input" value="staff">
                Staff
              </option>
              <option className="option_input" value="2Year">
                2 year
              </option>
              <option className="option_input" value="3Year">
                3 year
              </option>
              <option className="option_input" value="finalYear">
                Final Year
              </option>
            </select>
          </div>
          <div className="register_btn">
            <button className="btn_cencel">Cencel</button>
            <button
              className="btn_register"
              onClick={() => console.log("this is submit")}
            >
              Register
            </button>
          </div>
        </div>
        {/* <span>something went wrong</span> */}
      </form>
    </div>
  );
}
