import "./App.css";
import Header from "./Components/Header";
import Points from "./Components/Points";
import Button from "./Components/Button";
import React, { useState } from "react";

export const Daniel = React.createContext();

function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="grid-container">
      <Daniel.Provider value={{ toggle, setToggle }}>
        <Header />
        <Points />
        {toggle ? (
          <>
            <Button exercise={"Burpee"} />
            <Button exercise={"Plank"} />
            <Button exercise={"Push-up"} />
          </>
        ) : (
          <Button exercise={"Plank"} />
        )}
      </Daniel.Provider>
    </div>
  );
}

export default App;
