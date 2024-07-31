

// ./client/src/App.jsx

import React from 'react';
import { /*Routes, Route,*/ Link } from 'react-router-dom';
// import UserList from './components/UserList';
// import NodeList from './components/NodeList';
// import { useState } from 'react';
import IconNavHeader from './components/IconNavHeader';
import AppRoutes from './Routes';
import { MessageProvider } from './contexts/MessageContext.jsx';
import { MessageDisplay } from './components/MessageDisplay.jsx';
import './styles/global.css';

function App() {

  return (
    <MessageProvider>
      {/* <Header /> */}
      <div className='app-container'>
      <IconNavHeader />
      <MessageDisplay />
      <main>
        <AppRoutes />
      </main>
      {/* <Footer /> */}
      {/* <Routes> */}
        {/* <Route path='/' element={<h1>Landing</h1>} /> */}
        {/* <Route path="/" element={<Landing />} />
        <Route path='/api/users' element={<UserList />} />
        <Route path='/nodes' element={<NodeList />} />
        <Route path='/nodes/create' element={<CreateNode />} />
        <Route path='/api/nodes/delete' element={<DeleteNode />} />
        <Route path='/grade/create' element={<CreateGrade />} />
        <Route path='/grades' element={<GradeList />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/reviews' element={<ReadReviews />} />
        <Route path='/reviews/:reviewId' element={<ReadReview />} />
        <Route path='/reviews/create' element={<CreateReview />} />
      </Routes> */}
      </div>
    </MessageProvider>
  )
}

export default App;
