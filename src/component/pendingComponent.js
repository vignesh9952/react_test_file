// import _isEqual from "lodash/isEqual";
import React from "react";
const PendingComponent = (props) => {
  //  shouldComponentUpdate(nextprops){
  //     if(_isEqual(nextprops.prop1,this.props.prop)){
  //         return false
  //     }
  //     if( !(_isEqual(nextprops.prop5,this.props.prop5))){
  //         return true
  //     }
  //     else{
  //       return true
  //     }
  // }

  return (
    <div>
      {console.log("this is pending component")}
      <h1>Pending Tasks are</h1>
      {props.prop1.map((trash) => (
        <div>
          <h3>{trash.title}</h3>
          <button onClick={() => props.prop2(trash.id)}>done</button>
        </div>
      ))}
    </div>
  );
};
export default React.memo(PendingComponent);
