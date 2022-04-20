import React from "react";
import {Link, NavLink} from "react-router-dom";

function NavBar(){
    const navlinkstyle = ({isActive }) =>
    {
        return{
        fontWeight: isActive ? 'bold':'normal',
        textDecoration :isActive ? 'none': 'underline'
    }
    }
    return(<nav className='mainNavBarStyle'>
        <NavLink to='/' style={navlinkstyle}>Home</NavLink>
        <NavLink to='/about' style={navlinkstyle}>About</NavLink>
        <NavLink to='/products' style={navlinkstyle}>Products</NavLink>
        <NavLink to='/lazy' style={navlinkstyle}>Lazy Page</NavLink>
    </nav>)
}
export default NavBar