import React from 'react';
import FoodBanner from './FoodBanner/FoodBanner';
import Category from '../Category/Category';
import WinterSaleSection from './WinterSaleSection/WinterSaleSection';
import GroceryLanding from './GroceryLanding/GroceryLanding';
import SomeProducts from './someProducts/SomeProducts';

const Home = () => {
  return (
    <div>
      <Category></Category>
     <FoodBanner></FoodBanner>
     <SomeProducts></SomeProducts>
     <WinterSaleSection></WinterSaleSection>
     <GroceryLanding></GroceryLanding>
    </div>
  );
};

export default Home;