import React from 'react';
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
      rating:data.rating
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
    <div className=" bg-gray-100  p-4">
      <form onSubmit={handleSubmit(addproduct)}>
        <div className="w-full max-w-3xl bg-white rounded-xl shadow p-6 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-700 border-b pb-3">Add New Product</h2>

          {/* Image Upload */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-600">Picture</label>
            <input type="file" {...register('image', { required: true })} className="file-input file-input-bordered w-full outline-none  " />
          </div>

          {/* Category */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-600">Category</label>
            <select {...register('category', { required: true })} className="border border-gray-400 rounded-md p-2 outline-none  focus:ring-2 focus:ring-gray-400">
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
            <input type="text" {...register('title')} placeholder="Product title" className="border border-gray-400 rounded-md p-2 outline-none  focus:ring-2 focus:ring-gray-400" />
          </div>

          {/* Prices */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-600">Big Price</label>
              <input type="text" {...register('bigPrice')} placeholder="Big price" className="border border-gray-400 rounded-md p-2 outline-none  focus:ring-2 focus:ring-gray-400" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-600">Small Price</label>
              <input type="text" {...register('smallPrice')} placeholder="Small price" className="border border-gray-400 rounded-md p-2 outline-none  focus:ring-2 focus:ring-gray-400" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-600">Old Price</label>
              <input type="text" {...register('oldPrice')} placeholder="Old price" className="border border-gray-400 rounded-md p-2 outline-none  focus:ring-2 focus:ring-gray-400" />
            </div>
          </div>

          {/* Description */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-600">Description</label>
            <textarea rows="3" {...register('description')} placeholder="Product description" className="border border-gray-400 rounded-md p-2 outline-none  focus:ring-2 focus:ring-gray-400" />
          </div>

          {/* Feature List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input type="text" {...register('feature1')} placeholder="Feature one" className="border border-gray-400 rounded-md p-2 outline-none  focus:ring-2 focus:ring-gray-400" />
            <input type="text" {...register('feature2')} placeholder="Feature two" className="border border-gray-400 rounded-md p-2 outline-none  focus:ring-2 focus:ring-gray-400" />
            <input type="text" {...register('feature3')} placeholder="Feature three" className="border border-gray-400 rounded-md p-2 outline-none  focus:ring-2 focus:ring-gray-400" />
          </div>

        
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-600">rating </label>
            <input type="text" {...register('rating')} placeholder="rating" className="border border-gray-400 rounded-md p-2 outline-none  focus:ring-2 focus:ring-gray-400" />
          </div>
            {/* Discount */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-600">Discount Percent</label>
            <input type="text" {...register('discount')} placeholder="%....." className="border border-gray-400 rounded-md p-2 outline-none  focus:ring-2 focus:ring-gray-400" />
          </div>

          {/* Button */}
          <div className="flex justify-end">
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md transition">Add Product</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
