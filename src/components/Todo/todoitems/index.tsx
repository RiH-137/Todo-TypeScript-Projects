// todoitems

import React from "react";
import "./style.css";

interface TodoItemPromps{
    title:String;
}


// const todoitem: React.FC =()=>{
//     return(
//         <div>
//             <li>
//             Code</li>
//         </div>
//     )
// }


// {promps.title} => dynamic variable name

const todoitem: React.FC<TodoItemPromps> =(promps)=>{
    return (
        <li>{promps.title}</li>
    )
}


export default todoitem;