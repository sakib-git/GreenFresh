import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiossecure from '../Hooks/useAxiossecure';
import { useParams } from 'react-router';
import { RxCheckCircled } from 'react-icons/rx';

const ViewDetails = () => {
  const axiosSecure = useAxiossecure();
  const { id } = useParams();
  const { data: products = [], isLoading } = useQuery({
    queryKey: ['products', id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/product/getSingleProduct/${id}`);
      return res.data;
    },
  });
  const { image, title, bigPrice, smallPrice, oldPrice, discount, rating, category, description, feature1, feature2, feature3 } = products;
if (isLoading) {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <span className="loading loading-spinner loading-lg text-green-600"></span>
    </div>
  );
}

  return (
    <div>
     <div className='max-w-350 mx-auto '>
       <div className='flex gap-4'>
         <img src={image} alt="" />
         <div>
          <p className='text-[#29a63e]'>{category}</p>
          <h3 >{title}</h3>
          <p>{rating}</p>
          <div>
            <span className='text-[#312c85]'>${smallPrice}</span>
            <span className='line-through'>${oldPrice}</span>
            <p>{description}</p>
            <span><RxCheckCircled className="text-green-600" /> {feature1}</span>
            <span><RxCheckCircled /> {feature3}</span>
            <span><RxCheckCircled /> {feature3}</span>
          </div>
         </div>
       </div>
     </div>
    </div>
  );
};

export default ViewDetails;
