import React from "react";
import {useNavigate} from "react-router-dom";

export function NewItems(){
    const navigate = useNavigate();
    return(
        <>
            <h1>List of new products</h1>
            <button onClick={()=>navigate(-1)}>Go back</button>
        </>)
}