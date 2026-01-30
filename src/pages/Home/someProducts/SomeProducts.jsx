import React from 'react';
import useAxiossecure from '../../../Hooks/useAxiossecure';
import { useQuery } from '@tanstack/react-query';
import ProductCard from './../../../Components/ProductCard';
import { NavLink } from 'react-router';

const SomeProducts = () => {
  const axiosSecure = useAxiossecure();
  const { data: product = [] } = useQuery({
    queryKey: ['productssome'],
    queryFn: async () => {
      const res = await axiosSecure.get('/product/getproduct');
      return res.data;
    },
  });
  console.log(product)
  return (
    <div className="mx-3">
      <div className="max-w-350 mx-auto py-10">
        <p className="text-green-600 py-2">Our Collection</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {product.slice(0, 8).map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div>
      </div>
    <div className="text-center bg-[#432dd7] font-bold text-[18px] py-3 w-fit px-5 text-white rounded-full mx-auto mb-5 hover:bg-[#372aac]">
        <NavLink to='/categories' >See All Products</NavLink>
    </div>
    </div>
  );
};

export default SomeProducts;
