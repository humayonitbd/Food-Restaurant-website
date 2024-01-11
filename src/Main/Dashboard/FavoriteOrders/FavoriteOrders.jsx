// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { useQuery } from "@tanstack/react-query";
import Swal from 'sweetalert2';
import Modal from "react-modal";
const customStyles = {
  content: {
    width:"35%",
    height:"60%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const FavoriteOrders = () => {
     const { user } = useContext(AuthContext);
    //  const [pendingOrderId, setPendingOrderId]=useState("");
     const [pendingOrders, setPendingOrders]=useState({});
     const [quantity, setQuantity] = useState(1);
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
    // console.log("my favorites ", favorites);


  const subtitleRef = useRef();

  // let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal(id) {
    const singlePendingProduct = favorites?.favorites?.find(
      (favorite) => favorite.orderMainId === id);
    setPendingOrders(singlePendingProduct);
    setIsOpen(true);
  }

  function afterOpenModal() {
    // Access the subtitleRef.current to set styles
    if (subtitleRef.current) {
      subtitleRef.current.style.color = "#f00";
    }
  }

  function closeModal() {
    setIsOpen(false);
  }



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

    

    const HandlerConformPendingOrder=(e)=>{
      e.preventDefault();

      const order = {
        orderId: pendingOrders.orderId,
        orderMainIdPending:pendingOrders.orderMainId,
        orderName: pendingOrders.orderName,
        orderImg: pendingOrders.orderImg,
        orderPrice: `${pendingOrders.orderPrice * quantity}`,
        orderQuantity: quantity,
        orderCategory: pendingOrders.orderCategory,
        userGmail: user?.email,
        status: "Conform",
      };

      // console.log(pendingOrders.orderMainId, order);

      fetch(`http://localhost:5000/api/v1/users/?email=${user.email}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }

          const contentType = res.headers.get("content-type");
          if (!contentType || !contentType.includes("application/json")) {
            console.error("Unexpected Content-Type:", contentType);
            return res.text(); // Log the raw response text
          }

          return res.json();
        })
        .then((data) => {
          if (data.success) {
            Swal.fire({
              title: `${data.message}`,
              text: "You clicked the button!",
              icon: "success",
            });
          }
          console.log(data);
           setIsOpen(false);
           refetch();
          
        })
        .catch((error) => {
          console.error("Error:", error);
          // Handle errors here, including non-JSON responses
        })
        
    }

    // console.log("pendingOrder", pendingOrders);

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
                            {favorite.status === "Conform" ? (
                              <button className=" bg-green-500  text-white px-5  py-2 rounded">
                                Conform Order
                              </button>
                            ) : (
                              <button
                                onClick={() => openModal(favorite.orderMainId)}
                                className=" bg-blue-500  text-white px-5  py-2 rounded"
                              >
                                Pending Order
                              </button>
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
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col  p-5">
              <h3
                ref={subtitleRef}
                className="text-xl font-bold text-[#F01543] text-center"
              >
                Conform Order
              </h3>
              <br />
              <div className=" mb-3">
                <div className="">
                  <p className="text-black">
                    Email:{" "}
                    <span className=" text-black font-bold">
                      {" "}
                      {user?.email}
                    </span>
                  </p>
                </div>
                <div className="my-3">
                  <p>
                    Name:{" "}
                    <span className="font-bold">{pendingOrders.orderName}</span>
                  </p>
                  <p>
                    Category:{" "}
                    <span className="font-bold">
                      {pendingOrders.orderCategory}
                    </span>
                  </p>
                  <p className="text-xl ">
                    Price:
                    <span className="font-bold text-black ml-2">
                      ${pendingOrders.orderPrice * quantity}.00
                    </span>
                  </p>
                  <p>
                    Quantity: <span className="font-bold">{quantity}</span>
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => setQuantity(quantity - 1)}
                    className={`rounded px-8 text-4xl bg-[#000929]  text-white hover:bg-black ${
                      quantity <= 1 ? "disabled" : ""
                    }`}
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <button className="rounded px-5 mx-3 text-4xl bg-[#F01543]  text-white hover:bg-black ">
                    {quantity}
                  </button>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className=" rounded px-8  bg-[#000929] text-4xl text-white hover:bg-black "
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex justify-center mt-8">
                <button
                  onClick={closeModal}
                  className="btn mr-10 bg-[#F01543] text-white text-lg px-10"
                >
                  Close
                </button>
                <button
                  onClick={HandlerConformPendingOrder}
                  type="button"
                  className="btn bg-green-600 text-white text-lg"
                >
                  Confrom Order
                </button>
              </div>
            </div>
          </form>
        </Modal>
        {/* //modal end  */}
      </div>
    );
};

export default FavoriteOrders;