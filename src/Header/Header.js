import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className="header">
            <button className='home-page' onClick={() => navigate('/')}><h1>New York Times</h1></button>
        </div>
    )
}

export default Header;