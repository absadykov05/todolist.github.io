import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={s.main}>
                <NavLink to='/' className={(link) => link.isActive? s.li_active : s.li}>Live</NavLink>
                <NavLink to='done' className={(link) => link.isActive? s.li_active : s.li}>Done</NavLink>
                <NavLink to='/archive' className={(link) => link.isActive? s.li_active : s.li}>Archive</NavLink>
        </div>
    );
};

export default Navbar;
