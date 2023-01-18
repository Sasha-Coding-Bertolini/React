import "./App.css";
import { DrinkButtons } from "./components/DrinkButtons";

export const App = () => {
  const greeting = "Welcome!";
  const description = <p>This app is going to change your life.</p>;

  return (
    <div className="app">
      <h1>{greeting}</h1>
      {description}
      <DrinkButtons />
    </div>
  );
};
