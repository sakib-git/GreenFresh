import FoodBanner from './foodBanner/FoodBanner';
import Category from '../category/Category';
import WinterSaleSection from './winterSaleSection/WinterSaleSection';
import GroceryLanding from './groceryLanding/GroceryLanding';
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
