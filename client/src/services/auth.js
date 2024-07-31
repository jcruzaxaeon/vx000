

// ./client/src/services/auth.js

import axios from 'axios';
import Cookies from 'js-cookie';

const apiUrl = import.meta.env.VITE_API_URL;

export const register = async (userData) => {
    try {
        const response = await axios.post(`${apiUrl}/v1/api/users`, userData);
        if (response.data.token) {
            Cookies.set('token', response.data.token, { expires: 1 });
        }
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const login = async (credentials) => {
    try {
        const response = await axios.post(`${apiUrl}/v1/api/login`, credentials);
        if (response.data.token) {
            Cookies.set('token', response.data.token, { expires: 7 });
        }
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const logout = () => {
    Cookies.remove('token');
};

export const getToken = () => {
    return Cookies.get('token');
};

export const verifyToken = async () => {
    const token = getToken();
    if(!token) return false;

    try {
        const response = await axios.get(`${apiUrl}/v1/api/token`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        return response.data.valid;
    } catch(error) {
        console.error('Token verification failed:', error);
        return false;
    }
};