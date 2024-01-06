// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BsBookmarkStar, BsCartPlus, BsGraphUpArrow } from 'react-icons/bs';
import { RiVipDiamondFill } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { CiCircleQuestion } from "react-icons/ci";

import {
  BarChart,
  Bar,
//   Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Pie,
  PieChart,
} from "recharts";
import { FaStar } from 'react-icons/fa6';

const Dashboard = () => {
    const bookingPlaces = [
      {
        id: 1,
        title: "Weekly Booking Confrom",
        dollar: "$ 150000",
        incress: "Increased by 60%",
        bgColor: "bg-[#F01543]",
        icon: <BsGraphUpArrow />,
      },
      {
        id: 2,
        title: "Weekly Booking",
        dollar: "45,6334",
        incress: "Decreased by 10%",
        bgColor: "bg-[#000929]",
        icon: <BsBookmarkStar />,
      },
      {
        id: 3,
        title: "Visitors Online",
        dollar: "95,5741",
        incress: "Increased by 5%",
        bgColor: "bg-[#FFB23E]",
        icon: <RiVipDiamondFill />,
      },
    ];

    const data = [
      {
        name: "Italy",
        visitor: 4000,
        booking: 2400,
        review: 2000,
      },
      {
        name: "France",
        visitor: 4000,
        booking: 2400,
        review: 1000,
      },
      {
        name: "US",
        visitor: 4000,
        booking: 2400,
      },
      {
        name: "UK",
        visitor: 4000,
        booking: 2400,
        review: 1700,
      },
      {
        name: "Autraliya",
        visitor: 4000,
        booking: 2400,
        review: 1600,
      },
      {
        name: "Canada",
        visitor: 4000,
        booking: 2400,
        review: 1300,
      },
      {
        name: "Malayshiya",
        visitor: 4000,
        booking: 2400,
        review: 1500,
      },
    ];

    const data02 = [
      { name: "visitor", value: 4000 },
      { name: "booking", value: 2400 },
      { name: "review", value: 1500 },
    ];

    const leatesPlaces = [
      {
        id: 1,
        img: "https://i.ibb.co/jrDnCHr/featured-1.png",
        title: "Baked Chicken Wings and Legs",
        details: "Stay with enjoy hosting for 5 years",
        items: ["4 Piece Chicken", "Spicy Sauce"],
        price: 25.0,
        reatings: "3.7(2.5K)",
        popular: 1,
        discount: 10,
      },
      {
        id: 2,
        img: "https://i.ibb.co/Kb2PYkT/popular-4.png",
        title: "BBQ Pulled Pork Sandwich",
        items: ["2 Piece Chicken", "Spicy Sauce"],
        price: 30,
        reatings: "3.7(2.5K)",
      },
      {
        id: 3,
        img: "https://i.ibb.co/9TM5qd6/IMG-4008-3.jpg",
        title: "Pork Chop with Apple Chutney",
        items: ["3 Piece Chicken", "Spicy Sauce"],
        bookingPrice: 20,
        price: 20,
        reatings: "3.7(2.5K)",
      },
    ];
    return (
      <div className="pl-5 pt-5">
        <div className="flex justify-between items-center">
          <div className="flex justify-start items-center">
            <p>
              <AiFillHome className="text-4xl bg-[#F01543] rounded text-white p-2" />
            </p>
            <h4 className="ml-2 font-bold text-lg">Dashboard</h4>
          </div>
          <div className="flex justify-end items-center">
            <p className="mr-1  mt-1">
              <CiCircleQuestion className="text-[#F01543]" />
            </p>
            <Link to="/">
              <p className="p-0 m-0 text-[#F01543]  ">overview page</p>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-5 my-5">
          {bookingPlaces?.map((bookingPlace) => (
            <>
              <div key={bookingPlace.id}>
                <div
                  className={`${bookingPlace.bgColor}  rounded text-start p-8 text-white `}
                >
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg">{bookingPlace.title}</h4>
                    <p className="text-white text-lg">{bookingPlace.icon}</p>
                  </div>
                  <h1 className="text-3xl font-bold pt-3 pb-12 ">
                    {bookingPlace.dollar}
                  </h1>
                  <p>{bookingPlace.incress}</p>
                </div>
              </div>
            </>
          ))}
        </div>
        {/* rechart start */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-10">
          <div className="">
            {/* dfadgffafafasfafaf */}
            {/* <ResponsiveContainer width="100%" height="100%"></ResponsiveContainer> */}
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="visitor" stackId="a" fill="#F01543" />
              <Bar dataKey="booking" stackId="a" fill="#000929" />
              <Bar dataKey="review" fill="#ffc658" />
            </BarChart>
          </div>

          <div>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart width={600} height={600}>
                <Pie
                  data={data02}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  fill="#000929"
                  label
                />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        {/* rechart end */}

        <div className="grid md:grid-cols-3 grid-cols-1 gap-5 my-10">
          {leatesPlaces?.map((leatesPlace) => (
            <>
              <div key={leatesPlace.id} className="shadow-md">
                <img src={leatesPlace.img} className="w-full h-60" alt="" />
                <div className="p-2">
                  <h3 className="text-lg font-semibold">{leatesPlace.name}</h3>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-2xl text-[#F01543] font-bold">
                        ${leatesPlace.price}.00
                      </p>
                    </div>
                    <div className="flex justify-center items-center">
                      <span>
                        <FaStar className="inline text-[#FFB23E] text-2xl mr-2" />
                      </span>
                      <p className="font-bold text-lg">
                        {leatesPlace.reatings}
                      </p>
                    </div>
                  </div>

                  <Link to="/products">
                    <button
                      //   onClick={openModal}
                      className="btn w-full bg-[#F01543] text-lg my-3 text-white hover:bg-black "
                    >
                      <BsCartPlus className="text-lg font-bold" />
                      Add to Cart
                    </button>
                  </Link>
                </div>
              </div>
            </>
          ))}
        </div>

        <div className="bg-black flex justify-center items-center h-24 text-white">
          <p>Thanks for visited Dashboard</p>
        </div>
      </div>
    );
};

export default Dashboard;