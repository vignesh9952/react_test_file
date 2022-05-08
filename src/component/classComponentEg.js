// import React from "react"
// class ClassComponentEg extends React.Component{
//     constructor(props){
//        super(props)
//        this.state={
//            msg:"inital",
//            loading:true
//        }
//     }
//     updateMsg=()=>{
//       this.setState({msg:"new",loading:false})
//     }
//     render(){
//       // const {prop1}=this.props
//       console.log("render")
//         return(
//             <div>
//                 <h1>Class components</h1>
//                 <h2>{this.props.prop1}</h2>
//                 <h3>{this.state.msg}</h3>
//            <button onClick={this.updateMsg}>update</button>
         
//             </div>
//         )
//     }
// }

// import React from "react"

// class classComponentEg extends React.Component{
//     constructor(props){
//         super(props)
//             this.state={
//                 name : "Vicky",
//                 msg : "initial",
//                 loading : true
//             }
//     }
//     updateState = () =>{
//         this.setState({name : "frank", msg : "new", loading : false})
//     }

//     render(){
//         return(
//         <div>
//             <h1>component</h1>
//             <h2>{this.props.prop1}</h2>
//             <h2>{this.state.name}</h2>
//             <h3>{this.state.msg}</h3>
//             <button onClick={this.updateState}>update</button>
//         </div>
//         )
//     }


// }  
// export default classComponentEg