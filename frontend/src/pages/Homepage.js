import React from 'react';

function Homepage({ onLogout }) {
    return (
        <div>
            <h1>Welcome to the Homepage!</h1>
            <button onClick={onLogout}>Logout</button>
        </div>
    );
}

export default Homepage;
