

// src/App.jsx

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import UserList from './components/UserList';
import { useState } from 'react';

function App() {

  return (
    <>
      <nav>
        <h1>VEUDAI</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="api/users">User List</Link></li>
          {/* <li><Link to="/create">Create User</Link></li> */}
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<h1>Landing</h1>} />
        <Route path='/api/users' element={<UserList />} />
      </Routes>
    </>
  )
}

export default App;
