// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../Context/AuthProvider";
import { useParams } from "react-router-dom";

const AllOrders = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  console.log("gmail", id);
  const {
    data: orders = {},
    //   refetch,
    isLoading,
  } = useQuery({
    queryKey: ["orders", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://food-restuarant-server.vercel.app/api/v1/users/?email=${id}`
      );
      const data = await res.json();
      return data.data;
    },
  });
  return (
    <div>
      <div className="py-5 bg-[#F01543] mt-2">
        <h3 className="text-center text-2xl  font-bold text-white">
          All Booking Orders
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
              {orders?.orders?.length ? (
                <>
                  {isLoading && <div> loading.... </div>}
                  {orders?.orders?.map((order) => (
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
                            //   onClick={() => deleteHandler(order.orderMainId)}
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
                                //   onClick={() => openPayModal(order)}
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
    </div>
  );
};

export default AllOrders;
