import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1 className="text-5xl mb-8 font-bold">Home</h1>
      <Link href="counter" className="btn btn-accent">
        Start
      </Link>
    </div>
  );
};

export default Home;
