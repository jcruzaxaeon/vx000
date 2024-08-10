// ./client/src/components/Login.jsx

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../services/auth.js';
import '../styles/normalize.css';
import '../styles/global.css';
import { useMessage } from '../contexts/MessageContext.jsx';

const Login = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { addMessage } = useMessage();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await login(credentials);
            addMessage('Login successful', 'success');
            navigate('/');
        } catch (err) {
            setError(err.message || 'Login failed');
        }
    };

    return (
        <div className="container1">
            <h2>Login</h2>
            {/* {error && <p className="login__error">{error}</p>} */}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email"></label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={credentials.email}
                        onChange={handleChange}
                        placeholder='Email'
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password"></label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                        placeholder='Password'
                        required
                    />
                </div>
                <div className='table'>
                    <div className='table__column1'>
                        <ul className='link-list'>
                            <li className='link-list__item'><Link className='link' to="/register">Create account</Link></li>
                            <li className='link-list__item'><Link className='link' to="/reset-password">Reset password</Link></li>
                        </ul>
                    </div>
                    <div className='table__column2'>
                        <button className="button button--blue" type="submit">Submit</button>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default Login;