import React from "react";

const BarLayout = ({ children }) => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://b.zmtcdn.com/data/collections/c67357df1d79854b624355b0272c5f28_1674826727.jpg"
            alt="Image of Bar"
            className="max-w-full lg:max-w-sm rounded-lg shadow-lg"
          />
          <div className="">
            <h1 className="text-2xl font-bold mb-4 lg:text-5xl">
              Welcome to our Bar
            </h1>
            <p className="py-4 lg:text-2xl">
              Feel free to order as many drinks as you like. Enjoy a drink with
              friends and family
            </p>
            <button className="btn btn-primary">Let's get some!</button>
          </div>
        </div>
      </div>

      {children}
    </div>
  );
};

export default BarLayout;
