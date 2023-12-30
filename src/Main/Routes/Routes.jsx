import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/About/About";
import SignIn from "../Pages/Login/SignIn";
import SignUp from "../Pages/Login/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About />,
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
//   {
//     path: "/dashboard",
//     element: <DashboardLayout />,

//     children: [
//       {
//         path: "/dashboard",
//         element: <Dashboard></Dashboard>,
//       },
//       {
//         path: "/dashboard/booking-place",
//         element: <BookingPlace />,
//       },
//       {
//         path: "/dashboard/favorite-place",
//         element: <FavoritePlace />,
//       },
//       {
//         path: "/dashboard/dislike-place",
//         element: <DislikePlace />,
//       },
//       {
//         path: "/dashboard/allUsers",
//         element: <AllUsers />,
//       },
//       {
//         path: "/dashboard/allReportPlace",
//         element: <AllReportPlaces />,
//       },
//       {
//         path: "/dashboard/allBookedPlace",
//         element: <AllBookedPlace />,
//       },
//       {
//         path: "/dashboard/AllPlace",
//         element: <AllPlaces />,
//       },
//     ],
//   },
]);
