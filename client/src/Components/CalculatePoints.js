import React from "react";
import FetchData from "../Utils/FetchData";

let burpee = 0;
let pushup = 0;
let plank = 0;
let dumbbell = 0;

const CalculatePoints = () => {
  const addReps = (reps) => {
    burpee = 0;
    pushup = 0;
    plank = 0;
    dumbbell = 0;
    const nonEmptyReps = reps.filter((item) => item !== "");
    nonEmptyReps.map((exercise) => {
      exercise.reps.map((item) => {
        if (item.type === "burpee") {
          burpee = burpee + item.reps;
        }
        if (item.type === "push-up") {
          pushup = pushup + item.reps;
        }
        if (item.type === "plank") {
          plank = plank + item.reps;
        }
        if (item.type === "dumbbell") {
          dumbbell = dumbbell + item.reps;
        }
        return 0;
      });
      return 0;
    });
    console.log("burpee: " + burpee);
    console.log("pushup: " + pushup);
    console.log("plank: " + plank);
    console.log("dumbbell: " + dumbbell);
  };

  const pastWeek = FetchData();

  return (
    <div className="grid-item-button">
      <div className="flex-container" onClick={() => addReps(pastWeek)}>
        CalculatePoints
      </div>
    </div>
  );
};

export default CalculatePoints;
