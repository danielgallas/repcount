import React, { useContext } from "react";
import { ToggleContext } from "../App";

const ChooseExercise = ({ exercise }) => {
  const { toggle, setToggle } = useContext(ToggleContext);
  const { setWorkout } = useContext(ToggleContext);

  return (
    <>
      <div className="grid-item-button">
        <div
          className="flex-container-button"
          onClick={() => {
            setWorkout(exercise);
            setToggle(!toggle);
          }}
        >
          <div className="flex-item-button-name">{exercise.type}</div>
          <div className="flex-item-button-logo">{exercise.reps}</div>
        </div>
      </div>
    </>
  );
};

export default ChooseExercise;
