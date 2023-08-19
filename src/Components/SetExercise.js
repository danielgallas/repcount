import React, { useContext, useState } from "react";
import { ToggleContext } from "../App";

const SetExercise = ({ exercise }) => {
  const { toggle, setToggle } = useContext(ToggleContext);
  const { workout, setWorkout } = useContext(ToggleContext);
  const [reps, setReps] = useState(0);

  return (
    <>
      <div className="grid-item-button setexercise">
        <div className="flex-container-button">
          <div
            className="flex-item-setexercise-minus"
            onClick={() => setReps(reps - 5)}
          >
            -
          </div>
          <div
            className="flex-item-setexercise-plus"
            onClick={() => setReps(reps + 5)}
          >
            +
          </div>
        </div>
      </div>
      <div className="grid-item-button setexercise">
        <div
          className="flex-container-button"
          onClick={() => {
            setWorkout(exercise);
            setToggle(!toggle);
          }}
        >
          <div className="flex-item-setexercise-submit">
            Submit: {reps} {workout}
          </div>
        </div>
      </div>
    </>
  );
};

export default SetExercise;
