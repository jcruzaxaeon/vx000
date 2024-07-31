

// PRIVATE ROUTE - HOC
// ./client/src/components/core/PrivateRoute.jsx
//
import { useState, useEffect } from "react";
import Cookies from 'js-cookie';
import { verifyToken } from '../../services/auth.js';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useMessage } from '../../contexts/MessageContext.jsx';

const PrivateRoute = () => {
    const location = useLocation();
    const [isTokenValid, setIsTokenValid] = useState(null);
    const { addMessage } = useMessage();

    // const [] = useState(null);
    // VALIDATION
    //
    useEffect(() => {
        const token = Cookies.get('token');
        if (!token) { setIsTokenValid(false); return; }
        if (isTokenValid !== null) return;
        (async () => {
            const valid = await verifyToken();
            setIsTokenValid(valid);
        })();
    }, [isTokenValid]);

    if (isTokenValid === true) return <Outlet />;
    if (isTokenValid === false) {
        addMessage('Unauthorized.  Please login.', 'warning');
        return <Navigate replace to='/' state={{ from: location.pathname }} />;
    }
    return <div><p>Loading...</p></div>
};

export default PrivateRoute;

