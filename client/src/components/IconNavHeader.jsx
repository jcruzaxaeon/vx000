import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getToken, logout } from '../services/auth';
import { jwtDecode } from 'jwt-decode';
// import '../styles/IconNavHeader.css';
import '../styles/normalize.css';
import '../styles/global.css';
import { useMessage } from '../contexts/MessageContext.jsx';

function IconNavHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const token = getToken();
    const { addMessage } = useMessage();

    let isValidToken = false;
    let userEmail = '';

    if (token) {
        try {
            const decodedToken = jwtDecode(token);
            const currentTime = Date.now() / 1000;
            isValidToken = decodedToken.exp > currentTime;
            userEmail = decodedToken.email;
        } catch (error) {
            console.error('Error decoding token:', error);
        }
    }

    function handleLogout(e) {
        e.preventDefault();
        logout();
        addMessage('Logout successful', 'success');

        if (window.location.pathname === '/') window.location.reload();
        else navigate('/', { replace: true });
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="icon-nav-header">
            <div className="settings-menu">
                <button onClick={toggleMenu} className="settings-button">
                    <i className="fas fa-bars"></i>
                </button>
                {isMenuOpen && (
                    <div className="dropdown-menu">
                        <Link to="/" onClick={toggleMenu}>Home</Link>
                        <Link to="/nodes" onClick={toggleMenu}>Node List</Link>
                        <Link to="/reviews/create" onClick={toggleMenu}>Write Review</Link>
                        <Link to="/reviews" onClick={toggleMenu}>Read Reviews</Link>
                    </div>
                )}
                <p className="title">TYRLST</p>
                {/* ZKORZ */}
            </div>

            <div className="login-button">
                {isValidToken
                    ? <Link to="/" onClick={handleLogout} className="login-link">Logout</Link>
                    : <Link to="/login" title="Login" className="login-link">Login</Link>}
            </div>
        </nav>
    );
}

export default IconNavHeader;