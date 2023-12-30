// eslint-disable-next-line no-unused-vars
import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import OurCategory from '../OurCategory/OurCategory';
import AllProductsSection from '../AllProductsSection/AllProductsSection';

const Home = () => {
    return (
        <div>
            <HomeBanner />
            <OurCategory />
            <AllProductsSection />
        </div>
    );
};

export default Home;