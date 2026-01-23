import React from 'react';
import FoodBanner from './FoodBanner/FoodBanner';
import Category from '../Category/Category';
import WinterSaleSection from './WinterSaleSection/WinterSaleSection';

const Home = () => {
  return (
    <div>
      <Category></Category>
     <FoodBanner></FoodBanner>
     <WinterSaleSection></WinterSaleSection>
    </div>
  );
};

export default Home;