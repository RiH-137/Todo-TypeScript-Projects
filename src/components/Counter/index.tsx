import React from "react";
import { useState } from "react";
import "./style.css";
import { log } from "node:console";

const Counter: React.FC=(promps)=>{
    // let counter=2;                          
    // we have not created this using useState thats why react will not re-render the component
    // import React, {useState} from "react";
    // const [counter, setCounter]=useState(0); means counter is a state variable and setCounter is a function to update the state variable
    

    const handleIncrement=()=>{
        counter++;
        console.log("counter", counter)
    };





    return (
        <div className="counter-container">
            <h3>{counter}</h3>
                {/* <button onClick={(e)=>counter++} style={{background:"lightgreen"}}>Inc</button> */}
                
                <button onClick={handleIncrement} style={{background:"lightgreen"}}>Inc</button>
                
                <button onClick={(e)=>counter--} style={{background:"tomato"}}>Dec</button>
            
        </div>
    );
};
export default Counter;






