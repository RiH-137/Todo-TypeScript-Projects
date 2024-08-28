import React from "react";

import TodoItem from "./todoitems";

import "./style.css";

interface iTodoItem{
    id: number;
    title: string;
}

interface Todopromps{
    items:iTodoItem[];                      // array
}




const TodoFunction: React.FC<Todopromps> =(promps)=>{
    return(
        <div className="todo-container">
            <ol>
                {promps.items.map((item)=>
                <TodoItem key={item.id} title={item.title}   />             // item.id; item.tile from the above interface
                )}
            </ol>
        </div>
    )
};


export default TodoFunction;