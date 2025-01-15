import React, { useState } from 'react';
import Login from '../components/Login';
import Register from '../components/Register';

function LoginPage({ onLogin }) {
    const [isRegistering, setIsRegistering] = useState(false);

    return (
        <div>
            <h1>{isRegistering ? 'Register' : 'Login'}</h1>
            {isRegistering ? (
                <Register />
            ) : (
                <Login onLogin={onLogin} />
            )}
            <button onClick={() => setIsRegistering(!isRegistering)}>
                {isRegistering ? 'Switch to Login' : 'Switch to Register'}
            </button>
        </div>
    );
}

export default LoginPage;
