import { useState } from "react";
import "./App.css";
import { DrinkChoice } from "./components/DrinkChoice";
import { DrinkSearch } from "./components/DrinkSearch";
import { Heading } from "@chakra-ui/react";

export const App = () => {
  const greeting = "Welcome!";
  const [userDrink, setUserDrink] = useState();

  return (
    <div className="app">
      {userDrink ? (
        <>
          <DrinkChoice drink={userDrink} onClick={setUserDrink} />
        </>
      ) : (
        <>
          <Heading mb={8} fontSize={"2xl"} color={"blue.200"}>
            {greeting}
          </Heading>
          <DrinkSearch onClick={setUserDrink} />
        </>
      )}
    </div>
  );
};
