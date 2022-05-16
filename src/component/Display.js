import React from "react";
export default function Display(props) {
  //   console.log(props);
  return (
    <div className="display-box">
      <h4>{props.value}</h4>
      <h1>{props.total}</h1>
    </div>
  );
}
