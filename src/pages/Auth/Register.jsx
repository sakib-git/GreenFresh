import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { Link, useNavigate } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Social from './Social';
import uploadImageToImgbb from '../../helper/uploadImageToImgbb';
import { updateProfile } from 'firebase/auth';
import useAxiossecure from '../../hooks/useAxiossecure';

const Register = () => {
  const [showPassword, setShowpasswor] = useState(false);
  const [btnloading, setBtnloadin] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { registerUser } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiossecure()

  const handleRegister = async (data) => {
    try {
      setBtnloadin(true);

      const result = await registerUser(data.email, data.password);
      const currentUser = result.user;

      const imageFile = data.photo[0];

      const imageUrl = await uploadImageToImgbb(imageFile);

      await updateProfile(currentUser, {
        displayName: data.name,
        photoURL: imageUrl,
      });
      const saveUser = {
      displayName: data.name,
      email: data.email,
      photoURL: imageUrl,
    };
axiosSecure.post('/auth/createaccount', saveUser)
      navigate('/');
    } catch (error) {
      console.error(error);
    } finally {
      setBtnloadin(false);
    }
  };

  return (
    <div className="mt-40 flex items-center justify-center ">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm mx-3">
        <h1 className="text-2xl font-bold text-center mb-6">Register</h1>
        <form onSubmit={handleSubmit(handleRegister)} className="flex flex-col gap-4 relative">
          <input type="text" placeholder="Name" {...register('name', { required: true })} className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition" />
          {errors.name?.type === 'required' && <p className="text-red-500">Name is required</p>}

          <input type="file" {...register('photo')} className="file-input  focus:outline-none focus:border-gray-400  " />

          <input type="email" {...register('email', { required: true })} placeholder="Email" className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition" />
          {errors.email?.type === 'required' && <p className="text-sm text-red-600">Email is required</p>}

          <input type={showPassword ? 'text' : 'password'} placeholder="Password" {...register('password', { required: true, minLength: 6 })} className="rounded-md border border-[#c9c9c9] px-2 py-2 transition focus:border-[#c9c9c9] focus:ring-2 focus:ring-[#c9c9c9] focus:outline-none" />
          <span onClick={() => setShowpasswor(!showPassword)} className="absolute bottom-16 right-4">
            {showPassword ? <IoMdEye size={20} /> : <IoMdEyeOff size={20} />}
          </span>
          {errors.email?.type === 'required' && <p className="text-sm text-red-600">password is required</p>}
          {errors.password?.type === 'minLength' && <p className="text-sm text-red-600">password must be 6 characters or longer</p>}

          <button type="submit" className="bg-[#00a63e] text-white font-semibold py-2 rounded-lg hover:bg-green-500 transition flex items-center justify-center">
            {btnloading ? <span className="loading loading-spinner loading-sm"></span> : 'Register'}
          </button>
        </form>
        <Social></Social>
        <p className="text-sm text-gray-500 text-center mt-4">
          Don't have an account?{' '}
          <Link to="/login" className="text-[#00a63e] cursor-pointer">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
