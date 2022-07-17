import React, { Children, useEffect } from "react";
import {useNavigate } from 'react-router-dom';
function Protected(Children)
{
    const navigate=useNavigate();
    const { Component }=Children;

    useEffect(()=>{
        let login=localStorage.getItem("data");
        if(!login)
        {
            navigate("/signup")
        }
    });

    return(
        <div><Component></Component></div>
    )
    
    // let token=localStorage.getItem("data");
    // if( ! token)
    // {
    //    return <Navigate to ="/signup" replace />;
    // }
    // return Children;


}
export default Protected;