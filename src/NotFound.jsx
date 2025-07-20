import {Link} from 'react-router-dom'
import React from "react";
export default function NotFound(){
    return (
        <div>
            <Link to="/" className="flex">Go To HomePage</Link>
           <img src='https://alidropship.com/wp-content/uploads/2019/11/22-MailChimp-scaled.png' alt="Not Found Image"  /> 

           
        </div>
    )
}