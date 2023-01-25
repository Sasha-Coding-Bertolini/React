import { useState } from "react";
import { DrinkItems } from "./DrinkItems";
import { TextInput } from "./UI/Input";
import { availableDrinks } from "./utils/data";

export const DrinkSearch = ({ onClick }) => {
  const [searchField, setSearchField] = useState("");

  const handleChange = (event) => setSearchField(event.target.value);

  const matchedDrinks = availableDrinks.filter((drink) => {
    return drink.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <>
      <label>Search for a drink</label>
      <TextInput onChange={handleChange} />
      <br />
      <DrinkItems drinks={matchedDrinks} onClick={onClick} />
    </>
  );
};
