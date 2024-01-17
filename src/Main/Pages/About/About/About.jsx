// eslint-disable-next-line no-unused-vars
import React from 'react';
import AboutBanner from '../AboutBanner/AboutBanner';
import OurStory from '../OurStory/OurStory';
import ProssesExpreriance from '../ProssesExpreriance/ProssesExpreriance';
import PopullerProductSection from '../PopullerProductSection/PopullerProductSection';
import CustommersSay from '../CustommersSay/CustommersSay';
import FAQSection from '../FAQSection/FAQSection';
import FindOutBetterRestaurant from '../FindOutBetterRestaurant/FindOutBetterRestaurant';

const About = () => {
    return (
        <div>
            <AboutBanner />
            <OurStory />
            <ProssesExpreriance />
            <PopullerProductSection />
            <CustommersSay />
            <FAQSection />
            <FindOutBetterRestaurant />
            
        </div>
    );
};

export default About;