// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Header from '../../SharedPage/Header';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    // console.log(user);
    // const [isAdmin] = useAdmin(user?.email);
    const isAdmin = "dkdsksl";
    console.log(isAdmin);
    return (
      <div className="bg-white">
        <Header />
        <div className="drawer lg:drawer-open w-11/12 mx-auto">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content ">
            {/* Page content here */}
            {/* <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              Open drawer
            </label> */}
            <Outlet />
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>

            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              <div className=" mb-5">
                <div className="flex justify-center my-2">
                  <img
                    className="h-16 w-16 cursor-pointer  text-center border-4 p-1 border-[#F01543] rounded-full"
                    src={user?.photoURL}
                    alt=""
                  />
                </div>
                <div className="my-2 text-center ">
                  <h4 className="font-bold text-[#F01543] text-2xl">
                    {user?.displayName}
                  </h4>
                  <p className="text-lg">{user?.email}</p>
                </div>
                <hr className="border-2 mt-6" />
              </div>
              {/* Sidebar content here */}
              <Link to="/dashboard">
                <li className=" rounded text-lg p-2 bg-white text-black mb-4">
                  Dashboard
                </li>
              </Link>
              {isAdmin === "admin" ? (
                <>
                  <Link to="/dashboard/allUsers">
                    <li className=" rounded text-lg p-2 bg-white text-black mb-4">
                      All Users
                    </li>
                  </Link>
                  <Link to="/dashboard/AllPlace">
                    <li className=" rounded text-lg p-2 bg-white text-black mb-4">
                      All Places
                    </li>
                  </Link>
                  <Link to="/dashboard/allBookedPlace">
                    <li className=" rounded text-lg p-2 bg-white text-black mb-4">
                      All Booked Place
                    </li>
                  </Link>
                  <Link to="/dashboard/allReportPlace">
                    <li className=" rounded text-lg p-2 text-black mb-4">
                      All Report Place
                    </li>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/dashboard/booking-orders">
                    <li className=" rounded text-lg p-2 bg-white text-black mb-4">
                      Booking Orders
                    </li>
                  </Link>
                  <Link to="/dashboard/favorite-orders">
                    <li className=" rounded text-lg p-2 bg-white text-black mb-4">
                      Favorite Orders
                    </li>
                  </Link>
                  <Link to="/dashboard/reports-orders">
                    <li className=" rounded text-lg p-2 bg-white text-black mb-4">
                      Reports Orders
                    </li>
                  </Link>
                </>
              )}

              <div className="flex justify-center items-end mt-10 rounded ">
                <Link to="/">
                  <p className="link py-2 px-4 bg-white text-black">
                    back to Home
                  </p>
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default DashboardLayout;