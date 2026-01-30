import { NavLink } from 'react-router-dom';

const Category = () => {
  return (
    <div className="mx-3">
      <div className="mx-auto max-w-350">
        <div className="no-scrollbar flex items-center justify-between gap-9 overflow-x-auto py-5">
          <NavLink
            to="/categories?category=vegetables"
            className="group flex shrink-0 items-center gap-3"
          >
            <span className="grid h-8 w-8 place-content-center rounded-full bg-[#fdf2f8] p-6 text-2xl group-hover:bg-[#e6e9fe]">
              🧺
            </span>
            <div className="flex flex-col">
              <p className="text-sm font-semibold">Vegetables</p>
            </div>
          </NavLink>

          <NavLink
            to="/categories?category=fresh-fruits"
            className="group flex shrink-0 items-center gap-3"
          >
            <span className="grid h-8 w-8 place-content-center rounded-full bg-[#fdf2f8] p-6 text-2xl group-hover:bg-[#e6e9fe]">
              🍎
            </span>
            <div className="flex flex-col">
              <p className="text-sm font-semibold">Fresh Fruits</p>
            </div>
          </NavLink>

          <NavLink
            to="/categories?category=desserts"
            className="group flex shrink-0 items-center gap-3"
          >
            <span className="grid h-8 w-8 place-content-center rounded-full bg-[#fdf2f8] p-6 text-2xl group-hover:bg-[#e6e9fe]">
              🧁
            </span>
            <div className="flex flex-col">
              <p className="text-sm font-semibold">Desserts</p>
            </div>
          </NavLink>
          <NavLink
            to="/categories?category=drinks-juice"
            className="group flex shrink-0 items-center gap-3"
          >
            <span className="grid h-8 w-8 place-content-center rounded-full bg-[#fdf2f8] p-6 text-2xl group-hover:bg-[#e6e9fe]">
              🧃
            </span>
            <div className="flex flex-col">
              <p className="text-sm font-semibold">Drinks & Juice</p>
            </div>
          </NavLink>
          <NavLink
            to="/categories?category=fish-meats"
            className="group flex shrink-0 items-center gap-3"
          >
            <span className="grid h-8 w-8 place-content-center rounded-full bg-[#fdf2f8] p-6 text-2xl group-hover:bg-[#e6e9fe]">
              🐟
            </span>
            <div className="flex flex-col">
              <p className="text-sm font-semibold">Fish & Meats</p>
            </div>
          </NavLink>
          <NavLink
            to="/categories?category=pets-animals"
            className="group flex shrink-0 items-center gap-3"
          >
            <span className="grid h-8 w-8 place-content-center rounded-full bg-[#fdf2f8] p-6 text-2xl group-hover:bg-[#e6e9fe]">
              🐶
            </span>
            <div className="flex flex-col">
              <p className="text-sm font-semibold">Pets & Animals</p>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Category;
