import DrinksList from "@/components/DrinksList";
import React from "react";

const url =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

const Bar = async () => {
  const response = await fetch(url);

  const data = await response.json();

  return <DrinksList drinks={data.drinks} />;
};

export default Bar;
