import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/Navbar/Navbar';
import Footer from '../pages/Footer/Footer';
import Navbar2 from '../Components/Navbar2';

const RootLayout = () => {
  
  return (
    <div className='flex h-screen flex-col'>
      <Navbar></Navbar>
      <Navbar2></Navbar2>
     <div className='flex-1'>
       <Outlet></Outlet>
     </div>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;