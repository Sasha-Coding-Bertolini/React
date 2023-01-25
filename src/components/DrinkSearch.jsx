import { useState } from "react";
import { DrinkItems } from "./DrinkItems";
import { Input } from "./UI/Input";
import { availableDrinks } from "./utils/data";

export const DrinkSearch = () => {
  const [searchField, setSearchField] = useState("test drink");

  return (
    <>
      <label>Search for a drink</label>
      <Input />
      <br />
      <DrinkItems drinks={availableDrinks} />
    </>
  );
};
