import React, { useContext } from "react";
import { Daniel } from "../App";

const Button = ({ exercise }) => {
  const { toggle, setToggle } = useContext(Daniel);

  return (
    <div className="grid-item-button">
      <div className="flex-container-button" onClick={() => setToggle(!toggle)}>
        <div className="flex-item-button-name">{exercise}</div>
        <div className="flex-item-button-logo">Logo</div>
      </div>
    </div>
  );
};

export default Button;
