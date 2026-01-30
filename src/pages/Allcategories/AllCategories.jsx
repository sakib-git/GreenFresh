import { FaMoneyCheckDollar } from 'react-icons/fa6';
import { IoFilter } from 'react-icons/io5';
import useAxiossecure from '../../hooks/useAxiossecure';
import { useQuery } from '@tanstack/react-query';
import { Link, useSearchParams } from 'react-router';
import { categories } from '../../data/categoryData';
import ProductCard from '../../Components/ProductCard';

export default function AllCategories() {
  const axiosSecure = useAxiossecure();

  const [params] = useSearchParams();
  const selectedCategory = params.get('category');

  const { data: products = [], isLoading } = useQuery({
    queryKey: ['products', selectedCategory],
    queryFn: async () => {
      const url = `/product/getproduct?category=${selectedCategory}`;
      const res = await axiosSecure.get(url);

      return res.data;
    },
  });
if (isLoading) {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <span className="loading loading-spinner loading-lg text-green-600"></span>
    </div>
  );
}

  return (
    <div>
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="mx-3">
          <div className="flex justify-between max-w-350 mx-auto py-6 max-md:flex-col gap-5">
            <div className="flex-1 max-md:text-center">
              <h2 className="text-3xl font-bold">Grocery Market</h2>
              <p className="text-gray-500 font-medium">Found {products.length} fresh items</p>
            </div>
            <div className="w-full max-w-125 flex-1 max-md:mx-auto">
              <input type="text" placeholder="Search Products..." className="w-full p-4 bg-gray-100 border-2 border-transparent focus:border-[#00a63e] focus:bg-white rounded-2xl outline-none transition-all" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="mx-3">
        <div className="max-w-350 mx-auto py-10">
          <div className="flex gap-5 max-md:flex-col">
            {/* Left Sidebar */}
            <div className="flex-1 bg-white shadow-sm p-5 rounded-2xl top-20 h-fit md:sticky ">
              <div className="flex items-center gap-3 mb-4">
                <IoFilter color="#00a63e" size={23} />
                <p className="text-2xl font-semibold uppercase">Filters</p>
              </div>
              <hr className="text-gray-100 mx-5" />
              <div className="flex items-center gap-3 my-5">
                <FaMoneyCheckDollar color="#00a63e" size={23} />
                <p className="text-[15px] font-semibold uppercase">Your Budget ($)</p>
              </div>

              <p className="mt-5 mb-3 text-[15px] font-semibold">CATEGORY</p>
              <div className="flex flex-wrap md:flex-col gap-6 font-bold">
                <Link to="/categories" className={`text-left transition bg-[#f9fafb] p-3 rounded ${!selectedCategory ? 'bg-green-600 text-white' : 'text-[#adb2bb]'}`}>
                  All Categories
                </Link>

                {categories.map((c) => (
                  <Link to={`/categories?category=${c.value}`} key={c.value} className={`text-left transition bg-[#f9fafb] p-3 rounded ${selectedCategory === c.value ? ' bg-green-600 text-white' : 'text-[#adb2bb]'}`}>
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Products Section */}
            <div className="flex-3 bg-white shadow-sm p-5 rounded-2xl">
              {isLoading ? (
                <p>Loading products...</p>
              ) : products.length === 0 ? (
                <p>No products found!</p>
              ) : (
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.map((product) => (
                    <ProductCard key={product._id} product={product}></ProductCard>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
