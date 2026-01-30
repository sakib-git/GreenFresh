import { ArrowRight, Flame } from 'lucide-react';

const WinterSaleSection = () => {
  const hotDeals = [
    {
      id: 1,
      name: 'Organic Honey & Nuts',
      price: '$18.00',
      originalPrice: '$25.00',
      save: 'Save $7',
      image:
        'https://www.naturestrunk.com/cdn/shop/files/nature-s-trunk-honey-with-dryfruits-nut-s-and-seed-s-feature-image-_7.jpg?v=1761914794',
    },
    {
      id: 2,
      name: 'Hot Chocolate Mix',
      price: '$10.50',
      originalPrice: '$15.00',
      save: 'Save $5',
      image:
        'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&q=80&w=400',
    },
    {
      id: 3,
      name: 'Winter Citrus Box',
      price: '$28.00',
      originalPrice: '$35.00',
      save: 'Save $7',
      image:
        'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&q=80&w=400',
    },
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-blue-50 p-6">
      <div className="flex w-full max-w-6xl flex-col overflow-hidden rounded-[40px] bg-white shadow-2xl md:flex-row">
        {/* Left Side: Banner (Dark Navy) */}
        <div className="relative flex flex-col justify-center bg-[#001F3F] p-10 md:w-1/2 md:p-16">
          <div className="mb-8 flex gap-3">
            <span className="flex items-center gap-1 rounded-full border border-blue-400 bg-blue-900/50 px-4 py-1 text-xs font-bold text-blue-200">
              ❄ WINTER SPECIAL
            </span>
            <span className="flex items-center gap-1 rounded-full bg-red-500 px-4 py-1 text-xs font-bold text-white shadow-[0_0_15px_rgba(239,68,68,0.5)]">
              🕒 LIMITED TIME
            </span>
          </div>

          <h1 className="mb-6 text-6xl leading-tight font-black text-white uppercase italic md:text-7xl">
            WINTER <br />
            <span className="text-blue-300">MEGA SALE</span>
          </h1>

          <p className="mb-10 max-w-sm text-lg text-gray-300">
            Get up to{' '}
            <span className="text-2xl font-bold text-yellow-400 italic">
              50% OFF
            </span>{' '}
            on all winter essentials. Stay warm and cozy with our organic
            collection.
          </p>

          <button className="flex w-max transform items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 font-bold text-white shadow-[0_10px_20px_rgba(37,99,235,0.4)] transition-all hover:scale-105 hover:bg-blue-700">
            Shop The Sale <ArrowRight size={20} />
          </button>
        </div>

        {/* Right Side: Hot Deals */}
        <div className="flex flex-col justify-center bg-white p-10 md:w-1/2 md:p-16">
          <div className="mb-8">
            <h2 className="mb-1 flex items-center gap-2 text-3xl font-black text-slate-800">
              Hot Deals For You{' '}
              <Flame className="fill-orange-500 text-orange-500" size={30} />
            </h2>
            <div className="h-1.5 w-16 rounded-full bg-blue-600"></div>
          </div>

          <div className="space-y-6">
            {hotDeals.map((deal) => (
              <div
                key={deal.id}
                className="group relative flex cursor-pointer items-center gap-5 rounded-3xl border border-gray-100 bg-white p-4 transition-all duration-300 hover:shadow-xl"
              >
                {/* Save Badge */}
                <div className="absolute -top-3 -right-2 rounded-lg bg-red-500 px-3 py-1 text-[10px] font-black tracking-tighter text-white uppercase">
                  {deal.save}
                </div>

                {/* Product Image */}
                <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-2xl bg-gray-100">
                  <img
                    src={deal.image}
                    alt={deal.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-grow">
                  <h4 className="text-lg font-bold text-slate-800">
                    {deal.name}
                  </h4>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-black text-blue-700">
                      {deal.price}
                    </span>
                    <span className="text-sm font-bold text-gray-400 line-through">
                      {deal.originalPrice}
                    </span>
                  </div>
                </div>

                {/* Action Button */}
                <button className="rounded-2xl bg-blue-50 p-3 text-blue-600 transition-all group-hover:bg-blue-600 group-hover:text-white">
                  <ArrowRight size={20} />
                </button>
              </div>
            ))}
          </div>

          <button className="mt-10 flex w-max items-center gap-2 text-sm font-black tracking-widest text-blue-600 uppercase transition-all hover:gap-4">
            VIEW ALL WINTER DEALS <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WinterSaleSection;
