import React, { useState } from "react";
import axios from "axios";

const CalculatePoints = () => {
  const [burpee, setBurpee] = useState(0);
  const [pushup, setPushup] = useState(0);
  const [plank, setPlank] = useState(0);
  const [dumbbell, setDumbbell] = useState(0);

  const url = "http://localhost:8000/api/v1/reps";
  const pastWeek = [];
  const days = [0, 1, 2, 3, 4, 5, 6];

  days.map(async (item) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    today.setDate(today.getDate() - item);
    const formattedDate = today.toISOString("YYYY-MM-DD");
    const url2 = url + "/" + formattedDate;
    const grab = await axios.get(url2);
    pastWeek.push(grab.data);
  });

  console.log(pastWeek);

  const addReps = (reps) => {
    setBurpee(0);
    setPushup(0);
    setPlank(0);
    setDumbbell(0);
    const nonEmptyReps = reps.filter((item) => item !== "");
    nonEmptyReps.map((exercise) => {
      exercise.reps.map((item) => {
        if (item.type === "burpee") {
          setBurpee(burpee + item.reps);
        }
        if (item.type === "push-up") {
          setPushup(pushup + item.reps);
        }
        if (item.type === "plank") {
          setPlank(plank + item.reps);
        }
        if (item.type === "dumbbell") {
          setDumbbell(dumbbell + item.reps);
        }
        return 0;
      });
      //   console.log(item.reps);
      console.log("Burpees: " + burpee);
      console.log("Push-Up: " + pushup);
      console.log("Plank: " + plank);
      console.log("Dumbbell: " + dumbbell);
      return 0;
    });
  };

  return (
    <div className="grid-item-button">
      <div className="flex-container" onClick={() => addReps(pastWeek)}>
        CalculatePoints:
        {burpee < 1 ? "" : "Burpee:" + burpee}{" "}
        {pushup < 1 ? "" : "Push-up:" + pushup}
        {plank < 1 ? "" : "Plank:" + plank}
        {dumbbell < 1 ? "" : "Dumbbell:" + dumbbell}
      </div>
    </div>
  );
};

export default CalculatePoints;
