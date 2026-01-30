import { useEffect, useRef, useState } from 'react';
import { BiCart } from 'react-icons/bi';
import { CiHeart } from 'react-icons/ci';
import { IoSearch } from 'react-icons/io5';
import { Link, NavLink } from 'react-router-dom';
import { FiPhone } from 'react-icons/fi';
import { HiOutlineUser } from 'react-icons/hi';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import useAuth from '../../hooks/useAuth';
import { signOut } from 'firebase/auth';
import { auth } from '../../fireBase/firebase-config';
import { useQuery } from '@tanstack/react-query';
import useAxiossecure from '../../hooks/useAxiossecure';

const Navbar = () => {
  const axiosSecure = useAxiossecure();
  const [open, setOpen] = useState(false);
  const [openmenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null);
  const { user } = useAuth();
  const hadleLogout = () => {
    signOut(auth).then(() => {});
  };
  const { data: carts = [] } = useQuery({
    queryKey: ['cart', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/addtocart/getCartByEmail?email=${user?.email}`,
      );
      return res.data;
    },
  });

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
      <div className="bg-white py-5 shadow">
        <div className="mx-3">
          <div className="mx-auto flex max-w-[1400px] items-center justify-between">
            <NavLink
              to="/"
              className="text-4xl font-bold text-[#372aac] max-md:text-3xl"
            >
              GreenFresh
            </NavLink>

            {/* Desktop Menu */}

            <div className="flex w-full items-center gap-4 font-semibold max-lg:hidden">
              <form className="relative mx-auto w-full max-w-[550px] flex-1">
                <input
                  type="text"
                  className="w-full rounded-full border border-[#c9c9c9] px-4 py-2.5 pr-10 transition focus:border-[#ffb900] focus:ring-1 focus:ring-[#ffb900] focus:outline-none"
                  placeholder="Search for products.."
                />
                <button
                  type="submit"
                  className="absolute top-1/2 right-0 -translate-y-1/2 rounded-r-full bg-amber-300 px-5 py-3 text-gray-500"
                >
                  <IoSearch size={20} />
                </button>
              </form>
            </div>

            {/* Desktop Login */}
            <div
              ref={menuRef}
              className="relative flex items-center gap-4 text-2xl font-medium"
            >
              {user ? (
                <div className="flex flex-col items-center gap-3">
                  <div className="h-8 w-8 rounded-full">
                    <img
                      onClick={() => setOpenMenu(!openmenu)}
                      src={user?.photoURL}
                      alt="User"
                      className="rounded-full"
                    />
                  </div>

                  {openmenu && (
                    <div className="absolute top-14 right-0 z-999 flex flex-col items-start rounded-md bg-white p-3 text-white shadow-lg transition-all duration-300">
                      <p className="mb-2 text-[12px] text-[#757d89]">
                        {user?.displayName}
                      </p>
                      <p className="mb-2 text-[12px] text-[#757d89]">
                        {user?.email}
                      </p>
                      <Link
                        to="/dashboardlayout/dashoboard"
                        className="text-black"
                      >
                        Dashboard
                      </Link>
                      <button
                        onClick={hadleLogout}
                        className="text-sm font-medium text-red-500 hover:underline"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  to="/login"
                  className="rounded-full bg-gray-100 p-2 transition hover:bg-[#00a63e] hover:text-white"
                >
                  <HiOutlineUser size={22} />
                </NavLink>
              )}

              <div className="flex items-center gap-4">
                <NavLink to="/lovesave" className="relative p-2">
                  <CiHeart size={28} />
                  <span className="absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-[#FF6B6B] text-[10px] font-bold text-white">
                    0
                  </span>
                </NavLink>

                <NavLink to="/addtocart" className="relative p-2">
                  <BiCart size={28} />
                  <span className="absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-[#00A63E] text-[10px] font-bold text-white">
                    {carts.length}
                  </span>
                </NavLink>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(true)}
              className="cursor-pointer text-2xl lg:hidden"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-20 bg-black/40 lg:hidden"
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 z-30 h-full w-66 transform bg-white p-5 shadow-lg transition-transform duration-300 lg:hidden ${open ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-[#372aac] max-md:text-3xl">
            GreenFresh
          </span>
          <button className="text-2xl font-bold" onClick={() => setOpen(false)}>
            ✕
          </button>
        </div>

        <div className="mt-6 flex flex-col gap-4 text-lg font-medium">
          <div className="flex flex-col gap-30">
            <div className="flex flex-col gap-3">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/categories">All Categories</NavLink>

              {/* Category Dropdown */}
              <div className="group relative">
                <div className="flex cursor-pointer items-center gap-1 select-none">
                  <NavLink to="/categories" className="inline-block py-2">
                    Category
                  </NavLink>
                  <span className="transition-all duration-300 group-hover:rotate-180">
                    <MdOutlineKeyboardArrowDown size={20} />
                  </span>
                </div>

                {/* Dropdown Menu */}
                <div className="invisible absolute top-full left-0 z-50 mt-1 flex min-w-[200px] translate-y-4 flex-col gap-4 rounded-b-lg border border-gray-100 bg-white p-2 opacity-0 shadow transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <NavLink to="/categories?category=vegetables">
                    <p className="text-sm font-semibold">Vegetables</p>
                  </NavLink>

                  <NavLink to="/categories?category=fresh-fruits">
                    <p className="text-sm font-semibold">Fresh Fruits</p>
                  </NavLink>

                  <NavLink to="/categories?category=desserts">
                    <p className="text-sm font-semibold">Desserts</p>
                  </NavLink>
                  <NavLink to="/categories?category=drinks-juice">
                    <p className="text-sm font-semibold">Drinks & Juice</p>
                  </NavLink>
                  <NavLink to="/categories?category=fish-meats">
                    <p className="text-sm font-semibold">Fish & Meats</p>
                  </NavLink>
                  <NavLink to="/categories?category=pets-animals">
                    <p className="text-sm font-semibold">Pets & Animals</p>
                  </NavLink>
                </div>
              </div>

              <NavLink to="/about">About</NavLink>
              <NavLink to="/service">Service</NavLink>
              <NavLink to="/contact">Contact</NavLink>
              {user && (
                <button
                  className="text-left text-red-500"
                  onClick={hadleLogout}
                >
                  logout
                </button>
              )}
            </div>
            <div className="flex-col items-center">
              <div className="floating flex gap-2 text-[16px] font-semibold">
                <span className="text-[#00a63e]">%</span>
                <h3>Weekly Discount!</h3>
              </div>
              <div className="relative flex items-center gap-3 rounded-md bg-[#4f39f6] px-5 py-1 text-white">
                <span>
                  <FiPhone size={20} />
                </span>
                <div>
                  <p className="text-[10px] uppercase">hotline</p>
                  <p className="font-semibold">+8801721189065</p>
                </div>
                <span className="absolute -top-2 left-2 border-r-8 border-b-8 border-l-8 border-r-transparent border-b-[#4f39f6] border-l-transparent"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
