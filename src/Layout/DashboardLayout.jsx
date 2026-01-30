import { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router';
import { FiMenu, FiX } from 'react-icons/fi';
import { useQuery } from '@tanstack/react-query';
import useAxiossecure from '../hooks/useAxiossecure';
import useAuth from '../hooks/useAuth';
import { Toaster } from 'kitzo';

const DashboardLayout = () => {
  const [open, setOpen] = useState(false);
  const axiosSecure = useAxiossecure();
  const { user, loading } = useAuth();

  const { data: dbUser, isLoading } = useQuery({
    queryKey: ['dbUser', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/auth/getuser/${user?.email}`);
      return res.data;
    },
  });

  if (loading || isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Mobile overlay */}
      {open && <div onClick={() => setOpen(false)} className="fixed inset-0 bg-black/40 z-30 lg:hidden"></div>}

      <aside
        className={`
          fixed lg:static z-40
          w-64 bg-gray-800 text-white p-5
          h-full lg:h-auto
          transform transition-transform duration-300
          ${open ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0
        `}
      >
        <div className="flex items-center justify-between mb-6">
          <Link to="/">
            <div className="flex items-center gap-2   rounded-full px-4 py-2 w-fit  ">
              <span className="font-semibold  text-lg max-sm:text-sm">GreenFresh</span>
            </div>
          </Link>
          <button className="lg:hidden text-2xl" onClick={() => setOpen(false)}>
            <FiX />
          </button>
        </div>

        <div className="flex flex-col">
          {dbUser?.role === 'admin' && (
            <>
              <Link to="/dashboardlayout/admindashobard">Dashboard</Link>
              <Link to="/dashboardlayout/manageusers">Manage Users</Link>
              <Link to="/dashboardlayout/contactusers">Contact Users</Link>
              <Link to="/dashboardlayout/addproduct">Add products</Link>
            </>
          )}
          {dbUser?.role === 'user' && (
            <>
              <Link to="/dashboardlayout/dashoboard">Dashboard</Link>
              <Link to="/dashboardlayout/order">Order</Link>
            </>
          )}
        </div>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="lg:hidden  shadow px-4 py-3 flex items-center">
          <button className="text-2xl" onClick={() => setOpen(true)}>
            <FiMenu />
          </button>
          <h1 className="ml-4 font-semibold">Dashboard</h1>
        </header>

        <main className="flex-1 p-5">
          <Outlet />
        </main>
      </div>
      <Toaster richColors="#00a63e" position="top-right"></Toaster>
    </div>
  );
};

export default DashboardLayout;
