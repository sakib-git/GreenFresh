import { createBrowserRouter } from 'react-router';
import Home from '../pages/Home/Home';
import RootLayout from '../Layout/rootLayout';
import AuthLayout from '../Layout/AuthLayout';
import Login from '../pages/Auth/login';
import Register from '../pages/Auth/register';
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



export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: '/lovesave',
        element:<LoveSave></LoveSave>
      },
      {
        path:'/addtocart',
        element: <Addtocart></Addtocart>
      },
      {
        path:'/categories',
        element: <AllCategories></AllCategories>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/service',
        element:<Service></Service>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/details/:id',
        element:<ViewDetails></ViewDetails>
      },
    ],
  },
  {
    path:'/',
    element: <AuthPrivate>
      <AuthLayout></AuthLayout>
    </AuthPrivate>,
    children: [
      {
        path:'/login',
        element: <Login></Login>
      },
      {
     path: '/register',
     element: <Register></Register>
      }
    ]
  },
  {
    path:'/dashboardlayout',
    element:
    <PrivateRoute>
      <DashboardLayout></DashboardLayout>
    </PrivateRoute>,
    children: [
    
      {
        path:'/dashboardlayout/dashoboard',
        element: <Dashboard></Dashboard>
      },
      {
        path:'/dashboardlayout/order',
        element: <Order></Order>
      },
      //admin
      {
        path: '/dashboardlayout/admindashobard',
        element: <AdminDashboard></AdminDashboard>
      },
      {
        path:'/dashboardlayout/manageusers',
        element: <ManageUser></ManageUser>
      },
      {
        path:'/dashboardlayout/contactusers',
        element: <ContactUser></ContactUser>
      },
      {
        path:'/dashboardlayout/addproduct',
        element: <AddProduct></AddProduct>
      }
    ]
  },
  {
    path:'/*',
    element: <Error></Error>
  }
]);
