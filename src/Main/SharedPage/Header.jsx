// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { FaBars, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsCartPlus } from "react-icons/bs";
import logo from '../../assets/footer-logo.svg';
import { IoSearchCircle } from "react-icons/io5";
import { AuthContext } from "../Context/AuthProvider";
import Swal from "sweetalert2";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const logOutHandler = () => {
    logOut()
      .then(() => {
       Swal.fire({
         title: `Log-out successfull!!`,
         text: "You clicked the button!",
         icon: "success",
       });
      })
      .catch((error) => console.log(error));
  };



  return (
    <div className="bg-[#000929] py-4 ">
      <div className="navbar  text-white w-11/12 mx-auto ">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">
            <img src={logo} alt="" />
          </a>
        </div>
        <div>
          <ul className="lg:flex items-center text-lg hidden  ">
            <li className="mr-5">
              <Link to="/">Home</Link>
            </li>
            <li className="mr-5">
              <Link>Menu</Link>
            </li>
            <li className="mr-5">
              <Link to="/about">About</Link>
            </li>
            {user?.email ? (
              <li className="mr-5">
                <Link to="/dashboard">Dashboard</Link>
              </li>
            ) : (
              <li className="mr-5">
                <Link to="/signIn">Dashboard</Link>
              </li>
            )}
            <div className="mx-5 flex relative ">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered text-black w-60 h-10 "
                />
              </div>
              <IoSearchCircle className="text-[40px] text-white absolute ml-52 bg-[#F01543] rounded  " />
            </div>
          </ul>

          <ul className="flex items-center ">
            <li className="mr-3">
              <FaRegHeart className="border-2 hover:bg-[#F01543] border-white rounded-full p-3 text-5xl" />
            </li>
            <li className="mr-3">
              <BsCartPlus className="border-2 hover:bg-[#F01543] border-white rounded-full p-3 text-5xl" />
            </li>
            {user?.email ? (
              <>
                <li
                  onClick={logOutHandler}
                  className="mr-3 ml-2 border-2 border-[#F01543] hover:bg-white hover:text-[#F01543] py-2 px-6 rounded text-white bg-[#F01543]"
                >
                  <Link to="/signIn">Log-out</Link>
                </li>
              </>
            ) : (
              <>
                <li className="mr-3 ml-2 border-2 border-[#F01543] hover:bg-white hover:text-[#F01543] py-2 px-6 rounded text-white bg-[#F01543]">
                  <Link to="/signIn">Login</Link>
                </li>
                <li className="mr-3 border-2 hover:border-[#F01543] hover:bg-[#F01543] border-white py-2 px-6 rounded ">
                  <Link to="/signUp">SignUp</Link>
                </li>
              </>
            )}
          </ul>
          {user?.email && (
            <div>
              <img
                src={user?.photoURL}
                className="w-10 h-10 rounded-full sm:mr-2"
                alt=""
              />
            </div>
          )}
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end lg:hidden text-black ">
            <div tabIndex={0} role="button" className="">
              <div className="w-12 text-xl rounded-full">
                <FaBars className="text-white" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
