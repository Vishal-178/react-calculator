import React from "react";

export default function AllCalButtons(props) {
  const totalMath = (data) => {
    props.clickValue(data);
  };
  return (
    <div className="allCalButton">
      <button className="calButtonColor" onClick={() => totalMath("c")}>
        C
      </button>
      <button className="calButtonColor" onClick={() => totalMath("b")}>
        B
      </button>
      <button className="calButtonColor" onClick={() => totalMath("%")}>
        %
      </button>
      <button className="calButtonColor" onClick={() => totalMath("/")}>
        ÷
      </button>
      <button className="calButton" onClick={() => totalMath("7")}>
        7
      </button>
      <button className="calButton" onClick={() => totalMath("8")}>
        8
      </button>
      <button className="calButton" onClick={() => totalMath("9")}>
        9
      </button>
      <button className="calButtonColor" onClick={() => totalMath("*")}>
        X
      </button>
      <button className="calButton" onClick={() => totalMath("4")}>
        4
      </button>
      <button className="calButton" onClick={() => totalMath("5")}>
        5
      </button>
      <button className="calButton" onClick={() => totalMath("6")}>
        6
      </button>
      <button className="calButtonColor" onClick={() => totalMath("-")}>
        -
      </button>
      <button className="calButton" onClick={() => totalMath("1")}>
        1
      </button>
      <button className="calButton" onClick={() => totalMath("2")}>
        2
      </button>
      <button className="calButton" onClick={() => totalMath("3")}>
        3
      </button>
      <button className="calButtonColor" onClick={() => totalMath("+")}>
        +
      </button>
      <button
        className="calButton"
        onClick={() => totalMath("0")}
        style={{ width: "200px" }}
      >
        0
      </button>
      <button className="calButton" onClick={() => totalMath(".")}>
        .
      </button>
      <button className="calButtonColor" onClick={() => totalMath("=")}>
        =
      </button>
    </div>
  );
}
