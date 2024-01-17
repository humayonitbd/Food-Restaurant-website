// eslint-disable-next-line no-unused-vars
import React from 'react';
import custommerSay1 from "../../../../assets/customer-1.png"
import custommerSay2 from "../../../../assets/customer-2.png"
import custommerSay3 from "../../../../assets/customer-3.png"
import { FaStar } from "react-icons/fa6";

const CustommersSay = () => {
    return (
      <div className="bg-[#000929] md:py-20 py-10">
        <div className="w-11/12 mx-auto">
          <div className='mb-20'>
            <h1 className="text-center text-white text-5xl font-bold">
              What’s Our Customer Say
            </h1>
          </div>

          <div className="my-10 grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <div className="mb-10">
                <p className="text-lg text-[#888BA3]">
                  An absolute foodies paradise! The flavors at ReservQ are a
                  symphony of delight. Every bite tells a story of passion and
                  skill. A must-visit for anyone seeking beyond compare.
                </p>
              </div>
              <div className="flex justify-start items-center">
                <img src={custommerSay1} alt="" />
                <div className="ml-5">
                  <div className="flex">
                    <p>
                      <FaStar className="text-[#FFB23E] text-lg mr-2" />
                    </p>
                    <p>
                      <FaStar className="text-[#FFB23E] text-lg mr-2" />
                    </p>
                    <p>
                      <FaStar className="text-[#FFB23E] text-lg mr-2" />
                    </p>
                    <p>
                      <FaStar className="text-[#FFB23E] text-lg mr-2" />
                    </p>
                    <p>
                      <FaStar className="text-[#FFB23E] text-lg" />
                    </p>
                  </div>
                  <h3 className="text-2xl text-white font-semibold">
                    Jonson Roy
                  </h3>
                  <p className=" text-white">Job Holder</p>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-10">
                <p className="text-lg text-[#888BA3]">
                  An absolute foodies paradise! The flavors at ReservQ are a
                  symphony of delight. Every bite tells a story of passion and
                  skill. A must-visit for anyone seeking beyond compare.
                </p>
              </div>
              <div className="flex justify-start items-center">
                <img src={custommerSay2} alt="" />
                <div className="ml-5">
                  <div className="flex">
                    <p>
                      <FaStar className="text-[#FFB23E] text-lg mr-2" />
                    </p>
                    <p>
                      <FaStar className="text-[#FFB23E] text-lg mr-2" />
                    </p>
                    <p>
                      <FaStar className="text-[#FFB23E] text-lg mr-2" />
                    </p>
                    <p>
                      <FaStar className="text-[#FFB23E] text-lg mr-2" />
                    </p>
                    <p>
                      <FaStar className="text-[#FFB23E] text-lg" />
                    </p>
                  </div>
                  <h3 className="text-2xl text-white font-semibold">
                    David Ethic
                  </h3>
                  <p className=" text-white">Dog Trainer</p>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-10">
                <p className="text-lg text-[#888BA3]">
                  An absolute foodies paradise! The flavors at ReservQ are a
                  symphony of delight. Every bite tells a story of passion and
                  skill. A must-visit for anyone seeking beyond compare.
                </p>
              </div>
              <div className="flex justify-start items-center">
                <img src={custommerSay3} alt="" />
                <div className="ml-5">
                  <div className="flex">
                    <p>
                      <FaStar className="text-[#FFB23E] text-lg mr-2" />
                    </p>
                    <p>
                      <FaStar className="text-[#FFB23E] text-lg mr-2" />
                    </p>
                    <p>
                      <FaStar className="text-[#FFB23E] text-lg mr-2" />
                    </p>
                    <p>
                      <FaStar className="text-[#FFB23E] text-lg mr-2" />
                    </p>
                    <p>
                      <FaStar className="text-[#FFB23E] text-lg" />
                    </p>
                  </div>
                  <h3 className="text-2xl text-white font-semibold">
                    Robert Fox
                  </h3>
                  <p className=" text-white">Bike Trainer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CustommersSay;