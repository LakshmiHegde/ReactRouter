import React from "react";
import {NavLink , useNavigate} from "react-router-dom";

export function Featured(){
    const navigate = useNavigate();
    return(
        <>
            <h1>List of featured products</h1>
            <button onClick={()=>navigate(-1)}>Go back</button>
        </>)
}