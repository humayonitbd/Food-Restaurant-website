// eslint-disable-next-line no-unused-vars
import React from 'react';
import leftImg from "../../../../assets/about/about1.png";

const OurStory = () => {
    return (
      <div className="bg-white md:py-20 py-5">
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2">
          <div className="">
            <img src={leftImg} alt="leftImg" className="w-full" />
          </div>
          <div className="">
            <div>
              <h1>Our Story of food Culinary Excellence at ReservQ</h1>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the to a majority have suffered alteration in some form, by
                injected humour, or find randomised words which do not look even
                slightly believable.
              </p>
              <p>
                Over 20 years experience providing top quality house Booking
                rant and sell for your Amazing Dream & Make you Happy
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default OurStory;