import React from 'react';
import { NavLink } from 'react-router';

const Category = () => {
  return (
    <div className="mx-3">
      <div className="mx-auto max-w-[1400px]  ">
        <div className="flex justify-between gap-9 items-center py-5 overflow-x-auto no-scrollbar">
          <NavLink className="flex-shrink-0 flex gap-3 group items-center">
            <span className="text-2xl bg-[#fdf2f8] h-8 w-8 p-6 rounded-full grid place-content-center group-hover:bg-[#e6e9fe]">🧺</span>
            <div className='flex flex-col '>
              <p className="font-semibold text-sm ">Vegetables</p>
              <span className="text-[12px] ">Products</span>
            </div>
          </NavLink>


          <NavLink className="flex-shrink-0 flex gap-3 group items-center">
            <span className="text-2xl bg-[#fdf2f8] h-8 w-8 p-6 rounded-full grid place-content-center group-hover:bg-[#e6e9fe]">🍎</span>
            <div className='flex flex-col '>
              <p className="font-semibold text-sm ">Fresh Fruits</p>
              <span className="text-[12px] ">Products</span>
            </div>
          </NavLink>


          <NavLink className="flex-shrink-0 flex gap-3 group items-center">
            <span className="text-2xl bg-[#fdf2f8] h-8 w-8 p-6 rounded-full grid place-content-center group-hover:bg-[#e6e9fe]">🧁</span>
            <div className='flex flex-col '>
              <p className="font-semibold text-sm ">Desserts</p>
              <span className="text-[12px] ">Products</span>
            </div>
          </NavLink>
          <NavLink className="flex-shrink-0 flex gap-3 group items-center">
            <span className="text-2xl bg-[#fdf2f8] h-8 w-8 p-6 rounded-full grid place-content-center group-hover:bg-[#e6e9fe]">🧃</span>
            <div className='flex flex-col '>
              <p className="font-semibold text-sm ">Drinks & Juice</p>
              <span className="text-[12px] ">Products</span>
            </div>
          </NavLink>
          <NavLink className="flex-shrink-0 flex gap-3 group items-center">
            <span className="text-2xl bg-[#fdf2f8] h-8 w-8 p-6 rounded-full grid place-content-center group-hover:bg-[#e6e9fe]">🐟</span>
            <div className='flex flex-col '>
              <p className="font-semibold text-sm ">Fish & Meats</p>
              <span className="text-[12px] ">Products</span>
            </div>
          </NavLink>
          <NavLink className="flex-shrink-0 flex gap-3 group items-center">
            <span className="text-2xl bg-[#fdf2f8] h-8 w-8 p-6 rounded-full grid place-content-center group-hover:bg-[#e6e9fe]">🐶</span>
            <div className='flex flex-col '>
              <p className="font-semibold text-sm ">Pets & Animals</p>
              <span className="text-[12px] ">Products</span>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Category;

