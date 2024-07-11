import React from "react";
import Link from "next/link";

const DrinksList = ({ drinks }) => {
  return (
    <ul className="menu menu-vertical">
      {drinks?.map((drink) => (
        <li key={drink.idDrink}>
          <Link className="text-xl font-medium" href={`/bar/${drink.idDrink}`}>
            {drink.strDrink}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DrinksList;
