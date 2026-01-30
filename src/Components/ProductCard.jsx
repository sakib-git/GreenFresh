import React from 'react';
import { LuRefreshCcw } from 'react-icons/lu';
import { NavLink } from 'react-router';
import useAxiossecure from '../hooks/useAxiossecure';
import useAuth from '../hooks/useAuth';

const ProductCard = ({ product }) => {
  const axiosSecure = useAxiossecure();
  const { user } = useAuth();

  const { image, title, smallPrice, oldPrice, discount, rating, category, _id } = product;
  const handleCart = async (product) => {
    const cart = {
      title: product.title,
      price: product.smallPrice,
      image: product.image,
      category: product.category,
      userEmail: user?.email,
      quantity: 1,
    };
    try {
      const res = await axiosSecure.post('/addtocart/addToCartCollection', cart);
      console.log('Added to cart:', res.data);
    } catch (error) {
      console.error('Add to cart failed:', error);
    }
  };

  return (
    <div className="max-w-75 bg-white rounded-3xl p-4 shadow-sm border border-gray-100 relative group">
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-2xl mb-4 bg-gray-50">
        <img src={image} alt={title} className="w-full h-64 max-md:h-40 object-cover transition-transform duration-300 group-hover:scale-105" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">{discount && <span className="bg-[#ff32a5] text-white text-[12px] font-bold px-3 py-1 rounded-full">-{discount}%</span>}</div>

        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
          <button className="w-9 h-9 bg-white/90 rounded-full flex items-center justify-center text-slate-600 hover:bg-green-600 hover:text-white transition-colors shadow-lg ">
            {/* Heart icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </button>

          <button className="w-9 h-9 bg-white/90 rounded-full flex items-center justify-center text-slate-600 hover:bg-green-600 hover:text-white transition-colors shadow-lg">
            {/* Upload icon */}
            <LuRefreshCcw />
          </button>

          <NavLink to={`/details/${_id}`} className="w-9 h-9 bg-white/90 rounded-full flex items-center justify-center text-slate-600 hover:bg-green-600 hover:text-white transition-colors shadow-lg">
            {/* Eye icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </NavLink>
        </div>
      </div>

      {/* Content */}
      <div className="px-1">
        <p className="text-gray-400 text-xs font-bold tracking-wider uppercase mb-1">{category}</p>
        <h3 className="text-[#0e2244] text-[clamp(0.9rem,0.7667rem+0.6095vw,1.3rem)] font-bold mb-2">{title}</h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          {[1, 2, 3, 4].map((star) => (
            <span key={star} className="text-[#ffb300]">
              ★
            </span>
          ))}
          <span className="text-gray-300">★</span>
          <span className="text-gray-400 text-sm ml-1">({rating})</span>
        </div>
        <hr className="my-4 text-[#eef0f3]" />

        {/* Price and Cart */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-[#3b3a8c] text-[clamp(0.975rem,0.6667rem+0.9524vw,1.5rem)] font-black">${smallPrice}</span>
            <span className="text-gray-400 line-through text-[clamp(0.5625rem,0.4583rem+0.4762vw,0.875rem)]">${oldPrice}</span>
          </div>

          <button onClick={() => handleCart(product)} className="bg-[#e8faee] text-[#00c662] p-3 rounded-2xl hover:bg-[#00c662] hover:text-white transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="max-md:h-4" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
