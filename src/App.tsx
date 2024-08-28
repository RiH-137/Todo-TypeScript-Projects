import React from "react";


import TodoFunction from "./components/Todo";
import { title } from "process";


import Counter from "./components/Counter";

const myTodoItems=[
    {
        id:1,
        title:"i need to finish it."
    },

    {
        id:2,
        title:"ok lets go"
    }
]






const App: React.FC =()=>{
    return(

        // promps--> style={{}}

        // <div className="abc" style={{border: "1px solid red"}}>Todo Page   
        // <div onClick={
        //     () => {alert("You have clicked")}
        // }>         



        //     <TodoFunction items={myTodoItems}/>
        // </div>        </div>


        <div>
            <TodoFunction items={myTodoItems} />
            <Counter/>
        </div>



    )




}

export default App;