import React from "react";

const Points = () => {
  return (
    <div className="grid-item-points flex-container">
      {/* <div className="flex-item-1">Top</div> */}
      <div className="flex-item-points">
        <div className="text">
          <p>73</p>
          <span>points</span>
        </div>
      </div>
      <div className="flex-item-footer">7 earned today</div>
    </div>
  );
};

export default Points;
