import { useState } from 'react';
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
    <div className="mt-40 flex items-center justify-center">
      <div className="mx-3 w-full max-w-sm rounded-xl bg-white p-8 shadow-md">
        <h1 className="mb-6 text-center text-2xl font-bold">Login</h1>
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="relative flex flex-col gap-4"
        >
          <input
            type="email"
            placeholder="Email"
            {...register('email', { required: true })}
            className="rounded-lg border border-gray-300 px-4 py-2 transition focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none"
          />
          {errors.email?.type === 'required' && (
            <p className="text-red-500">email is required</p>
          )}

          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            {...register('password', { required: true, minLength: 6 })}
            className="rounded-md border border-[#c9c9c9] px-2 py-2 transition focus:border-[#c9c9c9] focus:ring-2 focus:ring-[#c9c9c9] focus:outline-none"
          />
          <span
            onClick={() => setShowpasswor(!showPassword)}
            className="absolute right-4 bottom-16"
          >
            {showPassword ? <IoMdEye size={20} /> : <IoMdEyeOff size={20} />}
          </span>
          {errors.email?.type === 'required' && (
            <p className="text-sm text-red-600">password is required</p>
          )}
          {errors.password?.type === 'minLength' && (
            <p className="text-sm text-red-600">
              password must be 6 characters or longer
            </p>
          )}

          <button
            type="submit"
            className="flex items-center justify-center rounded-lg bg-[#00a63e] py-2 font-semibold text-white transition hover:bg-green-500"
          >
            {btnLoading ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : (
              'Login'
            )}
          </button>
        </form>
        <Social></Social>
        <p className="mt-4 text-center text-sm text-gray-500">
          Don't have an account?{' '}
          <Link to="/register" className="cursor-pointer text-[#00a63e]">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
