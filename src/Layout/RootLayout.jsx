import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/Navbar/Navbar';
import Footer from '../pages/Footer/Footer';
import Navbar2 from '../Components/Navbar2';
import { Toaster } from 'kitzo';

const RootLayout = () => {
  return (
    <div className="flex h-screen flex-col">
      <Navbar></Navbar>
      <Navbar2></Navbar2>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <Toaster richColors="#00a63e" position="top-right"></Toaster>
    </div>
  );
};

export default RootLayout;
