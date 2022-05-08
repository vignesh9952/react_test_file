import axios from "axios";
import React, { useState } from "react";

// class ReactAssign extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={
//              todos :[]
//         }
//     }

//     // componentDidMount(){
//     //   fetch("https://jsonplaceholder.typicode.com/todos").then((res)=>
//     //   {return res.json()}).then((res)=>this.setState({todos:res})).catch((err)=>
//     //   console.log("error found"))
//     // }

//     callApi= () =>{
//           fetch("https://jsonplaceholder.typicode.com/todos").then((res)=>
//           {return res.json()}).then((res)=>this.setState({todos:res})).catch((err)=>
//           console.log("error found"))
//         }

//     render(){
//         return(
//             <div>
//                 <h1>NewApp</h1>
//                 <button onClick={()=>this.callApi()}>call</button>
//                 {
//                     this.state.todos.map((item) =>
//                     <div>
//                         <h3>{item.id}</h3>
//                         <h3>{item.title}</h3>
//                     </div>)
//                 }
//             </div>
//         )
//     }
// }

// export default ReactAssign

const ReactAssign = () => {
  const [todos, setTodos] = useState([]);

  const callApi = (e) => {
    e.preventDefault();
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setTodos(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>NewApp</h1>
      {console.log(todos)}
      <button type="button" onClick={callApi}>
        call
      </button>
      {/* {todos.map((item) => {
        <div>
          <h2>{item.id}</h2>
        </div>;
      })} */}
      {todos.map((data) => {
        <h1>{data.title}</h1>;
      })}
    </div>
  );
};

export default ReactAssign;
