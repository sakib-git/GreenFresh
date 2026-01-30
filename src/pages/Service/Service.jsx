import {
  LuTruck,
  LuLeaf,
  LuShieldCheck,
  LuPhoneCall,
  LuAward,
  LuRefreshCw,
  LuBox,
  LuGem,
} from 'react-icons/lu';
const Service = () => {
  const serviceData = [
    {
      id: 1,
      title: 'Fast Delivery',
      desc: 'Freshness delivered to your doorstep within 24 hours without any hassle.',
      icon: <LuTruck className="size-6 text-green-600" />,
      bgColor: 'bg-green-50',
    },
    {
      id: 2,
      title: '100% Organic',
      desc: 'Directly sourced from certified local organic farms ensuring premium quality.',
      icon: <LuLeaf className="size-6 text-green-600" />,
      bgColor: 'bg-green-50',
    },
    {
      id: 3,
      title: 'Secure Payment',
      desc: 'Multiple secure payment options including Stripe and COD for your safety.',
      icon: <LuShieldCheck className="size-6 text-blue-600" />,
      bgColor: 'bg-blue-50',
    },
    {
      id: 4,
      title: '24/7 Support',
      desc: 'Our dedicated expert team is always here to help you with any queries.',
      icon: <LuPhoneCall className="size-6 text-orange-600" />,
      bgColor: 'bg-orange-50',
    },
    {
      id: 5,
      title: 'Quality Award',
      desc: 'Recognized as the best organic food provider for three consecutive years.',
      icon: <LuAward className="size-6 text-purple-600" />,
      bgColor: 'bg-purple-50',
    },
    {
      id: 6,
      title: 'Easy Returns',
      desc: 'Not satisfied with the quality? Return within 7 days for a full refund.',
      icon: <LuRefreshCw className="size-6 text-red-600" />,
      bgColor: 'bg-red-50',
    },
    {
      id: 7,
      title: 'Ecofriendly Packaging',
      desc: 'We use 100% biodegradable packaging to protect our beautiful planet.',
      icon: <LuBox className="size-6 text-cyan-600" />,
      bgColor: 'bg-cyan-50',
    },
    {
      id: 8,
      title: 'Premium Membership',
      desc: 'Join our club for exclusive discounts and early access to fresh harvests.',
      icon: <LuGem className="size-6 text-yellow-600" />,
      bgColor: 'bg-yellow-50',
    },
  ];
  return (
    <section className="mx-3 py-16">
      <div className="mx-auto mb-12 max-w-[1400px] text-center">
        <h4 className="mb-3 text-sm font-bold tracking-widest text-green-600 uppercase">
          Why Choose Us
        </h4>
        <h2 className="mb-6 text-4xl font-extrabold text-[#0a1d37] md:text-5xl">
          Providing The Best <span className="text-green-500">Services</span>{' '}
          For You
        </h2>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-500">
          We take pride in our commitment to quality, sustainability, and
          customer satisfaction. Explore what makes us different.
        </p>
      </div>

      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {serviceData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-start rounded-[35px] border border-gray-100 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-md"
          >
            <div className={`${item.bgColor} mb-6 rounded-2xl p-4`}>
              {item.icon}
            </div>
            <h3 className="mb-3 text-xl font-bold text-[#0a1d37]">
              {item.title}
            </h3>
            <p className="text-sm leading-6 text-gray-500">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
