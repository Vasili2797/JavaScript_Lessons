import React, { useState } from "react";
import "./CountButton.css";

const CountButton = (props) => {
  const [currentCount, setCurrentCount] = useState(0);

  const handleClick = () => {
    setCurrentCount(currentCount + props.incrementBy);
    // console.log(currentCount);
  };

  const divStyle = {
    background: props.buttonColor,
    fontWeight: "Bold",
    color: "white",
    // border: "1px solid black",
    borderRadius: props.borderRadius,
  };

  return (
    <div>
      <button style={divStyle} onClick={handleClick}>
        +{props.incrementBy}
      </button>
      <div className="countDisplay">{currentCount}</div>
    </div>
  );
};

export default CountButton;
