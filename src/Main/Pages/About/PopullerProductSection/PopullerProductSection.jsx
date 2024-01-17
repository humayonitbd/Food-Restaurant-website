// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from 'react';
// import { AuthContext } from '../../../Context/AuthProvider';
import SmallLoading from '../../../SharedPage/Loading/SmallLoading';
import { Link } from 'react-router-dom';
import { FaHeart, FaRegCircleCheck, FaStar } from 'react-icons/fa6';
import { BsCartPlus } from 'react-icons/bs';

const PopullerProductSection = () => {
    // const {user} = useContext(AuthContext);
    const [propullerProducts, setPropullerProducts] = useState([]);
    useEffect(() => {
      fetch(
        `http://localhost:5000/api/v1/allProductsData/populler/?populler=populler`
      )
        .then((res) => res.json())
        .then((data) => setPropullerProducts(data.data))
        .catch((error) => console.error("Error fetching data:", error));
    }, []);
    // console.log("propullerProduct", propullerProducts);
    return (
      <div className="bg-white py-20">
        <div className="w-11/12 mx-auto">
          <div>
            <h1 className="text-5xl font-bold ">Most Popular Items</h1>
          </div>
          <div className="mt-10">
            <div>
              {propullerProducts.length === 0 ? (
                <>
                  <div className='text-center'>
                    <SmallLoading />
                  </div>
                </>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {propullerProducts?.map((propullerProduct) => (
                      <div
                        key={propullerProduct._id}
                        className="card card-side bg-base-100 shadow-xl"
                      >
                        <figure>
                          <img
                            src={propullerProduct.img}
                            className="w-full h-72 relative "
                            alt="Shoes"
                          />
                          <Link to={`/products/${propullerProduct._id}`}>
                            <span className="absolute w-12 h-12 bg-[#F01543] rounded-full flex justify-center items-center top-2 left-2 ">
                              <FaHeart className="  text-white  text-3xl    " />
                            </span>
                          </Link>{" "}
                        </figure>
                        <div className="card-body">
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="text-2xl text-[#F01543] font-bold">
                                ${propullerProduct.price}.00
                              </p>
                            </div>
                            <div className="flex justify-center items-center">
                              <span>
                                <FaStar className="inline text-[#FFB23E] text-2xl mr-2" />
                              </span>
                              <p className="font-bold text-lg">
                                {propullerProduct.reatings}
                              </p>
                            </div>
                          </div>
                          <h2 className="card-title">
                            {propullerProduct.name}
                          </h2>
                          <ul>
                            {propullerProduct.items.map((item, id) => (
                              <div
                                key={id}
                                className="flex justify-start items-center"
                              >
                                <span>
                                  <FaRegCircleCheck className="text-[#F01543] text-lg mr-2" />
                                </span>
                                <li className="text-lg">{item}</li>
                              </div>
                            ))}
                          </ul>
                          <div className="card-actions mt-3">
                            <Link
                              className="w-full"
                              to={`/products/${propullerProduct._id}`}
                            >
                              <button
                                // onClick={openModal}
                                className="btn w-full bg-[#F01543] text-lg text-white hover:bg-black "
                              >
                                <BsCartPlus className="text-lg font-bold" />
                                Add to Cart
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
};

export default PopullerProductSection;