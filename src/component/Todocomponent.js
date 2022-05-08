import React, { useEffect, useState } from "react";
import PendingComponent from "./pendingComponent";
import CompletedComponent from "./CompletedComponent";
import BinComponent from "./bincomponent";
import "./todocomponent.css";

// class TodoComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       todos: [],
//     };
//   }

//   static getDerivedStateFromProps(props, state) {
//     return { todos: props.props1 };
//   }

//   // componentDidMount(){
//   //   fetch("https://json  placeholder.typicode.com/todos").then((res)=>
//   //   {return res.json()}).then((res)=>this.setState({todos:res})).catch((err)=>
//   //   console.log("error found"))
//   // }

//   getCompletionStatus = () => {
//     const arr = this.state.todos.filter(
//       (item) => item.completed === true && item.active === true
//     );
//     return arr;
//   };

//   getPendingStatus = () => {
//     console.log(this.state.todos);
//     const arr = this.state.todos.filter((item) => item.completed === false);
//     return arr;
//   };

//   trash = () => {
//     const obj = this.state.todos.filter((item) => item.active === false);
//     return obj;
//   };

//   changeComplitedStatus = (todoID) => {
//     console.log(todoID);
//     const temp = [...this.state.todos];
//     const arr = temp.find((item) => todoID === item.id);
//     arr.completed = !arr.completed;
//     console.log(arr);
//     this.setState({ todos: temp });
//   };

//   changeActiveStatus = (todoID) => {
//     console.log(todoID);
//     const temp = [...this.state.todos];
//     const arr = temp.find((item) => todoID === item.id);
//     arr.active = !arr.active;
//     this.setState({ todos: temp });
//   };

//   //  componentDidUpdate(){
//   //    console.log("tis is did update")
//   //  }

//   render() {
//     console.log("todo method");
//     return (
//       <div className="body">
//         <h1>Todo App</h1>
//         <PendingComponent
//           prop1={this.getPendingStatus()}
//           prop2={this.changeComplitedStatus}
//         ></PendingComponent>
//         <CompletedComponent
//           prop3={this.getCompletionStatus()}
//           prop4={this.changeActiveStatus}
//         ></CompletedComponent>
//         <BinComponent
//           prop5={this.trash()}
//           prop6={this.changeActiveStatus}
//         ></BinComponent>
//       </div>
//     );
//   }
// }

// export default TodoComponent;
//class component

const TodoComponent = (props) => {
  const [todos, settodos] = useState([]);
  // static getDerivedStateFromProps(props, state) {
  //   return { todos: props.props1 };
  // }
  useEffect(() => {
    settodos(props.props1);
  }, []);

  const getCompletionStatus = () => {
    const arr = todos.filter(
      (item) => item.completed === true && item.active === true
    );
    return arr;
  };

  const getPendingStatus = () => {
    console.log(todos);
    const arr = todos.filter((item) => item.completed === false);
    return arr;
  };

  const trash = () => {
    const obj = todos.filter((item) => item.active === false);
    return obj;
  };

  const changeComplitedStatus = (todoID) => {
    console.log(todoID);
    const temp = [...todos];
    const arr = temp.find((item) => todoID === item.id);
    arr.completed = !arr.completed;
    console.log(arr);
    settodos(temp);
  };

  const changeActiveStatus = (todoID) => {
    console.log(todoID);
    const temp = [...todos];
    const arr = temp.find((item) => todoID === item.id);
    arr.active = !arr.active;
    settodos(temp);
  };

  //  componentDidUpdate(){
  //    console.log("tis is did update")
  //  }

  console.log("todo method");
  return (
    <div className="body">
      <h1>Todo App</h1>
      <PendingComponent
        prop1={getPendingStatus()}
        prop2={changeComplitedStatus}
      ></PendingComponent>
      <CompletedComponent
        prop3={getCompletionStatus()}
        prop4={changeActiveStatus}
      ></CompletedComponent>
      <BinComponent prop5={trash()} prop6={changeActiveStatus}></BinComponent>
    </div>
  );
};

export default TodoComponent;
