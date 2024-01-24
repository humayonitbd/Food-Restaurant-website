// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import './SignUp.css';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import Swal from 'sweetalert2';
import useJwtToken from '../../../hooks/useJwtToken';
const SignUp = () => {
  const { userUpdateHandler, createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  // const navigate = useNavigate();
  const [createEmail, setCreateEmail] = useState("");
  const [token] = useJwtToken(createEmail);
  if (token) {
    // navigate(from, { replace: true });
    navigate("/");
  }
  const handlerRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0];
    const formData = new FormData();
    formData.append("image", image);

    console.log(name, email, password, image);

    if (password.length < 6) {
      alert("Your password must be 6 charecter!!");
      return;
    }

    const url = `https://api.imgbb.com/1/upload?key=0ba2b4921b02f88551c8a45a193a174e`;
    // console.log(url)

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        const userImg = {
          img: data.data.display_url,
        };
        // console.log(userData);
        createUser(email, password)
          .then((result) => {
            const user = result.user;
            userUpdateHandler(name, userImg.img);
            console.log('user', user);
            const userData = {
              name: name,
              email: email,
              password: password,
              userImg: userImg.img,
              role: "user",
              orders: [],
              favorite: [],
              reports: [],
            };
            console.log(userData);

            fetch(`http://localhost:5000/api/v1/users`, {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(userData),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  console.log("post successfull!");
                  // refetch();
                }

                setCreateEmail(userData.email);
              });

            Swal.fire({
              title: `Create Account successfull!!`,
              text: "You clicked the button!",
              icon: "success",
            });
            form.reset();
            // navigate("/");
          })
          .catch((error) => console.log(error.message));
      });

    console.log(email, image);
  };

  // const userUpdateHandlerBtn = (name) => {
  //   userUpdateHandler(name)
  //     .then(() => {
  //       console.log("profile update");
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 ">
      <div className="loginbg ">
        <div className="py-80"></div>
      </div>
      <div className="card w-1/2 mx-auto my-auto  bg-white">
        <form
          onSubmit={handlerRegister}
          className="border-4  border-[#F01543] rounded mt-20 mb-10"
        >
          <div className="card-body">
            <h1 className="text-2xl text-center font-bold text-black">
              Sign Up now!
            </h1>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="type full name"
                className="input input-bordered bg-white "
                required
              />
            </div>
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Upload Photo</span>
              </label>
              <input
                name="image"
                type="file"
                className="input input-bordered"
              />
            </div>

            <div className="form-control mt-6">
              <input
                type="submit"
                value="Submit"
                className="btn bg-[#F01543] hover:bg-black text-white"
              ></input>
            </div>
          </div>
        </form>
        <p className="text-black text-lg text-center mb-10">
          Have a account?{" "}
          <Link to="/signIn">
            <strong className="link text-[#F01543]">Sign In</strong>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;