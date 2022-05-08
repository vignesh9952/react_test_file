import React from "react";

class LifeCycleMethods extends React.Component{
    constructor(props){
        super(props)
        this.state={
            msg:"initial",
            name:"vicky",       
            count:0
            
        }
        console.log("constructor")
    }

    static getDerivedStateFromProps(props,state){
        console.log("this is ds")
      return {msg:props.props1
    }
    }

    // componentDidMount(){
    //   console.log("didmount")
    // // }
    // componentDidUpdate(back,prevstate){
    //     console.log(back.props1) 
    //     console.log(prevstate.count)
        
    //     if(back.props1 !==this.props.props1){
    //         console.log("state is changing")
    //      }
    //      if(prevstate.count !==this.state.count){
    //          console.log("props is changing")
    //      }
    //      if((prevstate.count === this.state.count)&&(back.props1 ===this.props.props1)){
    //          console.log("this is simply re-rendering")
    //      }
    //     console.log("componentdidupdate")
    // }

    shouldComponentUpdate(nextprops,nextstate){
        if((nextprops.props1 !== this.props.props1) ||(nextstate.count !== this.state.count)){
            return true
        }
        if((nextprops.props1 === this.props.props1) ||(nextstate.count === this.state.count)){
            return false
        } 
    }
    addCount=()=>{
        this.setState({count:this.state.count+0})
    }

   render(){
       console.log("render")
       return(
           <div>
               <h1>lifeCycleMethods</h1>
               <h3>{this.state.msg}</h3>
               <h3>{this.state.count }</h3>
              
               <button onClick={this.addCount}>add</button>
           </div>
       )
   }

}
export default LifeCycleMethods