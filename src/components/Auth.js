import React, { useState } from "react";
import SignIn from "./sign-in.js";
import SignUp from "./register.js";
import "./Auth.css";

const Auth = () => {
  const [currentForm, setCurrentForm] = useState("signIn");

  const handleFormSwitch = (form) => {
    setCurrentForm(form);
  };

  return (
    <div className="auth-container">
      {currentForm === "sign-in" && <SignIn onSwitch={handleFormSwitch} />}
      {currentForm === "register" && <SignUp onSwitch={handleFormSwitch} />}
    </div>
  );
};

export default Auth;
