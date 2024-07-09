

// ./client/src/App.jsx

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import UserList from './components/UserList';
import TargetList from './components/TargetList';
import { useState } from 'react';
import Header from './components/Header';
import CreateTarget from './components/CreateTarget';
import DeleteTarget from './components/DeleteTarget';
import CreateGrade from './components/CreateGrade';
import GradeList from './components/GradeList';
import Register from './components/Register';
import Login from './components/Login';

function App() {

  return (
    <>
      <Header />
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="api/users">User List</Link></li>
          <li><Link to="api/targets">Target List</Link></li>
          <li><Link to="grades">Grade List</Link></li>
          <li><Link to="api/targets/create">Create Target</Link></li>
          <li><Link to="api/targets/delete">Delete Target</Link></li>
          <li><Link to="grade/create">Create Grade</Link></li>
          <li><Link to="register">Create an account</Link></li>
          <li><Link to="login">Login</Link></li>
          {/* <li><Link to="/create">Create User</Link></li> */}
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<h1>Landing</h1>} />
        <Route path='/api/users' element={<UserList />} />
        <Route path='/api/targets' element={<TargetList />} />
        <Route path='/api/targets/create' element={<CreateTarget />} />
        <Route path='/api/targets/delete' element={<DeleteTarget />} />
        <Route path='/grade/create' element={<CreateGrade />} />
        <Route path='/grades' element={<GradeList />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App;
