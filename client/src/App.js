import "./App.css";
import Header from "./Components/Header";
import Points from "./Components/Points";
import ChooseExercise from "./Components/ChooseExercise";
import SetRepsExercise from "./Components/SetRepsExercise";
import FinalSubmit from "./Components/FinalSubmit";
import CalculatePoints from "./Components/CalculatePoints";
import { Exercises } from "./Data/Exercises";
import React, { useState } from "react";

export const ToggleContext = React.createContext();

function App() {
  const [toggle, setToggle] = useState(true);
  const [workout, setWorkout] = useState([]);

  return (
    <div className="grid-container">
      <ToggleContext.Provider
        value={{ toggle, setToggle, workout, setWorkout }}
      >
        <Header />
        <Points />
        {toggle ? (
          <>
            {Exercises.map((item, index) => (
              <ChooseExercise key={index} exercise={item} />
            ))}
          </>
        ) : (
          <SetRepsExercise exercise={workout} />
        )}
        <FinalSubmit exercise={Exercises} />
        <CalculatePoints />
      </ToggleContext.Provider>
    </div>
  );
}

export default App;
