

// ./client/src/components/IconNavHeader.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/IconNavHeader.css';

function IconNavHeader() {
  return (
    <nav className="icon-nav-header">
      <ul>
        <li>
          <Link to="/" title="Home">
            <i className="fas fa-home"></i>
          </Link>
        </li>
        <li>
          <Link to="/api/users" title="User List">
            <i className="fas fa-users"></i>
          </Link>
        </li>
        <li>
          <Link to="/nodes" title="Node List">
            <i className="fas fa-project-diagram"></i>
          </Link>
        </li>
        <li>
          <Link to="/grades" title="Grade List">
            <i className="fas fa-list-ol"></i>
          </Link>
        </li>
        <li>
          <Link to="/nodes/create" title="Create Node">
            <i className="fas fa-plus-circle"></i>
          </Link>
        </li>
        <li>
          <Link to="/reviews" title="Read Reviews">
            <i className="fas fa-star"></i>
          </Link>
        </li>
        <li>
          <Link to="/login" title="Login">
            <i className="fas fa-sign-in-alt"></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default IconNavHeader;

