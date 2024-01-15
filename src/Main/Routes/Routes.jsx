import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import SignIn from "../Pages/Login/SignIn";
import SignUp from "../Pages/Login/SignUp/SignUp";
import Products from "../Pages/Products/Products/Products";
import SingleProduct from "../Pages/Home/AllProductsSection/SingleProduct";
import DashboardLayout from "../Layout/DashboardLayout/DashboardLayout";
import Dashboard from "../Dashboard/Dashboard/Dashboard";
import BookingOrders from "../Dashboard/BookingOrders/BookingOrders";
import ErrorPage from "../SharedPage/ErrorPage/ErrorPage";
import FavoriteOrders from "../Dashboard/FavoriteOrders/FavoriteOrders";
import ReportProducts from "../Dashboard/ReportProducts/ReportProducts";
import About from "../Pages/About/About/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <SingleProduct />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      //   {
      //     path: "/productDetails/:id",
      //     element: <ProductDetails />,
      //   },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,

    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/booking-orders",
        element: <BookingOrders />,
      },
      {
        path: "/dashboard/favorite-orders",
        element: <FavoriteOrders />,
      },
      {
        path: "/dashboard/reports-orders",
        element: <ReportProducts />,
      },
      // {
      //   path: "/dashboard/allUsers",
      //   element: <AllUsers />,
      // },
      // {
      //   path: "/dashboard/allReportPlace",
      //   element: <AllReportPlaces />,
      // },
      // {
      //   path: "/dashboard/allBookedPlace",
      //   element: <AllBookedPlace />,
      // },
      // {
      //   path: "/dashboard/AllPlace",
      //   element: <AllPlaces />,
      // },
    ],
  },
]);
