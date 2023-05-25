import React,{useEffect, useState} from "react";
import tea from './tea.png'
import coffee from './coffee.png'
import water from './water.png'
import Message from "./Message";
import {Link} from "react-router-dom";

const Drink =()=>{
    const INITIAL_STATE=[
        {id:1, "name":"green tea", "img":`${tea}`},
        {id:2, name:"coffee", img:`${coffee}`},
        {id:3, name:"water", img:`${water}`}
    ];
        
    const [count,setCount]=useState(0)
    const [items,setItems]= useState([]);
   
    const handleClick=()=>{
        const x = window.innerWidth * Math.random();
         const y = window.innerHeight * Math.random();
        setItems(prevItems=>[...prevItems,{x,y}])
        setCount(count=>count+1)

    }
    useEffect(()=>{
        
    })
    const it = INITIAL_STATE.map((item, i) => (
        <img
          key={i}
          src={item.img}
          className="item"
          style={{ top: `${item.y}px`, left: `${item.x}px` }}
          
        />
      ));
        
   
    return (
        <div className="Drink">
          
            <Message>
            <h1>How many would you like?</h1>
            <h1>Item:{count}</h1>
            <button onClick={handleClick}>Add</button>
            <h3><Link to="/">Go back</Link></h3>
            </Message>
            {it}
        </div>
    )
}
export default Drink;