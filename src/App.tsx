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
            <Counter/>
            <Counter/>
            <Counter/>
            {/* All components have its own status. As there are 4 counters but all will not increament 
            if i tap only one component. Increament is happened for the one whose button is
             just clicked. Re-rendering is only possible for a particular counter.          */}
        </div>



    )




}

export default App;