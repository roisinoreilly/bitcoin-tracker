import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Nav.css"

const Nav = () => {
    return (
        <nav className="navbar">
            <NavLink to="/" className="nav-link">
                <h2>Currencies</h2>
            </NavLink>
            <NavLink to="/converter" className="nav-link">
                <h2>Converter</h2>
            </NavLink>
        </nav>
    );
};

export default Nav;