import React from "react";
import {useParams} from "react-router-dom";

export function UserDetails(){
    const params=useParams()

    return(<h1>User details {params.userId}</h1>)
}
