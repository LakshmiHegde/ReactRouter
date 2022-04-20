import React from "react";
import {NavLink , Outlet } from "react-router-dom";

export function Products(){
    const navlinkstyle = ({isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline'
        }
    }
    return(
        <>
            <h1> Products page</h1>
            <input type="search" placeholder="search products"/>
             <nav>
                <NavLink to='Featured' style={navlinkstyle}>Featured</NavLink>
                <NavLink to='New' style={navlinkstyle}>New</NavLink>

            </nav>
            <Outlet /> {/* this says, the output of children to present in thesame page*/}
        </>
    )
}