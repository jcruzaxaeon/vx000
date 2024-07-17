

// ./client/src/App.jsx

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import UserList from './components/UserList';
import NodeList from './components/NodeList';
import { useState } from 'react';
import Landing from './components/Landing';
import Header from './components/Header';
import CreateNode from './components/CreateNode';
import DeleteNode from './components/DeleteNode';
import CreateGrade from './components/CreateGrade';
import GradeList from './components/GradeList';
import Register from './components/Register';
import Login from './components/Login';
import CreateReview from './components/CreateReview';
import ReadReviews from './components/reviews/ReadReviews';

function App() {

  return (
    <>
      <Header />
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/api/users">User List</Link></li>
          <li><Link to="/nodes">Node List</Link></li>
          <li><Link to="/grades">Grade List</Link></li>
          <li><Link to="/nodes/create">Create Node</Link></li>
          <li><Link to="/api/nodes/delete">Delete Node</Link></li>
          <li><Link to="/grade/create">Create Grade</Link></li>
          <li><Link to="/register">Create an account</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/reviews">Read All Reviews</Link></li>
          <li><Link to="/reviews/create">Create Review</Link></li>
          {/* <li><Link to="/create">Create User</Link></li> */}
        </ul>
      </nav>
      <Routes>
        {/* <Route path='/' element={<h1>Landing</h1>} /> */}
        <Route path="/" element={<Landing />} />
        <Route path='/api/users' element={<UserList />} />
        <Route path='/nodes' element={<NodeList />} />
        <Route path='/nodes/create' element={<CreateNode />} />
        <Route path='/api/nodes/delete' element={<DeleteNode />} />
        <Route path='/grade/create' element={<CreateGrade />} />
        <Route path='/grades' element={<GradeList />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/reviews' element={<ReadReviews />} />
        <Route path='/reviews/create' element={<CreateReview />} />
      </Routes>
    </>
  )
}

export default App;
