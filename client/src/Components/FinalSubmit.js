import React from "react";

const FinalSubmit = ({ exercise }) => {
  const today = new Date();
  const formattedDate = today.toDateString();
  const todayData = { date: formattedDate, reps: exercise };

  return (
    <div className="grid-item-button">
      <div className="flex-container" onClick={() => console.log(todayData)}>
        FinalSubmit {todayData.date}
      </div>
    </div>
  );
};

export default FinalSubmit;
