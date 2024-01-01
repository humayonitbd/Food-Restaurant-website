// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const SignIn = () => {
    const { login, googleLogin } = useContext(AuthContext);
    const handlerLogin = (e) => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      login(email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          //   setLoginEmail(user.email);

          alert("Login successfull!!");
          form.reset();
          //   navigate(from, {replace: true});
        })
        .catch((err) => {
          console.log(err.message);
        });
      console.log(email, password);
    };

    const handlerLoginGoogle = () => {
      googleLogin()
        .then((result) => {
          const user = result.user;
          const userData = {
            name: user.displayName,
            email: user.email,
            role: "user",
          };

           fetch(`http://localhost:5000/api/v1/users`, {
             method: "PUT",
             headers: {
               "content-type": "application/json",
             },
             body: JSON.stringify(userData),
           })
             .then((res) => res.json())
             .then((data) => {
               console.log(data);
               // setLoginEmail(userData.email);
               alert("google login successfull!!");
             });

          console.log("userData", userData);
        })
        .catch((error) => console.log(error));
    };
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="loginbg ">
          <div className="py-80"></div>
        </div>
        <div className="card w-1/2 mx-auto my-auto  bg-white">
          <form
              onSubmit={handlerLogin}
            className="border-4  border-[#F01543] rounded mt-20 mb-10"
          >
            <div className="card-body">
              <h1 className="text-2xl text-center font-bold text-black">
                Sign In now!
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="type your email"
                  className="input input-bordered bg-white "
                  required
                />
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="type your password"
                  className="input input-bordered bg-white "
                  required
                />
              </div>

              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Submit"
                  className="btn bg-[#F01543] hover:bg-black text-white"
                ></input>
              </div>
              <div className="flex justify-center items-center">
                <hr className="border-2 border-slate-200 w-1/3" />
                <span className="font-bold mx-3">OR</span>
                <hr className="border-2 border-slate-200 w-1/3" />
              </div>
              <div>
                <button
                  onClick={handlerLoginGoogle}
                  className="btn w-full bg-[#FF5A5F] text-white"
                >
                  Google-login
                </button>
              </div>
            </div>
          </form>
          <p className="text-black text-lg text-center mb-10">
            Are you new user ?{" "}
            <Link to="/signUp">
              <strong className="link text-[#F01543]">Sign Up</strong>
            </Link>
          </p>
        </div>
      </div>
    );
};

export default SignIn;