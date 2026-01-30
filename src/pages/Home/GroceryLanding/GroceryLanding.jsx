import React from 'react';
import { Truck, ShieldCheck, Clock, RotateCcw, CheckCircle2 } from 'lucide-react';

const GroceryLanding = () => {
  return (
    <div className="min-h-screen bg-white font-sans p-8 md:p-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 mb-20">
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <div className="relative w-100 h-[450px] bg-[#93D9BC] rounded-t-full overflow-hidden border-8 border-white shadow-xl">
            <img src="https://img.freepik.com/free-photo/delivery-man-with-face-mask-delivering-food-order-new-normal-concept_23-2148532986.jpg?t=st=1735310000~exp=1735313600~hmac=your-real-img-link" alt="Leaf Pattern" className="w-full h-full object-cover opacity-80" />
          </div>

          <div className="absolute top-10 right-25 text-2xl bg-white p-2 rounded-xl shadow-lg Strawberry">🍓</div>
          <div className="absolute bottom-20 left-12 text-2xl bg-white p-2 rounded-xl shadow-lg Strawberry">🍊</div>

          <div className="absolute bottom-10 right-0 bg-white p-4 rounded-2xl shadow-2xl border border-gray-100">
            <p className="text-gray-400 text-xs font-semibold">This Month Sale</p>
            <p className="text-xl font-bold text-[#1D2939]">$45,890</p>
            <div className="flex items-center gap-1 text-green-500 text-xs mt-1">
              <span>↑ 2.35%</span>
              <div className="flex items-end gap-0.5 h-3">
                <div className="w-1 h-1 bg-green-200"></div>
                <div className="w-1 h-2 bg-green-400"></div>
                <div className="w-1 h-3 bg-green-600"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#1D2939] leading-tight">
            Best Quality <br />
            Healthy And <br />
            <span className="text-[#00B14F]">Fresh Grocery</span>
          </h1>

          <p className="text-gray-500 text-lg max-w-md">We prioritize quality in each of our grocery. below are the advantage of our products. Organic food is food produced.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
            <FeatureItem text="Best Services than others" />
            <FeatureItem text="100% Organic & Natural Products" />
            <FeatureItem text="100% Returns & Refunds" />
            <FeatureItem text="User-Friendly Mobile Apps" />
          </div>

          <button className="bg-[#00B14F] hover:bg-[#008f3f] text-white px-10 py-4 rounded-lg font-bold text-lg transition-all">Order Now</button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard icon={<Truck className="text-green-600" />} title="Free Delivery" desc="On all orders over $50.00" bgColor="bg-green-50" />
        <StatCard icon={<ShieldCheck className="text-blue-600" />} title="Safe Payment" desc="100% secure payment methods" bgColor="bg-blue-50" />
        <StatCard icon={<Clock className="text-purple-600" />} title="24/7 Support" desc="Dedicated support anytime" bgColor="bg-purple-50" />
        <StatCard icon={<RotateCcw className="text-orange-600" />} title="Easy Returns" desc="30 days money back guarantee" bgColor="bg-orange-50" />
      </div>
    </div>
  );
};

const FeatureItem = ({ text }) => (
  <div className="flex items-center gap-2">
    <CheckCircle2 className="text-[#00B14F] w-5 h-5" />
    <span className="text-sm font-semibold text-[#1D2939]">{text}</span>
  </div>
);

const StatCard = ({ icon, title, desc, bgColor }) => (
  <div className={`${bgColor} p-8 rounded-3xl transition-transform hover:scale-105 cursor-pointer`}>
    <div className="mb-4">{icon}</div>
    <h3 className="font-bold text-lg text-gray-900">{title}</h3>
    <p className="text-sm text-gray-500 mt-1">{desc}</p>
  </div>
);

export default GroceryLanding;
