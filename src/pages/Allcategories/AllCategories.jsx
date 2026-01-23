import React from 'react';
import { FaMoneyCheckDollar } from 'react-icons/fa6';
import { IoFilter } from 'react-icons/io5';
import { NavLink } from 'react-router';

const AllCategories = () => {
  return (
    <div>
      <div className="  bg-white shadow-sm">
        <div className="mx-3">
          <div className="flex justify-between max-w-[1400px] mx-auto py-6 max-md:flex-col gap-5 ">
            <div className=" flex-1 max-md:text-center">
              <h2 className="text-3xl font-bold">Grocery Market</h2>
              <p className="text-gray-500 font-medium">Found 25 fresh items</p>
            </div>
            <div className="w-full max-w-[500px] flex-1 max-md:mx-auto">
              <input type="text" placeholder="Search Products..." className="w-full p-4 bg-gray-100 border-2 border-transparent focus:border-[#00a63e] focus:bg-white rounded-2xl outline-none transition-all" />
            </div>
          </div>
        </div>
      </div>
      {/* grid  */}
      <div className="max-w-[1400px] mx-auto py-10">
        <div className="flex gap-5">
          <div className="flex-1 bg-white shadow-sm p-5 rounded-2xl">
            <div className='flex items-center gap-3 mb-4'>
              <IoFilter color='#00a63e' size={23} />

              <p className="text-2xl font-semibold uppercase">Filters</p>
            </div>
            <hr className="text-gray-100 mx-5" />
            <div className='flex items-center gap-3 my-5'>
              <FaMoneyCheckDollar color='#00a63e' size={23}/>
              <p className="text-[15px] font-semibold uppercase">Your Budget ($)</p>
            </div>
            <p>CATEGORY</p>
            <div className="flex flex-col gap-6 font-bold text-[#adb2bb]">
              <NavLink>All Categories</NavLink>
              <NavLink>Vegetables</NavLink>
              <NavLink>Fresh Fruits</NavLink>
              <NavLink>Desserts</NavLink>
              <NavLink>Drinks & Juice</NavLink>
              <NavLink>Fish & Meats</NavLink>
              <NavLink>Pets & Animals</NavLink>
            </div>
            <div></div>
          </div>
          <div className="flex-3 bg-white shadow-sm p-5 rounded-2xl">3</div>
        </div>
      </div>
    </div>
  );
};

export default AllCategories;
