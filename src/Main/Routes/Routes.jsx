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
import PrivetRoute from "./PrivetRoute";
import AllUsers from "../Dashboard/AllUsers/AllUsers";
import AllOrders from "../Dashboard/AllOrders/AllOrders";
import AllFavorites from "../Dashboard/AllFavorites/AllFavorites";
import AllReports from "../Dashboard/AllReports/AllReports";
import AdminRoutes from "./AdminRoutes";

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
        element: <About />,
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
    element: (
      <PrivetRoute>
        <DashboardLayout />
      </PrivetRoute>
    ),

    children: [
      {
        path: "/dashboard",
        element: (
          <PrivetRoute>
            <Dashboard></Dashboard>
          </PrivetRoute>
        ),
      },
      {
        path: "/dashboard/booking-orders",
        element: (
          <PrivetRoute>
            <BookingOrders />
          </PrivetRoute>
        ),
      },
      {
        path: "/dashboard/favorite-orders",
        element: (
          <PrivetRoute>
            <FavoriteOrders />
          </PrivetRoute>
        ),
      },
      {
        path: "/dashboard/reports-orders",
        element: (
          <PrivetRoute>
            <ReportProducts />
          </PrivetRoute>
        ),
      },
      {
        path: "/dashboard/allUsers",
        element: (
          <PrivetRoute>
            <AdminRoutes>
              <AllUsers />
            </AdminRoutes>
          </PrivetRoute>
        ),
      },
      {
        path: "/dashboard/AllOrders/:id",
        element: (
          <PrivetRoute>
            <PrivetRoute>
              <AllOrders />
            </PrivetRoute>
          </PrivetRoute>
        ),
      },
      {
        path: "/dashboard/allFavorites/:id",
        element: (
          <PrivetRoute>
            <AdminRoutes>
              <AllFavorites />
            </AdminRoutes>
          </PrivetRoute>
        ),
      },
      {
        path: "/dashboard/allReports/:id",
        element: (
          <PrivetRoute>
            <AdminRoutes>
              <AllReports />
            </AdminRoutes>
          </PrivetRoute>
        ),
      },
    ],
  },
]);
