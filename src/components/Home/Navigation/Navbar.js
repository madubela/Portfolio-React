import React from "react";
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='Navbar'>
            <ul className='navbar-list'>
                <li><a href='#Home'>Home</a></li>
                <li><a href='#About'>About</a></li>
                <li><a href='#Skills'>Skills</a></li>
                <li><a href="#Portfolio">My Work</a></li>
                <li><a href='#Contact'>Contact me</a></li>
            </ul>
        </div>
    );
}

export default Navbar;
