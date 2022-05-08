import React from "react";
const CompletedComponent = (props) => {
  return (
    <div>
      {console.log("this is completed")}
      <h1>completed</h1>
      {props.prop3.map((item) => (
        <div>
          <h3 key={item}>{item.title}</h3>
          <button onClick={() => props.prop4(item.id)}>done</button>
        </div>
      ))}
    </div>
  );
};

export default React.memo(CompletedComponent);
