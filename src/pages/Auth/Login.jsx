import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import Social from './Social';

const Login = () => {
  const [showPassword, setShowpasswor] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { loginUser } = useAuth();
  const navigate = useNavigate();
  const handleLogin = (data) => {
    setBtnLoading(true);
    loginUser(data.email, data.password).then(() => {
      navigate('/');
    });
  };
  return (
    <div className=" flex items-center justify-center mt-40  ">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm mx-3">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
        <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col gap-4 relative">
          <input type="email" placeholder="Email" {...register('email', { required: true })} className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition" />
          {errors.email?.type === 'required' && <p className="text-red-500">email is required</p>}

          <input type={showPassword ? 'text' : 'password'} placeholder="Password" {...register('password', { required: true, minLength: 6 })} className="rounded-md border border-[#c9c9c9] px-2 py-2 transition focus:border-[#c9c9c9] focus:ring-2 focus:ring-[#c9c9c9] focus:outline-none" />
          <span onClick={() => setShowpasswor(!showPassword)} className="absolute bottom-16 right-4">
            {showPassword ? <IoMdEye size={20} /> : <IoMdEyeOff size={20} />}
          </span>
          {errors.email?.type === 'required' && <p className="text-sm text-red-600">password is required</p>}
          {errors.password?.type === 'minLength' && <p className="text-sm text-red-600">password must be 6 characters or longer</p>}

          <button type="submit"  className="bg-[#00a63e] text-white font-semibold py-2 rounded-lg hover:bg-green-500 transition flex items-center justify-center">
            {btnLoading ? <span className="loading loading-spinner loading-sm"></span> : 'Login'}
          </button>
        </form>
        <Social></Social>
        <p className="text-sm text-gray-500 text-center mt-4">
          Don't have an account?{' '}
          <Link to="/register" className="text-[#00a63e] cursor-pointer">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
