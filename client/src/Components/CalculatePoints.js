import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ToggleContext } from "../App";

const CalculatePoints = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { setPoints } = useContext(ToggleContext);

  let burpee = 0;
  let pushup = 0;
  let plank = 0;
  let dumbbell = 0;
  let total = 0;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const pastWeek = [];
      const days = [0, 1, 2, 3, 4, 5, 6];

      days.map((dayData) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        today.setDate(today.getDate() - dayData);
        const formattedDate = today.toISOString("YYYY-MM-DD");
        const url2 = "http://localhost:8000/api/v1/reps/" + formattedDate;
        axios
          .get(url2)
          .then((item) => {
            pastWeek.push(item.data);
            setData(pastWeek);
          })
          .catch((error) => console.lot(error))
          .finally(setLoading(false));
        return 0;
      });
      return 0;
    };
    fetchData();
  }, []);

  const calcTotalReps = (prop) => {
    console.log("CALCULATING TOTAL REPS");
    burpee = 0;
    pushup = 0;
    plank = 0;
    dumbbell = 0;
    const nonEmptyReps = prop.filter((item) => item !== "");
    nonEmptyReps.map((item) => {
      item.reps.map((repPoint) => {
        if (repPoint.type === "burpee") {
          burpee = burpee + repPoint.reps;
        }
        if (repPoint.type === "push-up") {
          pushup = pushup + repPoint.reps;
        }
        if (repPoint.type === "plank") {
          plank = plank + repPoint.reps;
        }
        if (repPoint.type === "dumbbell") {
          dumbbell = dumbbell + repPoint.reps;
        }
        return 0;
      });
      return 0;
    });
    console.log(prop);
    total = burpee + pushup + plank + dumbbell;
    console.log("burpee: " + burpee);
    console.log("push-up: " + pushup);
    console.log("plank: " + plank);
    console.log("dumbbell: " + dumbbell);
    setPoints(total);
    console.log(total);
  };

  if (loading) {
    return (
      <div className="grid-item-button">
        <div className="flex-container" onClick={() => console.log(data)}>
          Loading
        </div>
      </div>
    );
  } else {
    return (
      <div className="grid-item-button">
        <div className="flex-container" onClick={() => calcTotalReps(data)}>
          CalculatePoints
        </div>
      </div>
    );
  }
};

export default CalculatePoints;
