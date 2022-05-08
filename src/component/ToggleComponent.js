import React from "react";

class ToggleComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name : "Vicky",
            email : "vigneshW562@gmail.com",
            status : false
        }
        
    }
    toggleStatus=() =>{
        this.setState({status:!this.state.status})
    }
   
    render(){
        return(
            <div>
                {
                this.state.status?<div><h2>{this.state.name} {this.state.email}</h2>
                <button onClick={this.toggleStatus}>logout</button>
                </div>:<button onClick={this.toggleStatus}>login</button>
                     

                }
                </div>
        )
    }

}

export default ToggleComponent;