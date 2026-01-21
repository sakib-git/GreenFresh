import React from 'react';
import { LuTruck, LuLeaf, LuShieldCheck, LuPhoneCall, LuAward, LuRefreshCw, LuBox, LuGem } from "react-icons/lu";
const Service = () => {
  const serviceData = [
    {
      id: 1,
      title: "Fast Delivery",
      desc: "Freshness delivered to your doorstep within 24 hours without any hassle.",
      icon: <LuTruck className="text-green-600 size-6" />,
      bgColor: "bg-green-50",
    },
    {
      id: 2,
      title: "100% Organic",
      desc: "Directly sourced from certified local organic farms ensuring premium quality.",
      icon: <LuLeaf className="text-green-600 size-6" />,
      bgColor: "bg-green-50",
    },
    {
      id: 3,
      title: "Secure Payment",
      desc: "Multiple secure payment options including Stripe and COD for your safety.",
      icon: <LuShieldCheck className="text-blue-600 size-6" />,
      bgColor: "bg-blue-50",
    },
    {
      id: 4,
      title: "24/7 Support",
      desc: "Our dedicated expert team is always here to help you with any queries.",
      icon: <LuPhoneCall className="text-orange-600 size-6" />,
      bgColor: "bg-orange-50",
    },
    {
      id: 5,
      title: "Quality Award",
      desc: "Recognized as the best organic food provider for three consecutive years.",
      icon: <LuAward className="text-purple-600 size-6" />,
      bgColor: "bg-purple-50",
    },
    {
      id: 6,
      title: "Easy Returns",
      desc: "Not satisfied with the quality? Return within 7 days for a full refund.",
      icon: <LuRefreshCw className="text-red-600 size-6" />,
      bgColor: "bg-red-50",
    },
    {
      id: 7,
      title: "Ecofriendly Packaging",
      desc: "We use 100% biodegradable packaging to protect our beautiful planet.",
      icon: <LuBox className="text-cyan-600 size-6" />,
      bgColor: "bg-cyan-50",
    },
    {
      id: 8,
      title: "Premium Membership",
      desc: "Join our club for exclusive discounts and early access to fresh harvests.",
      icon: <LuGem className="text-yellow-600 size-6" />,
      bgColor: "bg-yellow-50",
    },
  ];
  return (
    <section className="py-16 mx-3">
      <div className="max-w-[1400px] mx-auto text-center mb-12">
        <h4 className="text-green-600 font-bold uppercase tracking-widest text-sm mb-3">
          Why Choose Us
        </h4>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a1d37] mb-6">
          Providing The Best <span className="text-green-500">Services</span> For You
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
          We take pride in our commitment to quality, sustainability, and customer satisfaction. 
          Explore what makes us different.
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {serviceData.map((item) => (
          <div 
            key={item.id} 
            className="p-8 rounded-[35px] border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-start"
          >
            <div className={`${item.bgColor} p-4 rounded-2xl mb-6`}>
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-[#0a1d37] mb-3">{item.title}</h3>
            <p className="text-gray-500 text-sm leading-6">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;