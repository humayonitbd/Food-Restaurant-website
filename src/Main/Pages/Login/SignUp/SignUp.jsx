// eslint-disable-next-line no-unused-vars
import React from 'react';
import './SignUp.css';
const SignUp = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="loginbg ">
          <div className="py-80"></div>
        </div>
        <div className="card w-1/2 mx-auto my-auto border-2 border-[#F01543] bg-white">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default SignUp;