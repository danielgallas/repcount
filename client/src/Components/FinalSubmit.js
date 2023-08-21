import React from "react";
import axios from "axios";

const FinalSubmit = ({ exercise }) => {
  const today = new Date();
  const formattedDate = today.toDateString();
  const todayData = { date: formattedDate, reps: exercise };

  return (
    <div className="grid-item-button">
      <div
        className="flex-container"
        onClick={() =>
          axios.post("http://localhost:8000/api/v1/reps", todayData)
        }
      >
        FinalSubmit {todayData.date}
      </div>
    </div>
  );
};

export default FinalSubmit;
