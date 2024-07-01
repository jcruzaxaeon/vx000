

// src/App.jsx

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import UserList from './components/UserList';
import TargetList from './components/TargetList';
import { useState } from 'react';
import CreateTarget from './components/CreateTarget';

function App() {

  return (
    <>
      <nav>
        <h1>TYRLIST</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="api/users">User List</Link></li>
          <li><Link to="api/targets">Target List</Link></li>
          <li><Link to="api/targets/create">Create Target</Link></li>
          {/* <li><Link to="/create">Create User</Link></li> */}
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<h1>Landing</h1>} />
        <Route path='/api/users' element={<UserList />} />
        <Route path='/api/targets' element={<TargetList />} />
        <Route path='/api/targets/create' element={<CreateTarget />} />
      </Routes>
    </>
  )
}

export default App;
