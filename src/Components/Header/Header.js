import React from 'react';
import CustomLink from '../Customlink/Customlink';
import "./Header.css";

const Header = () => {
    return (
        <div>
            <nav className='header-items'>
                <CustomLink className='header-link' to="/home">Home</CustomLink>
                <CustomLink className='header-link' to="/reviews" >Reviews</CustomLink>
                <CustomLink className='header-link' to="/dashboard" >Dashboard</CustomLink>
                <CustomLink className='header-link' to="/blogs" >Blogs</CustomLink>
                <CustomLink className='header-link' to="/about" >About</CustomLink>
            </nav>
        </div>
    );
};

export default Header;