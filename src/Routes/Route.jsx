import { createBrowserRouter } from 'react-router';
import Home from '../pages/Home/Home';
import RootLayout from '../Layout/RootLayout';
import AuthLayout from '../Layout/AuthLayout';
import Register from '../pages/Auth/Register';
import LoveSave from '../pages/LoveSave/LoveSave';
import Addtocart from '../pages/AddtoCart/Addtocart';
import AllCategories from '../pages/Allcategories/AllCategories';
import About from '../pages/About/About';
import Service from '../pages/Service/Service';
import Contact from '../pages/Contact/Contact';
import Dashboard from '../pages/Dashboard/Dashboard';
import DashboardLayout from '../Layout/DashboardLayout';
import Order from '../pages/Dashboard/Order';
import PrivateRoute from './PrivateRoute';
import AuthPrivate from './AuthPrivate';
import AdminDashboard from '../pages/Admin/AdminDashboard';
import ManageUser from '../pages/Admin/ManageUser';
import Error from '../Components/Error';
import ContactUser from '../pages/Admin/ContactUser';
import AddProduct from '../pages/Admin/AddProduct';
import ViewDetails from '../Components/ViewDetails';
import AuthProvider from '../context/AuthProvider';
import Login from './../pages/Auth/Login';

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
