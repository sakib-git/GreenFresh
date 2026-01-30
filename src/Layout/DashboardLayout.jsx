import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
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
    <div className="flex min-h-screen bg-gray-100">
      {/* Mobile overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
        ></div>
      )}

      <aside
        className={`fixed z-40 h-full w-64 transform bg-gray-800 p-5 text-white transition-transform duration-300 lg:static lg:h-auto ${open ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
      >
        <div className="mb-6 flex items-center justify-between">
          <Link to="/">
            <div className="flex w-fit items-center gap-2 rounded-full px-4 py-2">
              <span className="text-lg font-semibold max-sm:text-sm">
                GreenFresh
              </span>
            </div>
          </Link>
          <button className="text-2xl lg:hidden" onClick={() => setOpen(false)}>
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

      <div className="flex flex-1 flex-col">
        <header className="flex items-center px-4 py-3 shadow lg:hidden">
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
