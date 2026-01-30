import { Link, Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <div className="min-h-screen overflow-auto bg-gray-100">
      <Link
        to="/"
        className="mt-10 ml-10 block text-4xl font-bold text-[#372aac] max-md:text-3xl"
      >
        GreenFresh
      </Link>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;
