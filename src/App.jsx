import { useState } from "react";
import "./App.css";
import { DrinkChoice } from "./components/DrinkChoice";
import { DrinkSearch } from "./components/DrinkSearch";

export const App = () => {
  const greeting = "Welcome!";
  const [userDrink, setUserDrink] = useState();

  return (
    <div className="app">
      {userDrink ? (
        <DrinkChoice drink={userDrink} onClick={setUserDrink} />
      ) : (
        <>
          <h1>{greeting}</h1>
          <DrinkSearch onClick={setUserDrink} />
        </>
      )}
    </div>
  );
};
