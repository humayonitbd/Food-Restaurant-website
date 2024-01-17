// eslint-disable-next-line no-unused-vars
import React from 'react';
import ProssesExprerianceImg from "../../../../assets/about/about4.png";
import { FaLocationDot } from "react-icons/fa6";
import { MdFastfood } from "react-icons/md";
import { MdOutlinePhonelinkSetup } from "react-icons/md";

const ProssesExpreriance = () => {
    return (
      <div className="bg-[#000929] md:py-20 py-5">
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2">
          <div className="">
            <img src={ProssesExprerianceImg} alt="leftImg" className="w-full" />
          </div>
          <div className="md:ml-20 ml-3">
            <div className="">
              <h1 className="text-5xl text-white font-semibold leading-tight">
                The Process of Crafting your Dining Experience
              </h1>
              <div className="my-10 md:mr-20">
                <div className="mb-5">
                  <div className="flex justify-start items-center bg-[#0D1634] p-4 rounded hover:bg-[#F01543] hover:text-white ">
                    <p className="">
                      <FaLocationDot className="bg-[#262E49] text-6xl text-white p-4 rounded" />
                    </p>
                    <div className="ml-5">
                      <p className="text-2xl text-white  font-bold">
                        Set your location
                      </p>
                      <p className="text-lg text-[#696E81]">
                        A high quality solution beautifully food for customers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-10 md:mr-20">
                <div className="mb-5">
                  <div className="flex justify-start items-center bg-[#0D1634] p-4 rounded hover:bg-[#F01543]  ">
                    <p className="">
                      <MdFastfood className="bg-[#262E49] text-6xl text-white p-4 rounded" />
                    </p>
                    <div className="ml-5">
                      <p className="text-2xl text-white  font-bold">
                        Select Food
                      </p>
                      <p className="text-lg text-[#696E81]">
                        A high quality solution beautifully food for customers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-10 md:mr-20">
                <div className="mb-5">
                  <div className="flex justify-start items-center bg-[#0D1634] rounded p-4 hover:bg-[#F01543]  ">
                    <p className="">
                      <MdOutlinePhonelinkSetup className="bg-[#262E49] text-6xl text-white p-4 rounded" />
                    </p>
                    <div className="ml-5">
                      <p className="text-2xl text-white  font-bold">
                        Pay Cash or Online
                      </p>
                      <p className="text-lg text-[#696E81]">
                        A high quality solution beautifully food for customers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-10 md:mr-20">
                <div className="mb-5">
                  <div className="flex justify-start items-center bg-[#0D1634] rounded p-4 hover:bg-[#F01543]  ">
                    <p className="">
                      <FaLocationDot className="bg-[#262E49] text-6xl text-white p-4 rounded" />
                    </p>
                    <div className="ml-5">
                      <p className="text-2xl text-white  font-bold">
                        Delivery or Pickup
                      </p>
                      <p className="text-lg text-[#696E81]">
                        A high quality solution beautifully food for customers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProssesExpreriance;