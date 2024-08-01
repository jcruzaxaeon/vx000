

// ./client/src/Routes.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import UserList from './components/UserList';
import NodeList from './components/NodeList';
import Home from './components/Home';
import CreateNode from './components/CreateNode';
import DeleteNode from './components/DeleteNode';
import CreateGrade from './components/CreateGrade';
import GradeList from './components/GradeList';
import Register from './components/Register';
import Login from './components/Login';
// import CreateReview from './components/CreateReview';
import ReadReviews from './components/reviews/ReadReviews';
import ReadReview from './components/reviews/ReadReview';
import CreateReviewStandard from './components/reviews/CreateReviewStandard';
import UpdateReview from './components/reviews/UpdateReview';
import DeleteReview from './components/reviews/DeleteReview';
import PrivateRoute from './components/core/og-PrivateRoute-1';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path='/api/users' element={<UserList />} /> */}
      <Route path='/nodes' element={<NodeList />} />
      <Route path='/nodes/create' element={<CreateNode />} />
      <Route path='/api/nodes/delete' element={<DeleteNode />} />
      <Route path='/grade/create' element={<CreateGrade />} />
      <Route path='/grades' element={<GradeList />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/reviews' element={<ReadReviews />} />
      <Route path='/reviews/:reviewId' element={<ReadReview />} />
      <Route element={<PrivateRoute />}>
        <Route path='/reviews/create' element={<CreateReviewStandard />} />
        <Route path='/reviews/:reviewId/edit' element={<UpdateReview />} />
        <Route path='/reviews/:reviewId/delete' element={<DeleteReview />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;

