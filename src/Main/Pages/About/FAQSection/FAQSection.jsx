// eslint-disable-next-line no-unused-vars
import React from 'react';
import faqImg1 from '../../../../assets/about/about5.png'
import faqImg2 from '../../../../assets/about/about8.png'

const FAQSection = () => {
    return (
      <div className="bg-[#F9F9F9] md:py-20 py-10">
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <div className="mb-10">
              <h1 className="text-5xl font-bold leading-tight">
                Foodie FAQ: Your Culinary Queries Answered
              </h1>
            </div>
            <div>
              <div className="collapse collapse-arrow bg-white mb-4">
                <input type="radio" name="my-accordion-2" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                  What type of cuisine does your restaurant offer?
                </div>
                <div className="collapse-content">
                  <p>
                    We offer [insert type of cuisine, e.g., Italian, Asian
                    fusion, Mediterranean] cuisine that combines traditional
                    flavors with modern twists.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-white mb-4">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                  Can I make a reservation online?
                </div>
                <div className="collapse-content">
                  <p>
                    We offer [insert type of cuisine, e.g., Italian, Asian
                    fusion, Mediterranean] cuisine that combines traditional
                    flavors with modern twists.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-white mb-4">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                  Is there a dress code for dining at your restaurant?
                </div>
                <div className="collapse-content">
                  <p>
                    We offer [insert type of cuisine, e.g., Italian, Asian
                    fusion, Mediterranean] cuisine that combines traditional
                    flavors with modern twists.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-white">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                  Is there a dress code for dining at your restaurant?
                </div>
                <div className="collapse-content">
                  <p>
                    We offer [insert type of cuisine, e.g., Italian, Asian
                    fusion, Mediterranean] cuisine that combines traditional
                    flavors with modern twists.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
              <div>
                <img src={faqImg1} alt="" />
              </div>
              <div className="bg-black text-white flex justify-center items-center rounded">
                <h4 className="text-2xl font-bold">
                  235+ <br /> Success <br /> Event
                </h4>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="bg-red-500 text-white flex justify-center items-center rounded">
                <h4 className="text-2xl font-bold">
                  235+ <br /> Success <br /> Event
                </h4>
              </div>
              <div>
                <img src={faqImg2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default FAQSection;