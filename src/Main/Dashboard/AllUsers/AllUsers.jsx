// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useQuery } from '@tanstack/react-query';

const AllUsers = () => {
    // /api/v1/users
    const {
      data: users = [],
      refetch,
      isLoading,
    } = useQuery({
      queryKey: ["users"],
      queryFn: async () => {
        const res = await fetch(`http://localhost:5000/api/v1/users/users`);
        const data = await res.json();
        return data.data;
      },
    });
    console.log('users',users)
    return (
      <div>
        <div className="py-5 bg-[#F01543] mt-2">
          <h3 className="text-center text-2xl  font-bold text-white">
            All Users
          </h3>
        </div>

        <div className="pl-5 pt-5">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="">
                  <th className="font-bold text-lg">User Photo</th>
                  <th className="font-bold text-lg">Email</th>
                  <th className="font-bold text-lg">Action</th>
                </tr>
              </thead>
              <tbody>
                {users?.length ? (
                  <>
                    {isLoading && <div> loading.... </div>}
                    {users?.map((user) => (
                      <>
                        <tr key={user?._id}>
                          <td>
                            <div className="flex items-center space-x-3">
                              <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                  <img
                                    className=""
                                    src={user?.userImg}
                                    alt="Avatar Tailwind CSS Component"
                                  />
                                </div>
                              </div>
                              <div>
                                <div className="font-bold text-lg">
                                  {user?.name}
                                </div>
                                <div className="text-sm opacity-50">
                                  {user?.role}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="font-bold">{user?.email}</td>
                          <td>
                            <button
                              onClick={() =>
                                deleteReportsHandler(report.orderMainId)
                              }
                              className=" bg-red-500 text-white px-5 py-2 rounded mr-2"
                            >
                              Delete
                            </button>
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
                        Sorry!! You do not Orders any Product <br />
                        pleace booking Orders!!
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

export default AllUsers;