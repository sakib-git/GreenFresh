import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaGithub, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (

      <footer className="bg-slate-900 text-gray-300 pt-16 pb-8">
      {/* Main Container */}
<div className='mx-3'>
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Company Info */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Green<span className="text-green-500">Fresh</span>
          </h2>
          <p className="text-sm leading-relaxed">
            We provide the best organic and farm-fresh food products directly to your doorstep. 
            Healthy living starts with healthy eating.
          </p>
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-3">
              <div className="bg-green-500/10 p-2 rounded-full text-green-500">
                <FaPhoneAlt size={14} />
              </div>
              <p className="text-sm">01720854545</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-green-500/10 p-2 rounded-full text-green-500">
                <FaEnvelope size={14} />
              </div>
              <p className="text-sm">sakib@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-6 border-b-2 border-green-500 w-fit">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-green-500 transition-colors cursor-pointer">Home</li>
            <li className="hover:text-green-500 transition-colors cursor-pointer">Shop Grid</li>
            <li className="hover:text-green-500 transition-colors cursor-pointer">About Us</li>
            <li className="hover:text-green-500 transition-colors cursor-pointer">Contact Us</li>
            <li className="hover:text-green-500 transition-colors cursor-pointer">Our Blog</li>
            <li className="hover:text-green-500 transition-colors cursor-pointer">FAQ</li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-6 border-b-2 border-green-500 w-fit">Categories</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-green-500 transition-colors cursor-pointer">Vegetables</li>
            <li className="hover:text-green-500 transition-colors cursor-pointer">Fresh Fruits</li>
            <li className="hover:text-green-500 transition-colors cursor-pointer">Dairy & Eggs</li>
            <li className="hover:text-green-500 transition-colors cursor-pointer">Beverages</li>
            <li className="hover:text-green-500 transition-colors cursor-pointer">Meats & Seafood</li>
            <li className="hover:text-green-500 transition-colors cursor-pointer">Organic Honey</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-6 border-b-2 border-green-500 w-fit">Newsletter</h3>
          <p className="text-sm mb-4">Subscribe to get latest updates, offers and coupons.</p>
          <div className="flex flex-col space-y-3">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-slate-800 border border-slate-700 text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-green-500 transition-all"
            />
            <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-lg transition-all duration-300 uppercase text-xs tracking-widest">
              Subscribe
            </button>
          </div>
          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <div className="bg-slate-800 hover:bg-green-600 p-3 rounded-full transition-all cursor-pointer group">
              <FaFacebookF className="group-hover:text-white" size={16} />
            </div>
            <div className="bg-slate-800 hover:bg-green-600 p-3 rounded-full transition-all cursor-pointer group">
              <FaLinkedinIn className="group-hover:text-white" size={16} />
            </div>
            <div className="bg-slate-800 hover:bg-green-600 p-3 rounded-full transition-all cursor-pointer group">
              <FaGithub className="group-hover:text-white" size={16} />
            </div>
          </div>
        </div>
      </div>
</div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800 mt-16 pt-8">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2026 <span className="text-green-500 font-medium">FreshNess</span>. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 grayscale opacity-70">
            {/* You can replace these with actual payment icons/images */}
            <span className="text-xs font-bold tracking-tighter">VISA</span>
            <span className="text-xs font-bold tracking-tighter">MASTERCARD</span>
            <span className="text-xs font-bold tracking-tighter">PAYPAL</span>
            <span className="text-xs font-bold tracking-tighter">STRIPE</span>
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;

