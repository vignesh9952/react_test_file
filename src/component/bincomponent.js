import React from "react";
// import _isEqual from "lodash/isEqual";
// class BinComponent extends React.Component{
//     constructor(props){
//         super(props)
//     }

//     shouldComponentUpdate(nextprops){
//       if(_isEqual(nextprops.prop5,this.props.prop5)){
//           return false
//       }
//       // if( !(_isEqual(nextprops.prop5,this.props.prop5))){
//       //     return true
//       // }
//       else{
//         return true
//       }
//   }

//     render(){
//         console.log("bin component")
//         return(
//             <div>

//                 <h1>Trash Component</h1>
//                 {
//                     this.props.prop5.map((item)=>(
//                         <div>
//                         <h3>{item.title}</h3>
//                         <button onClick={()=>this.props.prop6(item.id)}>restore</button>

//                         </div>
//                     ))
//                 }
//             </div>

//         )
//     }
// }
// export default BinComponent

const BinComponent = (props) => {
  return (
    <div>
      {console.log("this is bin")}

      <h2>bincomponent</h2>
      {props.prop5.map((item) => (
        <div>
          <h3>{item.title}</h3>
          <button onClick={() => props.prop6(item.id)}>restore</button>
        </div>
      ))}
    </div>
  );
};
export default React.memo(BinComponent);
