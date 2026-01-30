import { useForm } from 'react-hook-form';
import uploadImageToImgbb from '../../helper/uploadImageToImgbb';
import useAxiossecure from '../../hooks/useAxiossecure';
import { toast } from 'kitzo';

const AddProduct = () => {
  const axiosSecure = useAxiossecure();
  const { register, handleSubmit, reset } = useForm();

  const addproduct = async (data) => {
    const imageFile = data.image[0];

    const imageUrl = await uploadImageToImgbb(imageFile);

    const products = {
      image: imageUrl,
      category: data.category,
      title: data.title,
      bigPrice: data.bigPrice,
      smallPrice: data.smallPrice,
      oldPrice: data.oldPrice,
      description: data.description,
      feature1: data.feature1,
      feature2: data.feature2,
      feature3: data.feature3,
      discount: data.discount,
      rating: data.rating,
    };

    try {
      await axiosSecure.post('/product/postproduct', products);
      toast.success('Product added successfully! ✅');

      reset();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-gray-100 p-4">
      <form onSubmit={handleSubmit(addproduct)}>
        <div className="w-full max-w-3xl space-y-6 rounded-xl bg-white p-6 shadow">
          <h2 className="border-b pb-3 text-2xl font-semibold text-gray-700">
            Add New Product
          </h2>

          {/* Image Upload */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-600">Picture</label>
            <input
              type="file"
              {...register('image', { required: true })}
              className="file-input file-input-bordered w-full outline-none"
            />
          </div>

          {/* Category */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-600">
              Category
            </label>
            <select
              {...register('category', { required: true })}
              className="rounded-md border border-gray-400 p-2 outline-none focus:ring-2 focus:ring-gray-400"
            >
              <option value="">Select a category</option>
              <option value="vegetables">Vegetables</option>
              <option value="fresh-fruits">Fresh Fruits</option>
              <option value="desserts">Desserts</option>
              <option value="drinks-juice">Drinks & Juice</option>
              <option value="fish-meats">Fish & Meats</option>
              <option value="pets-animals">Pets & Animals</option>
            </select>
          </div>

          {/* Title */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-600">Title</label>
            <input
              type="text"
              {...register('title')}
              placeholder="Product title"
              className="rounded-md border border-gray-400 p-2 outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          {/* Prices */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-600">
                Big Price
              </label>
              <input
                type="text"
                {...register('bigPrice')}
                placeholder="Big price"
                className="rounded-md border border-gray-400 p-2 outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-600">
                Small Price
              </label>
              <input
                type="text"
                {...register('smallPrice')}
                placeholder="Small price"
                className="rounded-md border border-gray-400 p-2 outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-600">
                Old Price
              </label>
              <input
                type="text"
                {...register('oldPrice')}
                placeholder="Old price"
                className="rounded-md border border-gray-400 p-2 outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
          </div>

          {/* Description */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-600">
              Description
            </label>
            <textarea
              rows="3"
              {...register('description')}
              placeholder="Product description"
              className="rounded-md border border-gray-400 p-2 outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          {/* Feature List */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <input
              type="text"
              {...register('feature1')}
              placeholder="Feature one"
              className="rounded-md border border-gray-400 p-2 outline-none focus:ring-2 focus:ring-gray-400"
            />
            <input
              type="text"
              {...register('feature2')}
              placeholder="Feature two"
              className="rounded-md border border-gray-400 p-2 outline-none focus:ring-2 focus:ring-gray-400"
            />
            <input
              type="text"
              {...register('feature3')}
              placeholder="Feature three"
              className="rounded-md border border-gray-400 p-2 outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-600">rating </label>
            <input
              type="text"
              {...register('rating')}
              placeholder="rating"
              className="rounded-md border border-gray-400 p-2 outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
          {/* Discount */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-600">
              Discount Percent
            </label>
            <input
              type="text"
              {...register('discount')}
              placeholder="%....."
              className="rounded-md border border-gray-400 p-2 outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          {/* Button */}
          <div className="flex justify-end">
            <button className="rounded-md bg-green-500 px-6 py-2 text-white transition hover:bg-green-600">
              Add Product
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
