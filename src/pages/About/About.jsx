import React from 'react';

const About = () => {
  return (
  <div className='mx-3'>
      <section className=" py-16  md:px-20 ">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1000" alt="Fresh Vegetables" className="w-full h-auto object-cover" />
          </div>

          <div className="absolute bottom-[-20px] right-[-10px] bg-white p-6 rounded-2xl shadow-2xl text-center border border-gray-100 about">
            <h3 className="text-3xl font-bold text-green-600">10k+</h3>
            <p className="text-xs font-semibold text-slate-700 tracking-wider uppercase">Happy Customers</p>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-green-600 font-bold uppercase tracking-widest text-sm">Our Story</h4>

          <h1 className="text-[clamp(1.875rem,1.2015rem+2.9126vw,3.75rem)] font-extrabold text-slate-900 leading-tight">
            We Provide Healthy Food For Your
            <p className="text-green-600">Family.</p>
          </h1>

          <p class="text-gray-600 leading-relaxed max-w-lg">Freshness is at the heart of everything we do. We started with a simple mission: to connect local farmers directly with your kitchen. Our products are 100% organic, hand-picked, and delivered with love.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
            <div>
              <h5 className="font-bold text-slate-900 border-b-2 border-green-500 inline-block mb-2">Our Mission</h5>
              <p class="text-sm text-gray-500">To promote a healthy lifestyle through organic nutrition.</p>
            </div>
            <div>
              <h5 className="font-bold text-slate-900 border-b-2 border-green-500 inline-block mb-2">Our Vision</h5>
              <p className="text-sm text-gray-500">Becoming the world's most trusted organic food partner.</p>
            </div>
          </div>

          <div className="pt-6">
            <button className="bg-slate-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-slate-800 transition duration-300">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  </div>
  );
};

export default About;
