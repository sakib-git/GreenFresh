import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-900 pt-16 pb-8 text-gray-300">
      {/* Main Container */}
      <div className="mx-3">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Green<span className="text-green-500">Fresh</span>
            </h2>
            <p className="text-sm leading-relaxed">
              We provide the best organic and farm-fresh food products directly
              to your doorstep. Healthy living starts with healthy eating.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-green-500/10 p-2 text-green-500">
                  <FaPhoneAlt size={14} />
                </div>
                <p className="text-sm">01720854545</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-green-500/10 p-2 text-green-500">
                  <FaEnvelope size={14} />
                </div>
                <p className="text-sm">sakib@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 w-fit border-b-2 border-green-500 text-lg font-semibold text-white">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="cursor-pointer transition-colors hover:text-green-500">
                Home
              </li>
              <li className="cursor-pointer transition-colors hover:text-green-500">
                Shop Grid
              </li>
              <li className="cursor-pointer transition-colors hover:text-green-500">
                About Us
              </li>
              <li className="cursor-pointer transition-colors hover:text-green-500">
                Contact Us
              </li>
              <li className="cursor-pointer transition-colors hover:text-green-500">
                Our Blog
              </li>
              <li className="cursor-pointer transition-colors hover:text-green-500">
                FAQ
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-6 w-fit border-b-2 border-green-500 text-lg font-semibold text-white">
              Categories
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="cursor-pointer transition-colors hover:text-green-500">
                Vegetables
              </li>
              <li className="cursor-pointer transition-colors hover:text-green-500">
                Fresh Fruits
              </li>
              <li className="cursor-pointer transition-colors hover:text-green-500">
                Dairy & Eggs
              </li>
              <li className="cursor-pointer transition-colors hover:text-green-500">
                Beverages
              </li>
              <li className="cursor-pointer transition-colors hover:text-green-500">
                Meats & Seafood
              </li>
              <li className="cursor-pointer transition-colors hover:text-green-500">
                Organic Honey
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-6 w-fit border-b-2 border-green-500 text-lg font-semibold text-white">
              Newsletter
            </h3>
            <p className="mb-4 text-sm">
              Subscribe to get latest updates, offers and coupons.
            </p>
            <div className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-sm transition-all focus:border-green-500 focus:outline-none"
              />
              <button className="rounded-lg bg-green-600 py-3 text-xs font-medium tracking-widest text-white uppercase transition-all duration-300 hover:bg-green-700">
                Subscribe
              </button>
            </div>
            {/* Social Icons */}
            <div className="mt-6 flex gap-4">
              <div className="group cursor-pointer rounded-full bg-slate-800 p-3 transition-all hover:bg-green-600">
                <FaFacebookF className="group-hover:text-white" size={16} />
              </div>
              <div className="group cursor-pointer rounded-full bg-slate-800 p-3 transition-all hover:bg-green-600">
                <FaLinkedinIn className="group-hover:text-white" size={16} />
              </div>
              <div className="group cursor-pointer rounded-full bg-slate-800 p-3 transition-all hover:bg-green-600">
                <FaGithub className="group-hover:text-white" size={16} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-16 border-t border-slate-800 pt-8">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <p className="text-sm text-gray-500">
            © 2026{' '}
            <span className="font-medium text-green-500">GreenFresh</span>. All
            Rights Reserved.
          </p>
          <div className="flex items-center gap-4 opacity-70 grayscale">
            {/* You can replace these with actual payment icons/images */}
            <span className="text-xs font-bold tracking-tighter">VISA</span>
            <span className="text-xs font-bold tracking-tighter">
              MASTERCARD
            </span>
            <span className="text-xs font-bold tracking-tighter">PAYPAL</span>
            <span className="text-xs font-bold tracking-tighter">STRIPE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
