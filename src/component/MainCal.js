import React, { useState } from "react";
import AllCalButtons from "./AllCalButtons";
import Display from "./Display";

export default function MainCal() {
  const [value, setValue] = useState("");
  const [total, setTotal] = useState("0");
  const [math, setMath] = useState(0);
  const [prevValue, setPrevValue] = useState("");
  const [digit, setDigit] = useState("");
  const [noDisplay, setNoDisplay] = useState(true);
  const [afterEqual, setAfterEqual] = useState(false);
  const symbol = ["+", "-", "/", "*", "=", "%", "b", "c"];
  const worker = ["+", "-", "/", "*", "%"];
  const cal = () => {
    if (math === "+") {
      setTotal(parseFloat(total) + parseFloat(digit));
    } else if (math === "-") {
      setTotal(digit - total);
    } else if (math === "/") {
      setTotal(digit / total);
    } else if (math === "*") {
      setTotal(digit * total);
    } else if (math === "%") {
      setTotal(digit % total);
    }
  };
  const reset = () => {
    setTotal("0");
    setDigit("");
    setMath("");
    setValue("");
    setPrevValue("");
    setNoDisplay(true);
  };
  const back = () => {
    setTotal(total.slice(0, -1));
  };
  const equal = () => {
    setAfterEqual(true);
  };
  const clickValue = (num) => {
    if (afterEqual) {
      setAfterEqual(false);
      return reset();
    }
    if (symbol.includes(num)) {
      if (num === "c") {
        return reset();
      }
      if (num === "b") {
        return back();
      }
      if (math === "" && total === "0") {
        return;
      }
      if (math === "" && worker.includes(num)) {
        setPrevValue(num);
        setMath(num);
        setDigit(total);
        setValue((current) => current + total + num);
        setNoDisplay(true);
      } else if (worker.includes(prevValue) && worker.includes(num)) {
        setMath(num);
        setPrevValue(num);
        setValue(value.slice(0, -1));
        setValue((current) => current + num);
        setNoDisplay(true);
      } else if (num === "=") {
        setValue((current) => current + total + num);
        cal();
        setMath(num);
        equal();
      } else {
        setValue((current) => current + total + num);
        cal();
        setMath(num);
        setPrevValue(num);
        setNoDisplay(true);
      }
    } else {
      if (noDisplay) {
        setDigit(total);
        setTotal("");
        setNoDisplay(false);
      }
      setPrevValue(num);
      setTotal((current) => current + num);
    }
  };
  return (
    <div className="mainCal">
      <Display value={value} total={total} />
      <AllCalButtons clickValue={clickValue} />
    </div>
  );
}
