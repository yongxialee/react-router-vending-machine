import React from "react";
import { Link} from "react-router-dom";
import Message from "./Message";
import vendingMachineImg from "./VendingMachine.png"
import "./VendingMachine.css";

// const vendingMachineImg="https://static.wikia.nocookie.net/to-aru-majutsu-no-index/images/2/26/Jihanki.png/revision/latest?cb=20120504161315"

const VendingMachine =()=>{
    // const vendingMachineImg="https://static.wikia.nocookie.net/to-aru-majutsu-no-index/images/2/26/Jihanki.png/revision/latest?cb=20120504161315";
    return (
    <div
      className="VendingMachine"
      style={{ backgroundImage: `url(${vendingMachineImg})` }}>
     
      <Message>
        <h1>hello i am a vending machine. what would you like to eat?</h1>
      </Message>
      <Message>
        <h1><Link to="/drink">Drink</Link></h1>
        <h1><Link to="/chip">Chips</Link></h1>
        <h1><Link to="/raman">Raman</Link></h1>
      </Message>
     
    </div>
  );
    
}

 


export default VendingMachine;
