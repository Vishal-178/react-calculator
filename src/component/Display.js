import React from "react";
export default function Display(props) {
  // display total and values use to get the total
  return (
    <div className="display-box">
      {/* values and symbols use to get Total */}
      <h4>{props.value}</h4>
      {/* total */}
      <h1>{props.total}</h1>
    </div>
  );
}
