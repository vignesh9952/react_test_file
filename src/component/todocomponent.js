import React from "react"
import pendingComponent from "./pendingcomponent"
import completedComponent from "./completedComponent"


const tododata=[
    {
        "id": 1,
        "title": "AAA",
        "completed": false
      },
      {
        "id": 2,
        "title": "BBB",
        "completed": true
      },
      {
        "id": 3,
        "title": "CCC",
        "completed": false
      },
      {
        "id": 4,
        "title": "DDD",
        "completed": true
      },
      {
        "id": 5,
        "title": "EEE",
        "completed": false
      },
]
class TodoComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            todos:tododata
        }
    }

    getCompletionStatus = () =>{
     const arr = this.state.todos.filter((item) =>
      item.completed===true)
      console.log(arr)
    }

    getPendingStatus =() =>{
      const arr = this.state.todos.filter((item) =>
       item.completed===false)
      console.log(arr)
     }
   
    render(){
      
        return(
            <div>
                 <h1>Todo App</h1>
                 <pendingComponent></pendingComponent>
                 <completedComponent></completedComponent>
                 <button onClick={this.getCompletionStatus}>click</button>
                 <button onClick={this.getPendingStatus}>click</button>
            </div>  
                 
              
        )
    }
}

export default TodoComponent