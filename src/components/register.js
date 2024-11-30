import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";
import { addUserToLocalStorage,fetchAllUsersFromLocalStorage } from "../Pages/LocalStorageManager";
import "./register.css";

export const SignUp = () => {
  const navigate = useNavigate();

  const [register, setRegister] = useState({
    loading: false,
    err: null,
  });

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    gender: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
  };

  const signUpUser = (userData) => {
    const existingUsers = fetchAllUsersFromLocalStorage();

    // Check if the email or username already exists
    const isExistingUser = existingUsers.some(
      (user) => user.email === userData.email || user.username === userData.username
    );

    if (isExistingUser) {
      alert("User already exists. Please sign in.");
      setRegister({ ...register, loading: false, err: [{ msg: "User already exists." }] });
      navigate('/Auth/sign-in');
    }

    // Add the new user to localStorage
    addUserToLocalStorage(userData);
    alert("Registration successful! Redirecting to sign-in...");
    navigate("/auth/sign-in");
  };

  const submit = (e) => {
    e.preventDefault();
    setRegister({ ...register, loading: true });

    setTimeout(() => {
      const { username, email, password, firstName, lastName, gender, phone } = form;

      // Validate all fields
      if (!firstName || !lastName || !email || !password || !gender || !phone || !username) {
        setRegister({
          ...register,
          loading: false,
          err: [{ msg: "All fields are required!" }],
        });
        return;
      }

      // Create a unique user object (you can use a unique ID generator if needed)
      const userData = {
        userId: Date.now(), // Use timestamp as a unique identifier
        username,
        email,
        password,
        firstName,
        lastName,
        gender,
        phone,
      };

      signUpUser(userData);
      setRegister({ ...register, loading: false, err: null });
    }, 2000);
  };

  return (
    <>
      {register.err && <div>{register.err[0].msg}</div>}
      {register.loading ? (
        <div>Loading...</div>
      ) : (
        <form className="fr" onSubmit={submit}>
          <div>
            <label>First Name</label>
            <input
             className="select-gender"
              type="text"
              id="firstName"
              value={form.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              className="select-gender"
              type="text"
              id="lastName"
              value={form.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Email</label>
            <input
              className="select-gender"
              type="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Password</label>
            <input
              className="select-gender"
              type="password"
              id="password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Gender</label>
            <select
              className="select-gender"
              id="gender"
              value={form.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div>
            <label>Phone</label>
            <input
              className="select-gender"
              type="tel"
              id="phone"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Username</label>
            <input
             className="select-gender"
              type="text"
              id="username"
              value={form.username}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">
            Sign Up <FaUserPlus />
          </button>
        </form>
      )}
    </>
  );
};

export default SignUp;
