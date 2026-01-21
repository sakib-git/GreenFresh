import React from 'react';

const FoodBanner = () => {
  return (
    <div className=" pb-10 mx-3">

      <div className="max-w-[1400px]  mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 ">
        
  
        <div className="md:col-span-2 relative overflow-hidden rounded-3xl h-[500px] shadow-lg group">
          <img 
            src="https://images.unsplash.com/photo-1543353071-10c8ba85a904?q=80&w=2070" 
            alt="Chef" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col justify-center px-12">
            <span className="bg-[#4c3ce2] text-white text-xs font-bold px-4 py-1 rounded-full w-fit mb-4">
              100% FARM FRESH FOOD
            </span>
            <h1 className="text-white text-6xl font-bold leading-tight">
              Fresh Organic <br />
              <span className="text-yellow-500">Food For All</span>
            </h1>
            <div className="mt-4 flex items-baseline gap-3">
              <span className="text-white text-5xl font-bold">$59.00</span>
              <span className="text-gray-300 line-through text-xl">$80.00</span>
            </div>
            <button className="mt-8 bg-[#4c3ce2] hover:bg-[#3a2db8] text-white font-semibold py-3 px-8 rounded-full w-fit transition">
              Shop Now
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          
 
          <div className="relative rounded-3xl overflow-hidden h-[240px] shadow-md group">
            <img 
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070" 
              alt="Salad" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 p-8">
              <h2 className="text-white text-3xl font-bold">Creamy Fruits <br /> baby Jem</h2>
              <p className="text-white mt-2 font-medium">
                ONLY FOR <span className="text-yellow-400">$12.99</span>
              </p>
              <button className="mt-4 bg-white text-black text-sm font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition">
                SHOP NOW
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 h-[235px]">
      
            <div className="relative rounded-3xl overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1964" 
                alt="Desert" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10 flex flex-col items-center justify-between py-4">
                <span className="bg-white/90 text-[10px] font-bold px-3 py-1 rounded-md text-blue-900">SWEET DESERT</span>
                <button className="bg-white text-black text-[10px] font-bold py-1.5 px-4 rounded-full shadow-md">Buy Now</button>
              </div>
            </div>

            {/* Dark Wash (Product) */}
            <div className="relative rounded-3xl overflow-hidden bg-[#fce4ec] shadow-md flex flex-col items-center justify-center p-4">
               <span className="absolute top-3 right-3 bg-pink-600 text-white text-[10px] font-bold h-10 w-10 flex items-center justify-center rounded-full">
                15% OFF
               </span>
               <img 
                src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1974" 
                alt="Product" 
                className="w-20 h-auto drop-shadow-xl mb-2"
               />
               <span className="text-[10px] font-bold text-gray-800 mb-2 uppercase">Dark Wash</span>
               <button className="bg-[#3a2db8] text-white text-[10px] font-bold py-1.5 px-4 rounded-full w-full">Shop All</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FoodBanner;