// eslint-disable-next-line no-unused-vars
import React from "react";
import "./OurCategory.css";
import  DelishBurger  from "../../../../assets/Delish Burger.jpg";
import Sandwiches from "../../../../assets/Sandwiches.png";
import  MexcanCuisine  from "../../../../assets/Mexcan Cuisine.png";
import  ItalianCuisine  from "../../../../assets/Italian Cuisine.png";
import  Burger  from "../../../../assets//PromoBanner-2.png";
import  ChichenBurger  from "../../../../assets/PromoBanner-1.png";

const OurCategory = () => {
  const categoryServices = [
    {
      id: 1,
      icon: DelishBurger,
      name: "Delish Burger",
      quantity: 15,
    },
    {
      id: 2,
      icon: Sandwiches,
      name: "Sandwiches",
      quantity: 18,
    },
    {
      id: 3,
      icon: MexcanCuisine,
      name: "Mexcan Cuisine",
      quantity: 20,
    },
    {
      id: 4,
      icon: ItalianCuisine,
      name: "Italian Cuisine",
      quantity: 25,
    },
  ];

  return (
    <div className="categorybg pt-20 pb-10">
      <div className="w-11/12 mx-auto">
        <div className="flex justify-between items-center ">
          <h1 className="text-5xl font-semibold">Our Categories</h1>
          <button className="btn border-2 border-[#F01543] text-[#232122] hover:bg-[#F01543] hover:text-white bg-inherit text-xl px-5">
            See more
          </button>
        </div>
        <div className="flex justify-between items-center mt-16 ">
          {categoryServices?.map((categoryservice) => (
            <div
              key={categoryservice.id}
              className="flex justify-between items-center hover:bg-[#F01543] hover:text-white bg-[#F4F4F6] p-5 rounded-md"
            >
              <img
                className="w-16 bg-white rounded-full p-2 mr-4"
                src={categoryservice.icon}
                alt=""
              />
              <div>
                <h4 className="text-2xl font-bold">{categoryservice.name}</h4>
                <p className="text-lg">{categoryservice.quantity} items</p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="grid md:grid-cols-3  grid-cols-1 gap-7 py-20">
            <img src={Burger} className=" w-full h-96 cursor-pointer " alt="" />
            <img
              className="col-span-2 w-full h-96 cursor-pointer "
              src={ChichenBurger}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCategory;
