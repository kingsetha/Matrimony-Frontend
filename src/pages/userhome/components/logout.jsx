import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const history = useNavigate();

    const handleLogout = () => {
        // Clear session storage
        sessionStorage.clear();
        
        // Redirect to login page or home page
        history.push('/login');
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
};

export default Logout;
