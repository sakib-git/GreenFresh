import { createBrowserRouter } from 'react-router';
import Home from '../pages/home/Home';
import RootLayout from '../layout/RootLayout';
import AuthLayout from '../layout/AuthLayout';
import Register from '../pages/auth/Register';
import LoveSave from '../pages/loveSave/LoveSave';
import Addtocart from '../pages/addtoCart/Addtocart';
import AllCategories from '../pages/allcategories/AllCategories';
import About from '../pages/about/About';
import Service from '../pages/service/Service';
import Contact from '../pages/contact/Contact';
import Dashboard from '../pages/dashboard/Dashboard';
import DashboardLayout from '../layout/DashboardLayout';
import Order from '../pages/dashboard/Order';
import PrivateRoute from './PrivateRoute';
import AuthPrivate from './AuthPrivate';
import AdminDashboard from '../pages/admin/AdminDashboard';
import ManageUser from '../pages/admin/ManageUser';
import Error from '../components/Error';
import ContactUser from '../pages/admin/ContactUser';
import AddProduct from '../pages/admin/AddProduct';
import ViewDetails from '../components/ViewDetails';
import Login from '../pages/auth/Login';
import AuthProvider from '../context/AuthProvider';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AuthProvider>
        <RootLayout></RootLayout>
      </AuthProvider>
    ),
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: '/lovesave',
        element: <LoveSave></LoveSave>,
      },
      {
        path: '/addtocart',
        element: <Addtocart></Addtocart>,
      },
      {
        path: '/categories',
        element: <AllCategories></AllCategories>,
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/service',
        element: <Service></Service>,
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
      },
      {
        path: '/details/:id',
        element: <ViewDetails></ViewDetails>,
      },
    ],
  },
  {
    path: '/',
    element: (
      <AuthProvider>
        <AuthPrivate>
          <AuthLayout />
        </AuthPrivate>
      </AuthProvider>
    ),
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
  {
    path: '/dashboardlayout',
    element: (
      <AuthProvider>
        <PrivateRoute>
          <DashboardLayout />
        </PrivateRoute>
      </AuthProvider>
    ),
    children: [
      {
        path: '/dashboardlayout/dashoboard',
        element: <Dashboard></Dashboard>,
      },
      {
        path: '/dashboardlayout/order',
        element: <Order></Order>,
      },
      //admin
      {
        path: '/dashboardlayout/admindashobard',
        element: <AdminDashboard></AdminDashboard>,
      },
      {
        path: '/dashboardlayout/manageusers',
        element: <ManageUser></ManageUser>,
      },
      {
        path: '/dashboardlayout/contactusers',
        element: <ContactUser></ContactUser>,
      },
      {
        path: '/dashboardlayout/addproduct',
        element: <AddProduct></AddProduct>,
      },
    ],
  },
  {
    path: '/*',
    element: <Error></Error>,
  },
]);
