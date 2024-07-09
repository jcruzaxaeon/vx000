

// ./client/src/components/Header.jsx

// src/components/Header.jsx

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getToken, logout } from '../services/auth';
import { jwtDecode } from 'jwt-decode';

const Header = () => {
  const navigate = useNavigate();
  const token = getToken();

  let isValidToken = false;
  let userEmail = '';

  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      isValidToken = decodedToken.exp > currentTime;
      userEmail = decodedToken.email; // Assuming the email is stored in the token
    } catch (error) {
      console.error('Error decoding token:', error);
    }
  }

  const handleSignOut = () => {
    logout();
    navigate('/');
  };

  return (
    <header style={styles.header}>
      <h1 style={styles.title}>TYRLYST</h1>
      <ul style={styles.nav}>
        {isValidToken ? (
          <>
            <li style={styles.navItem}>{userEmail}</li>
            <li style={styles.navItem}>
              <button onClick={handleSignOut} style={styles.button}>Sign Out</button>
            </li>
          </>
        ) : (
          <>
            <li style={styles.navItem}>
              <Link to="/register" style={styles.link}>Register</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/login" style={styles.link}>Login</Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#f0f0f0',
  },
  title: {
    margin: 0,
  },
  nav: {
    listStyle: 'none',
    display: 'flex',
    margin: 0,
    padding: 0,
  },
  navItem: {
    marginLeft: '1rem',
  },
  link: {
    textDecoration: 'none',
    color: '#333',
  },
  button: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: '#333',
    fontSize: '1rem',
  },
};

export default Header;