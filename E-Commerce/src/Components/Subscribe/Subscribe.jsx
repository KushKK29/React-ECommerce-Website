import React from "react";

const Subscribe = () => {
  return (
    <div data-aos="zoom-in" className="mb-20 bg-slate-700 dark:bg-gray-800 ">
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-x1 mx-auto ">
          <h1 className="text-2x1 text-center  sm:text-4x1 font-semibold">
            Get Notified about New Products
          </h1>
          <input
            type="email"
            data-aos="fade-up"
            placeholder="Enter Your Email"
            className="w-full p-3 text-black"
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
