// eslint-disable-next-line no-unused-vars
import React from 'react';
import leftImg from "../../../../assets/about/about1.png";
import CustommerImg from "../../../../assets/about/about2.png";
import BranchImg from "../../../../assets/about/about3.png";

const OurStory = () => {
    return (
      <div className="bg-white md:py-20 py-5">
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2">
          <div className="">
            <img src={leftImg} alt="leftImg" className="w-full" />
          </div>
          <div className="md:ml-20 ml-3 md:py-20 py-10">
            <div className="">
              <h1 className="text-5xl font-bold">
                Our Story of food Culinary Excellence at ReservQ
              </h1>
              <div className='my-8'>
                <p  className='text-lg'>
                  There are many variations of passages of Lorem Ipsum
                  available, but the to a majority have suffered alteration in
                  some form, by injected humour, or find randomised words which
                  do not look even slightly believable.
                </p ><br />
                <p className='text-lg'>
                  Over 20 years experience providing top quality house Booking
                  rant and sell for your Amazing Dream & Make you Happy
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-10">
              <div>
                <img src={CustommerImg} alt="" />
                <h2 className='font-bold text-2xl mt-2'>90k+ Customers</h2>
                <p>Believe in our service & Care</p>
              </div>
              <div>
                <img src={BranchImg} alt="" />
                <h2 className='font-bold text-2xl mt-2'>100+ Branch</h2>
                <p>Food ready for occupancy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default OurStory;