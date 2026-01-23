import React from 'react';
import { ArrowRight, Flame } from 'lucide-react';

const WinterSaleSection = () => {
  const hotDeals = [
    {
      id: 1,
      name: 'Organic Honey & Nuts',
      price: '$18.00',
      originalPrice: '$25.00',
      save: 'Save $7',
      image: 'https://www.naturestrunk.com/cdn/shop/files/nature-s-trunk-honey-with-dryfruits-nut-s-and-seed-s-feature-image-_7.jpg?v=1761914794',
    },
    {
      id: 2,
      name: 'Hot Chocolate Mix',
      price: '$10.50',
      originalPrice: '$15.00',
      save: 'Save $5',
      image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&q=80&w=400',
    },
    {
      id: 3,
      name: 'Winter Citrus Box',
      price: '$28.00',
      originalPrice: '$35.00',
      save: 'Save $7',
      image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&q=80&w=400',
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50 p-6">
      <div className="flex flex-col md:flex-row max-w-6xl w-full bg-white rounded-[40px] overflow-hidden shadow-2xl">
        {/* Left Side: Banner (Dark Navy) */}
        <div className="md:w-1/2 bg-[#001F3F] p-10 md:p-16 flex flex-col justify-center relative">
          <div className="flex gap-3 mb-8">
            <span className="px-4 py-1 bg-blue-900/50 border border-blue-400 text-blue-200 text-xs font-bold rounded-full flex items-center gap-1">❄ WINTER SPECIAL</span>
            <span className="px-4 py-1 bg-red-500 text-white text-xs font-bold rounded-full flex items-center gap-1 shadow-[0_0_15px_rgba(239,68,68,0.5)]">🕒 LIMITED TIME</span>
          </div>

          <h1 className="text-white text-6xl md:text-7xl font-black leading-tight mb-6 uppercase italic">
            WINTER <br />
            <span className="text-blue-300">MEGA SALE</span>
          </h1>

          <p className="text-gray-300 text-lg mb-10 max-w-sm">
            Get up to <span className="text-yellow-400 font-bold italic text-2xl">50% OFF</span> on all winter essentials. Stay warm and cozy with our organic collection.
          </p>

          <button className="flex items-center justify-center gap-2 w-max px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full shadow-[0_10px_20px_rgba(37,99,235,0.4)] transition-all transform hover:scale-105">
            Shop The Sale <ArrowRight size={20} />
          </button>
        </div>

        {/* Right Side: Hot Deals */}
        <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center bg-white">
          <div className="mb-8">
            <h2 className="text-3xl font-black text-slate-800 flex items-center gap-2 mb-1">
              Hot Deals For You <Flame className="text-orange-500 fill-orange-500" size={30} />
            </h2>
            <div className="h-1.5 w-16 bg-blue-600 rounded-full"></div>
          </div>

          <div className="space-y-6">
            {hotDeals.map((deal) => (
              <div key={deal.id} className="relative group border border-gray-100 rounded-3xl p-4 flex items-center gap-5 hover:shadow-xl transition-all duration-300 cursor-pointer bg-white">
                {/* Save Badge */}
                <div className="absolute -top-3 -right-2 px-3 py-1 bg-red-500 text-white text-[10px] font-black rounded-lg uppercase tracking-tighter">{deal.save}</div>

                {/* Product Image */}
                <div className="w-20 h-20 rounded-2xl overflow-hidden bg-gray-100 flex-shrink-0">
                  <img src={deal.image} alt={deal.name} className="w-full h-full object-cover" />
                </div>

                {/* Product Info */}
                <div className="flex-grow">
                  <h4 className="font-bold text-slate-800 text-lg">{deal.name}</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-700 font-black text-xl">{deal.price}</span>
                    <span className="text-gray-400 line-through text-sm font-bold">{deal.originalPrice}</span>
                  </div>
                </div>

                {/* Action Button */}
                <button className="p-3 bg-blue-50 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <ArrowRight size={20} />
                </button>
              </div>
            ))}
          </div>

          <button className="mt-10 flex items-center gap-2 text-blue-600 font-black text-sm uppercase tracking-widest hover:gap-4 transition-all w-max">
            VIEW ALL WINTER DEALS <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WinterSaleSection;
