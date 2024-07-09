

// ./client/src/components/Register.jsx

import React, { useState } from 'react';
import { register } from '../services/auth.js';

const Register = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    name: '',
    username: ''
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await register(userData);
      console.log('Registration successful', response);
      // Redirect or update UI
    } catch (error) {
      console.error('Registration failed', error);
      // Handle error (show message to user)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        value={userData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="password"
        name="password"
        value={userData.password}
        onChange={handleChange}
        placeholder="Password"
        required
      />
      <input
        type="text"
        name="name"
        value={userData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="text"
        name="username"
        value={userData.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;

