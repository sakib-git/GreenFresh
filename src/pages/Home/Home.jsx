import React from 'react';
import FoodBanner from './FoodBanner/FoodBanner';
import Category from '../Category/Category';

const Home = () => {
  return (
    <div>
      <Category></Category>
     <FoodBanner></FoodBanner>
    </div>
  );
};

export default Home;