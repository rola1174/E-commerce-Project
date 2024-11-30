import React, { useState } from "react";
import { FaRegUserCircle, FaKey, FaUserPlus, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import "./sign-in.css";
import { fetchAllUsersFromLocalStorage } from "../Pages/LocalStorageManager";

export const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [signin, setSignin] = useState({
    loading: false,
    err: null,
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignIn = (formData) => {
    setSignin({ ...signin, loading: true });

    setTimeout(() => {
      const users = fetchAllUsersFromLocalStorage();
      const user = users.find(
        (u) => u.email === formData.email && u.password === formData.password
      );

      if (user) {
        setSignin({ ...signin, loading: false, err: null });
        alert(`Welcome back, ${user.firstName}!`);
        localStorage.setItem("isSignedIn", true); // Set sign-in status in localStorage

        const redirectTo = location.state?.redirectTo || "/OrderPage";
        navigate(redirectTo, { state: location.state }); // Pass original state (e.g., order details)
      } else {
        setSignin({
          ...signin,
          loading: false,
          err: [{ msg: "Invalid email or password!" }],
        });
      }
    }, 2000); 
  };

  const error = () => {
    if (!signin.err) return null;

    return (
      <div className="container">
        <div className="row">
          {signin.err.map((err, index) => (
            <div key={index} className="col-sm-12 alert alert-danger" role="alert">
              {err.msg}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const SignInForm = ({ onSubmit }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit({ email, password });
    };

    return (
      <div className="overlay">
        <form onSubmit={handleSubmit} className="f6">
          <div className="con">
            <header className="head-form">
              <h2>Sign-in</h2>
              <p>Sign in here using your email and password</p>
            </header>
            <div className="field-set">
              {/* Email Input */}
              <div className="input-item">
                <FaRegUserCircle />
                <input
                  className="form-input"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              {/* Password Input */}
              <div className="input-item">
                <FaKey />
                <input
                  className="form-input"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  id="eye"
                  onClick={togglePasswordVisibility}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {/* Buttons */}
              <div className="button-container">
                <button className="sign-in" type="submit">
                  Sign In
                </button>
                <button
                  type="button"
                  className="sign-up-btn"
                  onClick={() => navigate("/auth/sign-up")}
                >
                  Sign Up <FaUserPlus />
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  };

  return (
    <>
      {signin.err !== null && error()}
      {signin.loading ? (
        <div className="container h-100">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      ) : (
        <SignInForm onSubmit={handleSignIn} />
      )}
    </>
  );
};

export default SignIn;
