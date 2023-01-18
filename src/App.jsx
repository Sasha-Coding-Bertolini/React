import "./App.css";
import { DrinkButtons } from "./components/DrinkButtons";
import { DrinkChoice } from "./components/DrinkChoice";
import { coffee, tea } from "./components/utils/data";

export const App = () => {
  const greeting = "Welcome!";
  const userDrink = tea;

  return (
    <div className="app">
      <h1>{greeting}</h1>

      <DrinkButtons drinkOne={tea.name} drinkTwo={coffee.name} />
      <DrinkChoice drink={userDrink} />
    </div>
  );
};
