import React from "react"
class BinComponent extends React.Component{
    constructor(prcops){
        super(props)
    }

    shouldComponentUpdate(props){
        if(nextprop.props1!==this.props.prop1){
            return true
        }
        if(nextprop.props1!==this.props.prop1){
            return false
        }
    }

    render(){
        console.log("bin component")
        return(
            
            <div>
             
                <h1>Trash Component</h1>
                {
                    this.props.prop1.map((item)=>(
                        <div>
                        <h3>{item.title}</h3>
                        <button onClick={()=>this.props.prop2(item.id)}>restore</button>
                        </div>
                    ))
                }
            </div>

        )
    }
}
export default BinComponent