import {
  Truck,
  ShieldCheck,
  Clock,
  RotateCcw,
  CheckCircle2,
} from 'lucide-react';

const GroceryLanding = () => {
  return (
    <div className="min-h-screen bg-white p-8 font-sans md:p-16">
      <div className="mx-auto mb-20 flex max-w-7xl flex-col items-center gap-12 lg:flex-row">
        <div className="relative flex w-full justify-center lg:w-1/2">
          <div className="relative h-[450px] w-100 overflow-hidden rounded-t-full border-8 border-white bg-[#93D9BC] shadow-xl">
            <img
              src="https://img.freepik.com/free-photo/delivery-man-with-face-mask-delivering-food-order-new-normal-concept_23-2148532986.jpg?t=st=1735310000~exp=1735313600~hmac=your-real-img-link"
              alt="Leaf Pattern"
              className="h-full w-full object-cover opacity-80"
            />
          </div>

          <div className="Strawberry absolute top-10 right-25 rounded-xl bg-white p-2 text-2xl shadow-lg">
            🍓
          </div>
          <div className="Strawberry absolute bottom-20 left-12 rounded-xl bg-white p-2 text-2xl shadow-lg">
            🍊
          </div>

          <div className="absolute right-0 bottom-10 rounded-2xl border border-gray-100 bg-white p-4 shadow-2xl">
            <p className="text-xs font-semibold text-gray-400">
              This Month Sale
            </p>
            <p className="text-xl font-bold text-[#1D2939]">$45,890</p>
            <div className="mt-1 flex items-center gap-1 text-xs text-green-500">
              <span>↑ 2.35%</span>
              <div className="flex h-3 items-end gap-0.5">
                <div className="h-1 w-1 bg-green-200"></div>
                <div className="h-2 w-1 bg-green-400"></div>
                <div className="h-3 w-1 bg-green-600"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full space-y-6 lg:w-1/2">
          <h1 className="text-5xl leading-tight font-extrabold text-[#1D2939] md:text-6xl">
            Best Quality <br />
            Healthy And <br />
            <span className="text-[#00B14F]">Fresh Grocery</span>
          </h1>

          <p className="max-w-md text-lg text-gray-500">
            We prioritize quality in each of our grocery. below are the
            advantage of our products. Organic food is food produced.
          </p>

          <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-2">
            <FeatureItem text="Best Services than others" />
            <FeatureItem text="100% Organic & Natural Products" />
            <FeatureItem text="100% Returns & Refunds" />
            <FeatureItem text="User-Friendly Mobile Apps" />
          </div>

          <button className="rounded-lg bg-[#00B14F] px-10 py-4 text-lg font-bold text-white transition-all hover:bg-[#008f3f]">
            Order Now
          </button>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          icon={<Truck className="text-green-600" />}
          title="Free Delivery"
          desc="On all orders over $50.00"
          bgColor="bg-green-50"
        />
        <StatCard
          icon={<ShieldCheck className="text-blue-600" />}
          title="Safe Payment"
          desc="100% secure payment methods"
          bgColor="bg-blue-50"
        />
        <StatCard
          icon={<Clock className="text-purple-600" />}
          title="24/7 Support"
          desc="Dedicated support anytime"
          bgColor="bg-purple-50"
        />
        <StatCard
          icon={<RotateCcw className="text-orange-600" />}
          title="Easy Returns"
          desc="30 days money back guarantee"
          bgColor="bg-orange-50"
        />
      </div>
    </div>
  );
};

const FeatureItem = ({ text }) => (
  <div className="flex items-center gap-2">
    <CheckCircle2 className="h-5 w-5 text-[#00B14F]" />
    <span className="text-sm font-semibold text-[#1D2939]">{text}</span>
  </div>
);

const StatCard = ({ icon, title, desc, bgColor }) => (
  <div
    className={`${bgColor} cursor-pointer rounded-3xl p-8 transition-transform hover:scale-105`}
  >
    <div className="mb-4">{icon}</div>
    <h3 className="text-lg font-bold text-gray-900">{title}</h3>
    <p className="mt-1 text-sm text-gray-500">{desc}</p>
  </div>
);

export default GroceryLanding;
