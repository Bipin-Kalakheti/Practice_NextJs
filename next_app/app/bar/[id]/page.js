import React from "react";
import Link from "next/link";
import Image from "next/image";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const getDrink = async (id) => {
  const response = await fetch(`${url}${id}`);

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  return response.json();
};

const DrinkPage = async ({ params }) => {
  const data = await getDrink(params.id);
  const name = data?.drinks[0]?.strDrink;
  const thumb = data?.drinks[0]?.strDrinkThumb;
  const instructions = data?.drinks[0]?.strInstructions;

  return (
    <div>
      <Link href="/bar" className="btn btn-primary mt-8 mb-10">
        Back
      </Link>
      <div className="drink">
        <div className="drink-content">
          <Image
            src={thumb}
            alt={"Image of" + { name }}
            className="max-w-full rounded lg:max-w-sm  shadow-lg"
            width={400}
            height={400}
          />
          <div>
            <h1 className="text-2xl font-bold m-4 lg:text-5xl">{name}</h1>
            <p className="py-4 lg:text-2xl">{instructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrinkPage;
