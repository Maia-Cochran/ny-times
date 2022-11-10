import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className="header">
            <button className='logo-tile' onClick={() => navigate('/')}><h1>NY Times News Reader</h1></button>
        </div>
    )
}

export default Header;