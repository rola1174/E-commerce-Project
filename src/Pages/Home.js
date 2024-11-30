import React from 'react';
import "./Home.css";

import Banner from '../components/Banner';
import FlashDeals from '../components/FlashDeals';
import Categories from '../components/Categories';
import Discounts from '../components/Discounts';

const Home = () => {
  return (
    <div>
      
      <Banner />
      <FlashDeals />
      <Categories />
      <Discounts />
    </div>
  );
};

export default Home;
