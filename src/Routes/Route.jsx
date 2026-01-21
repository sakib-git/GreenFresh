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
        path:'/allcategories',
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
    ],
  },
  {
    path:'/',
    element: <AuthLayout></AuthLayout>,
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
  }
]);
