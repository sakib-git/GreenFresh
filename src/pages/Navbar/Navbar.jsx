import React, { useEffect, useRef, useState } from 'react';
import { BiCart } from 'react-icons/bi';
import { CiHeart, CiUser } from 'react-icons/ci';
import { IoSearch } from 'react-icons/io5';
import { Link, NavLink } from 'react-router';
import { FiPhone } from 'react-icons/fi';
import { HiOutlineUser } from 'react-icons/hi';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import useAuth from '../../Hooks/useAuth';
import { signOut } from 'firebase/auth';
import { auth } from '../../fireBase/Firebase.init';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openmenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null);
  const { user } = useAuth();
  const hadleLogout = () => {
    signOut(auth).then(() => {});
  };

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenu(false);
      }
    };

    document.addEventListener('click', handler);

    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);
  return (
    <div>
      <div className="bg-white shadow py-5">
        <div className="mx-3 ">
          <div className="flex justify-between items-center max-w-[1400px] mx-auto  ">
            <NavLink to="/" className="text-4xl font-bold max-md:text-3xl text-[#372aac]">
              GreenFresh
            </NavLink>

            {/* Desktop Menu */}

            <div className="flex items-center gap-4 w-full font-semibold max-lg:hidden">
              <form className="relative max-w-[550px] w-full mx-auto flex-1">
                <input type="text" className="w-full border border-[#c9c9c9] rounded-full px-4 py-2.5 pr-10 focus:outline-none focus:border-[#ffb900] focus:ring-1 focus:ring-[#ffb900] transition" placeholder="Search for products.." />
                <button type="submit" className="absolute right-0 rounded-r-full top-1/2 -translate-y-1/2 text-gray-500 bg-amber-300 px-5 py-3">
                  <IoSearch size={20} />
                </button>
              </form>
            </div>

            {/* Desktop Login */}
            <div ref={menuRef} className="text-2xl flex items-center gap-4 font-medium relative ">
              {user ? (
                <div className="flex flex-col items-center gap-3">
                  <div className=" h-8 w-8 rounded-full">
                    <img onClick={() => setOpenMenu(!openmenu)} src={user?.photoURL} alt="User" className="rounded-full" />
                  </div>

                  {openmenu && (
                    <div className=" absolute right-0 top-14 z-50 bg-white text-white p-3 rounded-md shadow-lg transition-all duration-300 flex flex-col  items-start">
                      <p className="text-[12px] mb-2 text-[#757d89]">{user?.displayName}</p>
                      <p className="text-[12px] mb-2 text-[#757d89]">{user?.email}</p>
                      <Link to='/dashboardlayout/dashoboard' className="text-black">Dashboard</Link>
                      <button onClick={hadleLogout} className="text-sm font-medium text-red-500 hover:underline">
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <NavLink to="/login" className="bg-gray-100 p-2 rounded-full hover:bg-[#00a63e] hover:text-white transition">
                  <HiOutlineUser size={22} />
                </NavLink>
              )}

              <div className="flex items-center gap-4">
                <NavLink to="/lovesave" className="relative p-2">
                  <CiHeart size={28} />
                  <span className="absolute top-0 right-0 bg-[#FF6B6B] text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-white">0</span>
                </NavLink>

                <NavLink to="/addtocart" className="relative p-2">
                  <BiCart size={28} />
                  <span className="absolute top-0 right-0 bg-[#00A63E] text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-white">0</span>
                </NavLink>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setOpen(true)} className="lg:hidden text-2xl cursor-pointer">
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {open && <div onClick={() => setOpen(false)} className="fixed inset-0 bg-black/40 z-20 lg:hidden" />}

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-66 bg-white shadow-lg p-5 z-30 transform transition-transform duration-300 lg:hidden ${open ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold  max-md:text-3xl text-[#372aac]  ">GreenFresh</span>
          <button className="text-2xl font-bold" onClick={() => setOpen(false)}>
            ✕
          </button>
        </div>

        <div className="flex flex-col gap-4 text-lg font-medium mt-6">
          <div className="flex flex-col gap-30">
            <div className="flex flex-col gap-3">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/categories">All Categories</NavLink>

              {/* Category Dropdown */}
              <div className="relative group">
                <div className="flex items-center gap-1 cursor-pointer select-none">
                  <NavLink to="/category" className="py-2 inline-block">
                    Category
                  </NavLink>
                  <span className="transition-all duration-300 group-hover:rotate-180">
                    <MdOutlineKeyboardArrowDown size={20} />
                  </span>
                </div>

                {/* Dropdown Menu */}
                <div
                  className="absolute left-0 top-full mt-1 min-w-[200px] bg-white shadow border border-gray-100
                     rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible
                     translate-y-4 group-hover:translate-y-0 transition-all duration-300 z-50 p-2"
                >
                  <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">About</p>
                  <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Services</p>
                  <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Blog</p>
                  <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Contact</p>
                </div>
              </div>

              <NavLink to="/allcategories">All Categories</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/service">Service</NavLink>
              <NavLink to="/contact">Contact</NavLink>
              {user && <button onClick={hadleLogout}>logout</button>}
            </div>
            <div className="flex-col  items-center ">
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

export default Navbar;
