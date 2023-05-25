import React,{useState} from "react";
import {Link} from "react-router-dom";
import Message from "./Message";
import chipsImg from './chipsImg.jpeg';
import './Chip.css';


const Chip =()=>{
    const [bags,setBags]= useState([]);
   
    const handleClick=()=>{
        const x = window.innerWidth * Math.random();
         const y = window.innerHeight * Math.random();
        setBags(prevBags=>[...prevBags,{x,y}])

    }
    const b = bags.map((bag, i) => (
        <img
          key={i}
          src={chipsImg}
          className="bag"
          style={{ top: `${bag.y}px`, left: `${bag.x}px` }}
          
        />
      ));
    return (
        <div className="Chips">
          
            <Message>
            <h1>How mang bags would you like?</h1>
            <h1>bags:{bags.length}</h1>
            <button onClick={handleClick}>Add</button>
            <h3><Link to="/">Go back</Link></h3>
            </Message>
            {b}
        </div>
    )
}
export default Chip;