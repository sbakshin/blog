import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <NavLink to={'/'}>Main</NavLink>
            <NavLink to={'/posts'}>Posts</NavLink>
        </div>
    );
};

export default Navbar;
