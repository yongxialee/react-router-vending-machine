import React from "react";
import RamanImg from "./ramanimage.jpeg";
import Message from "./Message";
import {Link} from  "react-router-dom";
import "./Raman.css";

const Raman =()=>{
    return (
        <div className="Raman">
            <img src= {RamanImg} />
            <Message>
            <h1>Out of Stock</h1>
            <h1><Link to="/">Go back</Link></h1>
            </Message>
        </div>
    )
}
export default Raman;