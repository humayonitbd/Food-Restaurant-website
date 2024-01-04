// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import Modal from "react-modal";
import { AuthContext } from '../../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import bank from "../../../assets/bank.jpg";
import bkash from "../../../assets/bkash_logo_0.jpg";
import nagod from "../../../assets/Nagad-Logo.wine.png";

const customStyles = {
  content: {
    width: "35%",
    height: "65%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const BookingOrders = () => {
    const { user } = useContext(AuthContext);
    const [paymentProduct, setPaymentProduct] = useState({});
    console.log("user eamil", user?.email);
    //booking data get by email

    const {
      data: orders = {},
    //   refetch,
      isLoading,
    } = useQuery({
      queryKey: ["orders", user?.email],
      queryFn: async () => {
        const res = await fetch(
          `http://localhost:5000/api/v1/orders/?email=${user?.email}`
        );
        const data = await res.json();
        return data.data;
      },
    });
    console.log("my orders", orders);

    // const deleteHandler = (id) => {
    //   console.log("delete id", id);
    //   fetch(`http://localhost:5000/bookingPlacesDelete/${id}`, {
    //     method: "DELETE",
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       if (data.acknowledged) {
    //         refetch();
    //       }
    //     });
    // };

    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);

    function openPayModal(data) {
      setPaymentProduct(data);

      setIsOpen(true);
    }
    

    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = "#f00";
    }

    function closeModal() {
      setIsOpen(false);
    }

    //modal code end

    const handleSubmitBtnModal = (e) => {
      e.preventDefault();
      console.log("modal submit")
      const form = e.target;
      const accountNumber = form.payment.value;
      const payInfo = {
        bankAccountNumber: accountNumber,
        bookingProductID: paymentProduct.bookingProductID,
        payment: "paid",
      };

    //   fetch(`http://localhost:5000/bookingPayment/${paymentProduct._id}`, {
    //     method: "PUT",
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //     body: JSON.stringify(payInfo),
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       if (data.modifiedCount) {
    //         console.log("payment successfull !!");
    //         refetch();
    //       }
    //     });

      //   setFilterSearch(queryFilter);
      console.log("payInfo", payInfo);
      setIsOpen(false);
    };

    // console.log(
    //   "paymentProduct paymentProduct",
    //   paymentProduct,
    //   "oldID",
    //   paymentProduct.bookingProductID
    // );

    //   console.log("myBookingPlace", myBookingPlace);
    return (
      <div>
        <div className="py-5 bg-[#F01543] mt-2">
          <h3 className="text-center text-2xl font-bold text-white">
            Booking Orders
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
                {orders?.length ? (
                  <>
                    {isLoading && <div> loading.... </div>}
                    {orders?.map((order) => (
                      <>
                        <tr key={order?._id}>
                          <td>
                            <div className="flex items-center space-x-3">
                              <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                  <img
                                    className=""
                                    src={order?.orderImg}
                                    alt="Avatar Tailwind CSS Component"
                                  />
                                </div>
                              </div>
                              <div>
                                <div className="font-bold text-lg">
                                  {order?.orderName}
                                </div>
                                <div className="text-sm opacity-50">
                                  {order?.orderCategory}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="font-bold">${order?.orderPrice}</td>
                          <td className="font-bold">{order?.orderQuantity}</td>
                          <td>
                            <button
                              //   onClick={() => deleteHandler(bookedPlace._id)}
                              className=" bg-red-500 text-white px-5 py-2 rounded mr-2"
                            >
                              Delete
                            </button>
                            {order.payment ? (
                              <>
                                <button className=" bg-green-500  text-white px-5  py-2 rounded">
                                  PAID
                                </button>
                              </>
                            ) : (
                              <>
                                <button
                                  onClick={() => openPayModal(order)}
                                  className=" bg-blue-500  text-white px-5  py-2 rounded"
                                >
                                  PAY
                                </button>
                              </>
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
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <form onSubmit={handleSubmitBtnModal}>
            <div className="flex flex-col  p-5">
              <h3 className="text-xl font-bold text-center">
                Bank Account Number
              </h3>
              <br />
              <div className="md:flex justify-between items-center mb-3">
                <div className="">
                  <p>
                    Email: <span className=" font-bold"> {user?.email}</span>
                  </p>
                </div>
                <div className="pr-5">
                  <p>
                    Price:{" "}
                    <span className=" font-bold">
                      {" $"}
                      {paymentProduct?.orderPrice}
                    </span>
                  </p>
                </div>
              </div>
              <div className='md:flex justify-between items-center mt-3 mb-5'>
                <div>
                  <img className='w-28 border-2 border-[#F01543] shadow-md px-6 py-3' src={bank} alt="bank" />
                </div>
                <div>
                  <img className='w-28 border-2 border-[#F01543] shadow-md px-6 py-3' src={bkash} alt="bkash" />
                </div>
                <div>
                  <img className='w-28 border-2 border-[#F01543] shadow-md px-6 py-3' src={nagod} alt="nagod" />
                </div>
              </div>
              <div className="my-2">
                <label className=" font-bold">Account Number:</label>
                <br />
                <input
                  type="number"
                  className="border border-stone-300 p-2 w-full "
                  name="payment"
                  placeholder="type account number..."
                />
              </div>

              <button type="submit" className="btn btn-primary text-white my-3">
                submit
              </button>
            </div>
          </form>
        </Modal>
        {/* //modal end  */}
      </div>
    );
};

export default BookingOrders;