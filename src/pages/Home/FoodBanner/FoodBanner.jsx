const FoodBanner = () => {
  return (
    <div className="mx-3 pb-10">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-6 md:grid-cols-3">
        <div className="group relative h-[500px] overflow-hidden rounded-3xl shadow-lg md:col-span-2">
          <img
            src="https://images.unsplash.com/photo-1543353071-10c8ba85a904?q=80&w=2070"
            alt="Chef"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex flex-col justify-center bg-black/30 px-12">
            <span className="mb-4 w-fit rounded-full bg-[#4c3ce2] px-4 py-1 text-xs font-bold text-white">
              100% FARM FRESH FOOD
            </span>
            <h1 className="text-6xl leading-tight font-bold text-white">
              Fresh Organic <br />
              <span className="text-yellow-500">Food For All</span>
            </h1>
            <div className="mt-4 flex items-baseline gap-3">
              <span className="text-5xl font-bold text-white">$59.00</span>
              <span className="text-xl text-gray-300 line-through">$80.00</span>
            </div>
            <button className="mt-8 w-fit rounded-full bg-[#4c3ce2] px-8 py-3 font-semibold text-white transition hover:bg-[#3a2db8]">
              Shop Now
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="group relative h-[240px] overflow-hidden rounded-3xl shadow-md">
            <img
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070"
              alt="Salad"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 p-8">
              <h2 className="text-3xl font-bold text-white">
                Creamy Fruits <br /> baby Jem
              </h2>
              <p className="mt-2 font-medium text-white">
                ONLY FOR <span className="text-yellow-400">$12.99</span>
              </p>
              <button className="mt-4 rounded-full bg-white px-6 py-2 text-sm font-bold text-black transition hover:bg-gray-100">
                SHOP NOW
              </button>
            </div>
          </div>

          <div className="grid h-[235px] grid-cols-2 gap-4">
            <div className="relative overflow-hidden rounded-3xl shadow-md">
              <img
                src="https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1964"
                alt="Desert"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-between bg-black/10 py-4">
                <span className="rounded-md bg-white/90 px-3 py-1 text-[10px] font-bold text-blue-900">
                  SWEET DESERT
                </span>
                <button className="rounded-full bg-white px-4 py-1.5 text-[10px] font-bold text-black shadow-md">
                  Buy Now
                </button>
              </div>
            </div>

            {/* Dark Wash (Product) */}
            <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-3xl bg-[#fce4ec] p-4 shadow-md">
              <span className="absolute top-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-pink-600 text-[10px] font-bold text-white">
                15% OFF
              </span>
              <img
                src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1974"
                alt="Product"
                className="mb-2 h-auto w-20 drop-shadow-xl"
              />
              <span className="mb-2 text-[10px] font-bold text-gray-800 uppercase">
                Dark Wash
              </span>
              <button className="w-full rounded-full bg-[#3a2db8] px-4 py-1.5 text-[10px] font-bold text-white">
                Shop All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodBanner;
