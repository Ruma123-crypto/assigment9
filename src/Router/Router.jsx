import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Services from "../Components/Services";
import ServiceCard from "../Components/ServiceCard";
import ServicesCardDetails from "../Pages/ServicesCardDetails";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Authentication from "../Pages/Authentication";
import PrivateRoute from "../Provider/PrivateRoute";
import Loading from "../Components/Loading";
import Profile from "../Components/Profile";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[{
        index:true,
        element:<Home></Home>,
       loader: () => fetch("/services.json"),
       hydrateFallbackElement:<Loading></Loading>
      
    },
    {
      path:'services',
      Component:Services,
      loader: () => fetch("/services.json"),
      hydrateFallbackElement:<Loading></Loading>

    },
    {
      path:'profile',
      Component:Profile
    }
    
  ]
  },
 
  {
    path:'/auth',
    Component:Authentication,
    children:[
      {
    path:'/auth/login',
    Component:Login
  },
  {
    path:'/auth/register',
    Component:Register
  }
    ]
  },
   {
    path:'services/:id',
    element:<PrivateRoute><ServicesCardDetails></ServicesCardDetails></PrivateRoute>,
     loader: () => fetch("/services.json")
  },
 
]);