import useAxiossecure from '../../hooks/useAxiossecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../hooks/useAuth';
import { RiDeleteBin6Line } from 'react-icons/ri';

const Addtocart = () => {
  const axiosSecure = useAxiossecure();
  const { user } = useAuth();
  const { data: carts = [], refetch } = useQuery({
    queryKey: ['cart', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/addtocart/getCartByEmail?email=${user?.email}`,
      );

      return res.data;
    },
  });
  const total = carts.reduce((acc, curr) => acc + parseFloat(curr.price), 0);
  const handleDelete = async (id) => {
    try {
      await axiosSecure.delete(`/addtocart/getCartByEmail/${id}`);
      refetch();
    } catch (error) {
      console.error('Delete failed:', error);
    }
  };

  return (
    <div className="mx-3">
      <div className="mx-auto my-10 flex max-w-350 gap-4 max-md:flex-col">
        <div className="flex-2 space-y-4 rounded-xl">
          {carts.map((cart) => (
            <div
              key={cart._id}
              className="rounded-xl bg-white p-4 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <img
                  src={cart.image}
                  className="h-20 w-20 rounded-lg object-cover"
                  alt={cart.title}
                />

                <div className="flex-1 space-y-1">
                  <p className="text-xs text-gray-400 uppercase">
                    {cart.category}
                  </p>
                  <p className="text-sm font-semibold text-gray-700">
                    {cart.title}
                  </p>
                  <p className="text-xs text-gray-500">
                    Quantity:{' '}
                    <span className="font-medium">{cart.quantity}</span>
                  </p>
                </div>

                <p className="text-lg font-bold text-green-600">
                  ${cart.price}
                </p>
              </div>

              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => handleDelete(cart._id)}
                  className="text-sm text-red-500 transition hover:text-red-600 hover:underline"
                >
                  <RiDeleteBin6Line />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="h-fit flex-1 space-y-6 rounded-2xl bg-white p-5 shadow">
          <h4 className="text-2xl font-bold">Order Summary</h4>
          <p className="font-semibold">Total: {total}</p>

          <div className="text-center">
            <button className="rounded-full bg-[#00a63e] px-5 py-3 font-bold text-white">
              Checkout Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addtocart;
