import React from 'react';
import { NavLink } from 'react-router';

const Category = () => {
  return (
    <div className="mx-3">
      <div className="mx-auto max-w-350  ">
        <div className="flex justify-between gap-9 items-center py-5 overflow-x-auto no-scrollbar">
          <NavLink to="/categories?category=vegetables" className="shrink-0 flex gap-3 group items-center">
            <span className="text-2xl bg-[#fdf2f8] h-8 w-8 p-6 rounded-full grid place-content-center group-hover:bg-[#e6e9fe]">🧺</span>
            <div className="flex flex-col ">
              <p className="font-semibold text-sm ">Vegetables</p>
            </div>
          </NavLink>

          <NavLink to="/categories?category=fresh-fruits" className="shrink-0 flex gap-3 group items-center">
            <span className="text-2xl bg-[#fdf2f8] h-8 w-8 p-6 rounded-full grid place-content-center group-hover:bg-[#e6e9fe]">🍎</span>
            <div className="flex flex-col ">
              <p className="font-semibold text-sm ">Fresh Fruits</p>
            </div>
          </NavLink>

          <NavLink to="/categories?category=desserts" className="shrink-0 flex gap-3 group items-center">
            <span className="text-2xl bg-[#fdf2f8] h-8 w-8 p-6 rounded-full grid place-content-center group-hover:bg-[#e6e9fe]">🧁</span>
            <div className="flex flex-col ">
              <p className="font-semibold text-sm ">Desserts</p>
            </div>
          </NavLink>
          <NavLink to="/categories?category=drinks-juice" className="shrink-0 flex gap-3 group items-center">
            <span className="text-2xl bg-[#fdf2f8] h-8 w-8 p-6 rounded-full grid place-content-center group-hover:bg-[#e6e9fe]">🧃</span>
            <div className="flex flex-col ">
              <p className="font-semibold text-sm ">Drinks & Juice</p>
            </div>
          </NavLink>
          <NavLink to="/categories?category=fish-meats" className="shrink-0 flex gap-3 group items-center">
            <span className="text-2xl bg-[#fdf2f8] h-8 w-8 p-6 rounded-full grid place-content-center group-hover:bg-[#e6e9fe]">🐟</span>
            <div className="flex flex-col ">
              <p className="font-semibold text-sm ">Fish & Meats</p>
            </div>
          </NavLink>
          <NavLink to="/categories?category=pets-animals" className="shrink-0 flex gap-3 group items-center">
            <span className="text-2xl bg-[#fdf2f8] h-8 w-8 p-6 rounded-full grid place-content-center group-hover:bg-[#e6e9fe]">🐶</span>
            <div className="flex flex-col ">
              <p className="font-semibold text-sm ">Pets & Animals</p>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Category;
