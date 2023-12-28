// eslint-disable-next-line no-unused-vars
import React from "react";
import './HomeBanner.css';

const HomeBanner = () => {
  return (
    <div className="bannarbg ">
      <div className="w-11/12 mx-auto text-white flex justify-start items-center py-28 ">
        <div>
          <h1 className="text-7xl font-bold leading-tight w-1/2 ">
            Crafting your Exceptional Dining{" "}
            <span className="text-[#F01543]">Reservations</span>
          </h1>
          <p className="w-1/2 text-lg font-semibold mt-8 mb-12">
            Reservation is a step into a world of gastronomic wonder. Reserve
            your table today and let us paint your culinary dreams into reality.
          </p>
          <div className="flex bg-white md:w-[610px] p-3 mr-96 rounded-md">
            <button className=" rounded-md hover:bg-white hover:text-[#F01543] bg-[#F01543] text-white px-10 py-5 mr-10 text-xl border-2 border-[#F01543]">
              Delivery
            </button>
            <button className=" rounded-md hover:bg-[#F01543] hover:text-white text-[#F01543] px-10 py-5 mr-10 text-xl border-2 border-[#F01543]">
              Pick Up
            </button>
            <button className=" rounded-md hover:bg-[#F01543] hover:text-white text-[#F01543] px-10 py-5 text-xl border-2 border-[#F01543]">
              In Restaurant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
