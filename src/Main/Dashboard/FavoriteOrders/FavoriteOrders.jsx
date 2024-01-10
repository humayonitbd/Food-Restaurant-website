// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { useQuery } from "@tanstack/react-query";
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const FavoriteOrders = () => {
     const { user } = useContext(AuthContext);
    const {
      data: favorites = {},
      refetch,
      isLoading,
    } = useQuery({
      queryKey: ["favorites", user?.email],
      queryFn: async () => {
        const res = await fetch(
          `http://localhost:5000/api/v1/users/?email=${user?.email}`
        );
        const data = await res.json();
        return data.data;
      },
    });
    console.log("my favorites ", favorites);

    const deleteFavoriteHandler = (id) => {
      console.log("delete id", id);
      fetch(`http://localhost:5000/api/v1/users/favorites/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: user?.email }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            Swal.fire({
              title: `${data.message}`,
              text: "You clicked the button!",
              icon: "success",
            });
            console.log(data.data);
            refetch();
          }
        });
    };



    return (
      <div>
        <div className="py-5 bg-[#F01543] mt-2">
          <h3 className="text-center text-2xl  font-bold text-white">
            Favorite Orders
          </h3>
        </div>

        <div className="pl-5 pt-5">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="">
                  <th className="font-bold text-lg">Product Photo</th>
                  <th className="font-bold text-lg">Price</th>
                  <th className="font-bold text-lg">Quantiry</th>
                  <th className="font-bold text-lg">Action</th>
                </tr>
              </thead>
              <tbody>
                {favorites?.favorites?.length ? (
                  <>
                    {isLoading && <div> loading.... </div>}
                    {favorites?.favorites?.map((favorite) => (
                      <>
                        <tr key={favorite?._id}>
                          <td>
                            <div className="flex items-center space-x-3">
                              <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                  <img
                                    className=""
                                    src={favorite?.orderImg}
                                    alt="Avatar Tailwind CSS Component"
                                  />
                                </div>
                              </div>
                              <div>
                                <div className="font-bold text-lg">
                                  {favorite?.orderName}
                                </div>
                                <div className="text-sm opacity-50">
                                  {favorite?.orderCategory}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="font-bold">${favorite?.orderPrice}</td>
                          <td className="font-bold">
                            {favorite?.orderQuantity}
                          </td>
                          <td>
                            <button
                              onClick={() =>
                                deleteFavoriteHandler(favorite.orderId)
                              }
                              className=" bg-red-500 text-white px-5 py-2 rounded mr-2"
                            >
                              Delete
                            </button>
                            {favorite.status && (
                              <Link to={`/products/${favorite.orderId}`}>
                                <button className=" bg-blue-500  text-white px-5  py-2 rounded">
                                  Conform Order
                                </button>
                              </Link>
                            )}
                          </td>
                        </tr>
                      </>
                    ))}
                  </>
                ) : (
                  <>
                    {" "}
                    <div className="text-center">
                      <h2 className="text-2xl text-red-500 mt-40 text-center font-semibold">
                        Sorry!! You do not Orders any Product,,pleace booking
                        Orders!!
                      </h2>
                    </div>
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* //modal start  */}
        {/* <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <form ref={subtitleRef} onSubmit={handleSubmitBtnModal}>
            <div className="flex flex-col  p-5">
              <h3 className="text-xl font-bold text-[#F01543] text-center">
                Bank Account Number
              </h3>
              <br />
              <div className="md:flex justify-between items-center mb-3">
                <div className="">
                  <p className="text-black">
                    Email:{" "}
                    <span className=" text-black font-bold">
                      {" "}
                      {user?.email}
                    </span>
                  </p>
                </div>
                <div className="pr-5">
                  <p className="text-black">
                    Price:{" "}
                    <span className=" font-bold">
                      {" $"}
                      {paymentProduct?.orderPrice}
                    </span>
                  </p>
                </div>
              </div>
              <div className="md:flex justify-between items-center mt-3 mb-5">
                <div>
                  <img
                    onClick={() => setPaymentAccount("bank")}
                    className={`${
                      paymentAccount === "bank"
                        ? "border-[#F01543]"
                        : "border-white"
                    } w-28  border-4  mb-2 md:mb-0  shadow-md px-6 py-3`}
                    src={bank}
                    alt="bank"
                  />
                </div>
                <div>
                  <img
                    onClick={() => setPaymentAccount("bkash")}
                    className={`${
                      paymentAccount === "bkash"
                        ? "border-[#F01543]"
                        : "border-white"
                    } w-28 border-4   mb-2 md:mb-0  shadow-md px-6 py-3`}
                    src={bkash}
                    alt="bkash"
                  />
                </div>
                <div>
                  <img
                    onClick={() => setPaymentAccount("nagod")}
                    className={`${
                      paymentAccount === "nagod"
                        ? "border-[#F01543]"
                        : "border-white"
                    } w-28 border-4  mb-2 md:mb-0  shadow-md px-6 py-3`}
                    src={nagod}
                    alt="nagod"
                  />
                </div>
              </div>
              <div className="my-2">
                <label className="text-black font-bold">Account Number:</label>
                <br />
                <input
                  type="number"
                  className="border border-stone-300 p-2 w-full text-black"
                  name="payment"
                  placeholder="type account number..."
                />
              </div>

              <button type="submit" className="btn btn-primary text-white my-3">
                submit
              </button>
            </div>
          </form>
        </Modal> */}
        {/* //modal end  */}
      </div>
    );
};

export default FavoriteOrders;