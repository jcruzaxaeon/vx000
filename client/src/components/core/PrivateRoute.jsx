

// ./client/src/components/core/PrivateRoute.jsx
//
import { useState, useEffect, useCallback } from "react";
import Cookies from 'js-cookie';
import { verifyToken } from '../../services/auth.js';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useMessage } from '../../contexts/MessageContext.jsx';

const PrivateRoute = () => {
    const location = useLocation();
    const [isTokenValid, setIsTokenValid] = useState(null);
    const { addMessage } = useMessage();

    const handleInvalidToken = useCallback(() => {
        addMessage('Unauthorized. Please login.', 'warning');
    }, [addMessage]);

    useEffect(() => {
        const validateToken = async () => {
            const token = Cookies.get('token');
            if (!token) {
                setIsTokenValid(false);
                return;
            }
            if (isTokenValid !== null) return;
            
            const valid = await verifyToken();
            setIsTokenValid(valid);
        };

        validateToken();
    }, [isTokenValid]);

    useEffect(() => {
        if (isTokenValid === false) {
            handleInvalidToken();
        }
    }, [isTokenValid, handleInvalidToken]);

    if (isTokenValid === null) {
        return <div><p>Loading...</p></div>;
    }

    if (isTokenValid === false) {
        return <Navigate replace to='/' state={{ from: location.pathname }} />;
    }

    return <Outlet />;
};

export default PrivateRoute;

