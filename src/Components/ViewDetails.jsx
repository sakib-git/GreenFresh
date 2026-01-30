import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { FaCircleCheck } from 'react-icons/fa6';
import { CiHeart } from 'react-icons/ci';
import { LuRefreshCcw } from 'react-icons/lu';
import useAuth from '../hooks/useAuth';
import useAxiossecure from '../hooks/useAxiossecure';

const ViewDetails = () => {
  const axiosSecure = useAxiossecure();
  const { user } = useAuth();
  const { id } = useParams();

  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['products', id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/product/getSingleProduct/${id}`);
      return res.data;
    },
  });
  const {
    image,
    title,
    smallPrice,
    oldPrice,
    discount,
    rating,
    category,
    description,
    feature1,
    feature2,
    feature3,
  } = products;

  const handleCart = async (product) => {
    const cart = {
      title: product.title,
      price: product.smallPrice,
      image: product.image,
      category: product.category,
      userEmail: user?.email,
      quantity: 1,
    };
    try {
      const res = await axiosSecure.post(
        '/addtocart/addToCartCollection',
        cart,
      );
      refetch();
    } catch (error) {
      console.error('Add to cart failed:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <span className="loading loading-spinner loading-lg text-green-600"></span>
      </div>
    );
  }

  return (
    <div className="mx-3">
      <div className="mx-auto my-10 max-w-350 bg-white">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <div className="relative rounded-md">
            <img src={image} alt={title} className="h-120 w-full rounded-md" />

            <span className="absolute top-4 left-3 rounded-full bg-[#ff32a5] px-3 py-1 text-[12px] font-bold text-white">
              -{discount}%
            </span>
          </div>

          <div className="flex flex-col space-y-6">
            <div>
              <span className="rounded-full bg-[#e9f6eb] px-3 py-1 text-sm font-semibold tracking-wide text-[#29a63e] uppercase">
                {category}
              </span>
              <h1 className="mt-4 text-4xl leading-tight font-bold text-gray-900">
                {title}
              </h1>

              <div className="mb-3 flex items-center gap-1">
                {[1, 2, 3, 4].map((star) => (
                  <span key={star} className="text-[#ffb300]">
                    ★
                  </span>
                ))}
                <span className="text-gray-300">★</span>
                <span className="text-sm text-gray-500">
                  ({rating} Customer Reviews)
                </span>
              </div>
            </div>

            <div className="flex items-baseline gap-4">
              <span className="text-4xl font-bold text-[#312c85]">
                ${smallPrice}
              </span>
              <span className="text-xl text-gray-400 line-through">
                ${oldPrice}
              </span>
            </div>

            <p className="pb-6 text-lg leading-relaxed text-gray-600">
              {description}
            </p>

            <hr className="text-[#d4d9df]" />

            <div className="grid grid-cols-1 gap-3 py-2 md:grid-cols-2">
              {[feature1, feature2, feature3].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <FaCircleCheck className="text-lg text-green-600" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-6">
              <div className="flex items-center rounded-2xl border border-gray-200 bg-gray-50 p-2">
                <button className="rounded-lg p-2 transition-all hover:bg-white">
                  -
                </button>
                <span className="px-6 text-lg font-semibold">1</span>
                <button className="rounded-lg p-2 transition-all hover:bg-white">
                  +
                </button>
              </div>

              <button
                onClick={() => handleCart(products)}
                className="flex flex-1 transform items-center justify-center gap-3 rounded-2xl bg-[#00c662] px-8 py-4 text-lg font-bold text-white shadow-lg shadow-green-100 transition-all duration-300 hover:bg-[#00a852] active:scale-95"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="8" cy="21" r="1" />
                  <circle cx="19" cy="21" r="1" />
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                </svg>
                <span className="max-md:hidden"> Add to Cart</span>
              </button>
              <div className="flex gap-4 pt-2">
                <button className="flex items-center gap-2 rounded-xl border border-gray-100 px-4 py-2 font-medium text-gray-600 transition-colors hover:text-red-500">
                  <CiHeart className="text-2xl" />
                </button>
                <button className="flex items-center gap-2 rounded-xl border border-gray-100 px-4 py-2 font-medium text-gray-600 transition-colors hover:text-blue-600">
                  <LuRefreshCcw className="text-xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
