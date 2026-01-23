import React from 'react';
import { FiPhone } from 'react-icons/fi';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { NavLink } from 'react-router';

const Navbar2 = () => {
  return (
    <div className="bg-white shadow z-50   max-lg:hidden">
      <hr className=" border-gray-300" />
      <div className="mx-3">
        <div className="max-w-[1400px] mx-auto py-3">
          <div className="flex justify-between items-center ">
            <div className="flex gap-4 ">
              <NavLink to='/'>Home</NavLink>
              <NavLink to='/allcategories'>All Categories</NavLink>
              <div className="relative group flex items-center">
                <NavLink to="/category" className="">
                  Category
                </NavLink>
                <span className="group-hover:rotate-180 transition-all duration-300">
                  <MdOutlineKeyboardArrowDown size={20} />
                </span>

                <div className="absolute top-full mt-6  left-0 min-w-[200px] bg-white shadow border border-gray-100 rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-4 group-hover:translate-y-0 transition-all duration-300  p-2 z-50">
                  <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">About</p>
                  <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Services</p>
                  <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Blog</p>
                  <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Contact</p>
                </div>
              </div>

              <NavLink to='/about'>About </NavLink>
              <NavLink to='service'>Service</NavLink>
              <NavLink to='/contact'>Contact</NavLink>
            </div>
            <div className="flex gap-6 items-center ">
              <div className="flex gap-2 font-semibold text-[16px] floating">
                <span className="text-[#00a63e]">%</span>
                <h3>Weekly Discount!</h3>
              </div>
              <div className="bg-[#4f39f6] flex gap-3 items-center px-5 py-1 text-white rounded-md relative">
                <span>
                  <FiPhone size={20} />
                </span>
                <div>
                  <p className="text-[10px] uppercase">hotline</p>
                  <p className="font-semibold">+8801721189065</p>
                </div>
                <span className="absolute -top-2 left-2 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-[#4f39f6]"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
