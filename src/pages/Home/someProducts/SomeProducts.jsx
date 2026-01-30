import useAxiossecure from '../../../hooks/useAxiossecure';
import { useQuery } from '@tanstack/react-query';
import ProductCard from '../../../components/ProductCard';
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
  console.log(product);
  return (
    <div className="mx-3">
      <div className="mx-auto max-w-350 py-10">
        <p className="py-2 text-green-600">Our Collection</p>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {product.slice(0, 8).map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div>
      </div>
      <div className="mx-auto mb-5 w-fit rounded-full bg-[#432dd7] px-5 py-3 text-center text-[18px] font-bold text-white hover:bg-[#372aac]">
        <NavLink to="/categories">See All Products</NavLink>
      </div>
    </div>
  );
};

export default SomeProducts;
