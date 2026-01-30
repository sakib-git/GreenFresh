import { useState } from 'react';
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
  const axiosSecure = useAxiossecure();

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
      axiosSecure.post('/auth/createaccount', saveUser);
      navigate('/');
    } catch (error) {
      console.error(error);
    } finally {
      setBtnloadin(false);
    }
  };

  return (
    <div className="mt-40 flex items-center justify-center">
      <div className="mx-3 w-full max-w-sm rounded-xl bg-white p-8 shadow-md">
        <h1 className="mb-6 text-center text-2xl font-bold">Register</h1>
        <form
          onSubmit={handleSubmit(handleRegister)}
          className="relative flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Name"
            {...register('name', { required: true })}
            className="rounded-lg border border-gray-300 px-4 py-2 transition focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none"
          />
          {errors.name?.type === 'required' && (
            <p className="text-red-500">Name is required</p>
          )}

          <input
            type="file"
            {...register('photo')}
            className="file-input focus:border-gray-400 focus:outline-none"
          />

          <input
            type="email"
            {...register('email', { required: true })}
            placeholder="Email"
            className="rounded-lg border border-gray-300 px-4 py-2 transition focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none"
          />
          {errors.email?.type === 'required' && (
            <p className="text-sm text-red-600">Email is required</p>
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
            {btnloading ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : (
              'Register'
            )}
          </button>
        </form>
        <Social></Social>
        <p className="mt-4 text-center text-sm text-gray-500">
          Don't have an account?{' '}
          <Link to="/login" className="cursor-pointer text-[#00a63e]">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
