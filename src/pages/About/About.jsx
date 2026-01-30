const About = () => {
  return (
    <div className="mx-3">
      <section className="py-16 md:px-20">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 xl:grid-cols-2">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1000"
                alt="Fresh Vegetables"
                className="h-auto w-full object-cover"
              />
            </div>

            <div className="about absolute right-[-10px] bottom-[-20px] rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-2xl">
              <h3 className="text-3xl font-bold text-green-600">10k+</h3>
              <p className="text-xs font-semibold tracking-wider text-slate-700 uppercase">
                Happy Customers
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-bold tracking-widest text-green-600 uppercase">
              Our Story
            </h4>

            <h1 className="text-[clamp(1.875rem,1.2015rem+2.9126vw,3.75rem)] leading-tight font-extrabold text-slate-900">
              We Provide Healthy Food For Your
              <p className="text-green-600">Family.</p>
            </h1>

            <p class="max-w-lg leading-relaxed text-gray-600">
              Freshness is at the heart of everything we do. We started with a
              simple mission: to connect local farmers directly with your
              kitchen. Our products are 100% organic, hand-picked, and delivered
              with love.
            </p>

            <div className="grid grid-cols-1 gap-8 pt-4 sm:grid-cols-2">
              <div>
                <h5 className="mb-2 inline-block border-b-2 border-green-500 font-bold text-slate-900">
                  Our Mission
                </h5>
                <p class="text-sm text-gray-500">
                  To promote a healthy lifestyle through organic nutrition.
                </p>
              </div>
              <div>
                <h5 className="mb-2 inline-block border-b-2 border-green-500 font-bold text-slate-900">
                  Our Vision
                </h5>
                <p className="text-sm text-gray-500">
                  Becoming the world's most trusted organic food partner.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <button className="rounded-lg bg-slate-900 px-8 py-3 font-bold text-white transition duration-300 hover:bg-slate-800">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
