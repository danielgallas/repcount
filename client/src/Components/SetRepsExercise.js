import React, { useContext, useState, useEffect } from "react";
import { ToggleContext } from "../App";

const SetRepsExercise = ({ exercise }) => {
  const { toggle, setToggle } = useContext(ToggleContext);
  const { workout, setWorkout } = useContext(ToggleContext);
  const [reps, setReps] = useState(workout.reps);

  useEffect(() => {
    workout.reps = reps;
    if (reps < 0) {
      setReps(0);
    }
  }, [reps, workout]);

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
            Submit: {reps} {workout.type}
          </div>
        </div>
      </div>
    </>
  );
};

export default SetRepsExercise;
