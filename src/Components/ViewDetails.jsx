import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
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
  const { image, title, smallPrice, oldPrice, discount, rating, category, description, feature1, feature2, feature3 } = products;

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
      const res = await axiosSecure.post('/addtocart/addToCartCollection', cart);
      refetch();
    } catch (error) {
      console.error('Add to cart failed:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg text-green-600"></span>
      </div>
    );
  }

  return (
    <div className="mx-3">
      <div className="max-w-350 mx-auto  bg-white my-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className=" rounded-md relative">
            <img src={image} alt={title} className="w-full h-120 rounded-md " />

            <span className="bg-[#ff32a5] top-4 left-3 absolute text-white text-[12px] font-bold px-3 py-1 rounded-full">-{discount}%</span>
          </div>

          <div className="flex flex-col space-y-6">
            <div>
              <span className="bg-[#e9f6eb] text-[#29a63e] px-3 py-1 rounded-full text-sm font-semibold uppercase tracking-wide">{category}</span>
              <h1 className="text-4xl font-bold text-gray-900 mt-4 leading-tight">{title}</h1>

              <div className="flex items-center gap-1 mb-3">
                {[1, 2, 3, 4].map((star) => (
                  <span key={star} className="text-[#ffb300]">
                    ★
                  </span>
                ))}
                <span className="text-gray-300">★</span>
                <span className="text-gray-500 text-sm">({rating} Customer Reviews)</span>
              </div>
            </div>

            <div className="flex items-baseline gap-4">
              <span className="text-4xl font-bold text-[#312c85]">${smallPrice}</span>
              <span className="text-xl text-gray-400 line-through">${oldPrice}</span>
            </div>

            <p className="text-gray-600 leading-relaxed text-lg  pb-6">{description}</p>

            <hr className="text-[#d4d9df]" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 py-2">
              {[feature1, feature2, feature3].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-700">
                  <FaCircleCheck className="text-green-600 text-lg" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-6">
              <div className="flex items-center border border-gray-200 rounded-2xl p-2 bg-gray-50">
                <button className="p-2 hover:bg-white rounded-lg transition-all">-</button>
                <span className="px-6 font-semibold text-lg">1</span>
                <button className="p-2 hover:bg-white rounded-lg transition-all">+</button>
              </div>

              <button onClick={() => handleCart(products)} className="flex-1 flex items-center justify-center gap-3 py-4 px-8 rounded-2xl bg-[#00c662] text-white font-bold text-lg hover:bg-[#00a852] shadow-lg shadow-green-100 transition-all duration-300 transform active:scale-95">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="8" cy="21" r="1" />
                  <circle cx="19" cy="21" r="1" />
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                </svg>
                <span className="max-md:hidden"> Add to Cart</span>
              </button>
              <div className="flex gap-4 pt-2">
                <button className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors font-medium border border-gray-100 px-4 py-2 rounded-xl">
                  <CiHeart className="text-2xl" />
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors font-medium border border-gray-100 px-4 py-2 rounded-xl">
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
