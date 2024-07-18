

// ./client/src/components/IconNavHeader.jsx

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getToken, logout } from '../services/auth';
import { jwtDecode } from 'jwt-decode';
import '../styles/IconNavHeader.css';

function IconNavHeader() {
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

    function handleLogout(e) {
        e.preventDefault();
        logout();
        navigate('/');
    };

    return (
        <nav className="icon-nav-header">
            <div className="icon-container">
                <div className="icon-group">
                    <Link to="/" title="Home">
                        <i className="fas fa-home"></i>
                    </Link>
                    <Link to="/api/users" title="User List">
                        <i className="fas fa-users"></i>
                    </Link>
                    <Link to="/nodes" title="Node List">
                        <i className="fas fa-project-diagram"></i>
                    </Link>
                </div>
                <div className="icon-group">
                    {/* <Link to="/grades" title="Grade List">
                        <i className="fas fa-list-ol"></i>
                    </Link> */}
                    <Link to="/nodes/create" title="Create Node">
                        <i className="fas fa-plus-circle"></i>
                    </Link>
                    <Link to="/reviews" title="Read Reviews">
                        <i className="fas fa-star"></i>
                    </Link>
                </div>
            </div>
            <div className="login-button">
                { isValidToken
                    ? <Link to="/" onClick={handleLogout} className="login-link">Logout</Link>
                    : <Link to="/login" title="Login" className="login-link">Login</Link>}
            </div>
        </nav>
    );
}

export default IconNavHeader;

// Login Icon
// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../styles/IconNavHeader.css';

// function IconNavHeader() {
//   return (
//     <nav className="icon-nav-header">
//       <ul>
//         <li>
//           <Link to="/" title="Home">
//             <i className="fas fa-home"></i>
//           </Link>
//         </li>
//         <li>
//           <Link to="/api/users" title="User List">
//             <i className="fas fa-users"></i>
//           </Link>
//         </li>
//         <li>
//           <Link to="/nodes" title="Node List">
//             <i className="fas fa-project-diagram"></i>
//           </Link>
//         </li>
//         <li>
//           <Link to="/grades" title="Grade List">
//             <i className="fas fa-list-ol"></i>
//           </Link>
//         </li>
//         <li>
//           <Link to="/nodes/create" title="Create Node">
//             <i className="fas fa-plus-circle"></i>
//           </Link>
//         </li>
//         <li>
//           <Link to="/reviews" title="Read Reviews">
//             <i className="fas fa-star"></i>
//           </Link>
//         </li>
//         <li>
//           <Link to="/login" title="Login">
//             <i className="fas fa-sign-in-alt"></i>
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default IconNavHeader;

