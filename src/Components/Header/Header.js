import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    return (
        <div>
            <nav className='header-items'>
                <Link className='header-link' to="/home">Home</Link>
                <Link className='header-link' to="/reviews" >Reviews</Link>
                <Link className='header-link' to="/dashboard" >Dashboard</Link>
                <Link className='header-link' to="/blogs" >Blogs</Link>
                <Link className='header-link' to="/about" >About</Link>
            </nav>
        </div>
    );
};

export default Header;