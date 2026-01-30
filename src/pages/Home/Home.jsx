import React from 'react';
import FoodBanner from './FoodBanner/FoodBanner';
import Category from '../Category/Category';
import WinterSaleSection from './WinterSaleSection/WinterSaleSection';
import GroceryLanding from './GroceryLanding/GroceryLanding';

const Home = () => {
  return (
    <div>
      <Category></Category>
     <FoodBanner></FoodBanner>
     <WinterSaleSection></WinterSaleSection>
     <GroceryLanding></GroceryLanding>
    </div>
  );
};

export default Home;