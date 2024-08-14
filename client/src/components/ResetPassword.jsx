import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;

const ResetPasswordForm = () => {
  const [newPassword, setNewPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { token } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!token) {
      setMessage('Invalid reset link');
      navigate('/reset-password');
    } else {
      const queryParams = new URLSearchParams(location.search);
      const emailFromQuery = queryParams.get('email');
      if (emailFromQuery) {
        setEmail(decodeURIComponent(emailFromQuery));
      } else {
        setMessage('Email not provided in reset link');
      }
    }
  }, [token, navigate, location]);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    console.log("HANDLE RESET PASSWORD LAST STEP");
    try {
      const response = await axios.post(`${apiUrl}/v1/api/reset-password`, { token, newPassword, email });
      setMessage(response.data.message);
      setTimeout(() => navigate('/login'), 3000); // Redirect to login page after 3 seconds
    } catch (error) {
      setMessage(error.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div>
      <h2>Set New Password</h2>
      {email && <p>Resetting password for: {email}</p>}
      <form onSubmit={handleResetPassword}>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="Enter new password"
          required
        />
        <button type="submit">Reset Password</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ResetPasswordForm;