import React from "react";
import { useState } from "react";
import "./style.css";
import { log } from "node:console";

const Counter: React.FC=(promps)=>{
    // let counter=2;                          
    // we have not created this using useState thats why react will not re-render the component
    // import React, {useState} from "react";
    // const [counter, setCounter]=useState(0); means counter is a state variable and setCounter is a function to update the state variable

    //useState is a hook which is used to create a state variable in functional component
    // useEffect is a hook which is used to perform side effects in functional component
    // fn is a function to update the state variable

    // let [counter, fn]=useState(0);  
    // console.log("counter", counter)
    

    // const handleIncrement=()=>{
    //     fn(20);
    // };

    let [counter, setCounter]=useState<number>(0);
    console.log("Re-Render new value is ", counter);

    const handleIncrement=()=>{

        setCounter(counter+1);

    };

    const handleDecrement=()=>{
        if(counter===0){
            return; 
        }
        setCounter(counter-1);
    };





    return (
        <div className="counter-container">
            <h3>{counter}</h3>
                {/* <button onClick={(e)=>counter++} style={{background:"lightgreen"}}>Inc</button> */}
                
                <button onClick={handleIncrement} style={{background:"lightgreen"}}>Inc</button>
                
                <button onClick={handleDecrement} style={{background:"tomato"}}>Dec</button>
            
        </div>
    );
};
export default Counter;






