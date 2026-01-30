import { FaMoneyCheckDollar } from 'react-icons/fa6';
import { IoFilter } from 'react-icons/io5';
import useAxiossecure from '../../hooks/useAxiossecure';
import { useQuery } from '@tanstack/react-query';
import { Link, useSearchParams } from 'react-router';
import { categories } from '../../data/categoryData';
import ProductCard from '../../components/ProductCard';

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
      <div className="flex min-h-screen items-center justify-center">
        <span className="loading loading-spinner loading-lg text-green-600"></span>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="mx-3">
          <div className="mx-auto flex max-w-350 justify-between gap-5 py-6 max-md:flex-col">
            <div className="flex-1 max-md:text-center">
              <h2 className="text-3xl font-bold">Grocery Market</h2>
              <p className="font-medium text-gray-500">
                Found {products.length} fresh items
              </p>
            </div>
            <div className="w-full max-w-125 flex-1 max-md:mx-auto">
              <input
                type="text"
                placeholder="Search Products..."
                className="w-full rounded-2xl border-2 border-transparent bg-gray-100 p-4 transition-all outline-none focus:border-[#00a63e] focus:bg-white"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="mx-3">
        <div className="mx-auto max-w-350 py-10">
          <div className="flex gap-5 max-md:flex-col">
            {/* Left Sidebar */}
            <div className="top-20 h-fit flex-1 rounded-2xl bg-white p-5 shadow-sm md:sticky">
              <div className="mb-4 flex items-center gap-3">
                <IoFilter color="#00a63e" size={23} />
                <p className="text-2xl font-semibold uppercase">Filters</p>
              </div>
              <hr className="mx-5 text-gray-100" />
              <div className="my-5 flex items-center gap-3">
                <FaMoneyCheckDollar color="#00a63e" size={23} />
                <p className="text-[15px] font-semibold uppercase">
                  Your Budget ($)
                </p>
              </div>

              <p className="mt-5 mb-3 text-[15px] font-semibold">CATEGORY</p>
              <div className="flex flex-wrap gap-6 font-bold md:flex-col">
                <Link
                  to="/categories"
                  className={`rounded bg-[#f9fafb] p-3 text-left transition ${!selectedCategory ? 'bg-green-600 text-white' : 'text-[#adb2bb]'}`}
                >
                  All Categories
                </Link>

                {categories.map((c) => (
                  <Link
                    to={`/categories?category=${c.value}`}
                    key={c.value}
                    className={`rounded bg-[#f9fafb] p-3 text-left transition ${selectedCategory === c.value ? ' bg-green-600 text-white' : 'text-[#adb2bb]'}`}
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Products Section */}
            <div className="flex-3 rounded-2xl bg-white p-5 shadow-sm">
              {isLoading ? (
                <p>Loading products...</p>
              ) : products.length === 0 ? (
                <p>No products found!</p>
              ) : (
                <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
                  {products.map((product) => (
                    <ProductCard
                      key={product._id}
                      product={product}
                    ></ProductCard>
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
