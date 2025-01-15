import React, { useState, useEffect } from 'react';
import Homepage from '../src/pages/Homepage';
import LoginPage from '../src/pages/LoginPage';
import { getToken, setToken, clearToken } from './utils/auth';
import api from './utils/axios';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = getToken();
        if (token) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setIsAuthenticated(true);
        }
    }, []);

    const handleLogin = (token) => {
        setToken(token);
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        setIsAuthenticated(true);
    };

    const handleLogout = () => {
        clearToken();
        delete api.defaults.headers.common['Authorization'];
        setIsAuthenticated(false);
    };

    return (
        <div>
            {isAuthenticated ? (
                <Homepage onLogout={handleLogout} />
            ) : (
                <LoginPage onLogin={handleLogin} />
            )}
        </div>
    );
}

export default App;
