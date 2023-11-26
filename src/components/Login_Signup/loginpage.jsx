import React from "react";
import "./signup.css";

import user_icon from "../assets/person.png";
import email_icon from "../assets/newemail.png";
import password_icon from "../assets/newpassword.png";
import { useState } from "react";

export default function LoginSignup() {
  const [action, setAction] = useState("Sign Up");

  const userStyle = { width: "30px", height: "30px" };
  const emailStyle = { width: "30px", height: "25px" };
  const passwordStyle = { width: "30px", height: "30px" };
  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Log In" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={user_icon} style={userStyle} alt="" />
            <input type="text" placeholder="Full Name" />
          </div>
        )}
        <div className="input">
          <img src={email_icon} style={emailStyle} alt="" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <img src={password_icon} style={passwordStyle} alt="" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      {action==="Sign Up"?<div></div>:<div className="forgot-password">
        Lost Password?<span>Click here!</span>
      </div>}
      <div className="submit-container">
        <div
          className={action === "Log In" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Log In");
          }}
        >
          Log In
        </div>
      </div>
    </div>
  );
}
