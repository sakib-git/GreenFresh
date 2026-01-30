import { FiPhone } from 'react-icons/fi';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { NavLink } from 'react-router';
import { categories } from '../data/categoryData';

const Navbar2 = () => {
  return (
    <div className="z-50 bg-white shadow max-lg:hidden">
      <hr className="border-gray-300" />
      <div className="mx-3">
        <div className="mx-auto max-w-350 py-3">
          <div className="flex items-center justify-between">
            <div className="flex gap-4">
              <NavLink
                className={({ isActive }) => (isActive ? 'text-green-600' : '')}
                to="/"
              >
                Home
              </NavLink>

              <div className="group relative flex items-center">
                <NavLink
                  to="/categories"
                  className={({ isActive }) =>
                    isActive ? 'text-green-600' : ''
                  }
                >
                  Categories
                </NavLink>
                <span className="transition-all duration-300 group-hover:rotate-180">
                  <MdOutlineKeyboardArrowDown size={20} />
                </span>

                <div className="invisible absolute top-full left-0 z-50 mt-6 grid min-w-50 translate-y-4 rounded-b-lg border border-gray-100 bg-white p-2 opacity-0 shadow transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {categories.map((c) => (
                    <NavLink
                      key={c.name}
                      to={`/categories?category=${c.value}`}
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                    >
                      {c.name}
                    </NavLink>
                  ))}
                </div>
              </div>

              <NavLink
                className={({ isActive }) => (isActive ? 'text-green-600' : '')}
                to="/about"
              >
                About{' '}
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'text-green-600' : '')}
                to="service"
              >
                Service
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'text-green-600' : '')}
                to="/contact"
              >
                Contact
              </NavLink>
            </div>
            <div className="flex items-center gap-6">
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

export default Navbar2;
