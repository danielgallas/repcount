import "./App.css";
import Header from "./Components/Header";
import Points from "./Components/Points";
import ChooseExercise from "./Components/ChooseExercise";
import SetExercise from "./Components/SetExercise";
import React, { useState } from "react";

export const ToggleContext = React.createContext();

function App() {
  const [toggle, setToggle] = useState(true);
  const [workout, setWorkout] = useState("");

  return (
    <div className="grid-container">
      <ToggleContext.Provider
        value={{ toggle, setToggle, workout, setWorkout }}
      >
        <Header />
        <Points />
        {toggle ? (
          <>
            <ChooseExercise exercise={"Burpee"} />
            <ChooseExercise exercise={"Plank"} />
            <ChooseExercise exercise={"Push-up"} />
          </>
        ) : (
          <SetExercise exercise={workout} />
        )}
      </ToggleContext.Provider>
    </div>
  );
}

export default App;
