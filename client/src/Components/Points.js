import React, { useContext } from "react";
import { ToggleContext } from "../App";

const Points = () => {
  const { points } = useContext(ToggleContext);

  return (
    <div className="grid-item-points flex-container">
      <div className="flex-item-points">
        <div className="text">
          <p>{points}</p>
          <span>points</span>
        </div>
      </div>
      <div className="flex-item-footer">7 earned today</div>
    </div>
  );
};

export default Points;
