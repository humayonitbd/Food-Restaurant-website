
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './BetterRestaurantBg.css'
import playStore from "../../../../assets/Google_Play.png";
import apple from "../../../../assets/apple.png";
import rightImg from "../../../../assets/about/about9.png";

const FindOutBetterRestaurant = () => {
    return (
      <div className="BetterRestaurantBg md:py-20 py-10">
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <h1 className="text-5xl font-bold text-white leading-tight">
              Find out Better Restaurant Food Experience
            </h1>
            <p className="my-8 text-lg text-white">
              We have done it carefully and simply. Combined with the <br />
              ingredients makes for beautiful landings.
            </p>
            <div>
              <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-white mr-5 button-xl ">
                <img src={playStore} alt="" /> Google Play
              </button>
              <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-black text-white">
                <img src={apple} alt="" /> Google Play
              </button>
            </div>
          </div>
          <div className=' '>
            <img className='w-full mt-2 ' src={rightImg} alt="" />
          </div>
        </div>
      </div>
    );
};

export default FindOutBetterRestaurant;