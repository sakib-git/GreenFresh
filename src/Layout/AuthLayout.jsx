import React from 'react';
import { Link, Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <div className="bg-gray-100 overflow-auto min-h-screen">
      <Link to="/" className="text-4xl font-bold  max-md:text-3xl text-[#372aac] mt-10 ml-10 block ">
        GreenFresh
      </Link>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;
