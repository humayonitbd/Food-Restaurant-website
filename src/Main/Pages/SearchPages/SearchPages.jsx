// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { BsCartPlus } from 'react-icons/bs';
import { FaHeart, FaStar } from 'react-icons/fa';
import { FaRegCircleCheck } from 'react-icons/fa6';
import { Link, useLocation } from 'react-router-dom';
import Loading from '../../SharedPage/Loading/Loading';

const SearchPages = () => {
    const [searchAllProducts, setSearchAllProducts] = useState([]);
    let { state } = useLocation();
    // const searchtext = 'searchtext';
    console.log("search text", state.searchText);
    useEffect(() => {
      fetch(
        `http://localhost:5000/api/v1/allProductsData/searchData/?searchText=${state?.searchText}`
      )
        .then((res) => res.json())
        .then((data) => setSearchAllProducts(data.data))
        .catch((error) => console.error("Error fetching data:", error));
    }, [state?.searchText]);
    console.log("searchAllProducts'", searchAllProducts);
    return (
      <div className="bg-white py-20">
        <div className="w-11/12 mx-auto">
          <div>
            <div className="">
              {searchAllProducts?.length === 0 ? (
                <div className="flex justify-center h-64">
                  <div>
                    <Loading />
                    <div className="mt-20">
                      <h1 className="font-bold text-3xl  text-red-500">
                        Search items is not found....!!
                      </h1>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
                  {searchAllProducts?.map((searchAllProduct) => (
                    <div
                      key={searchAllProduct._id}
                      className="card card-compact  bg-base-100 shadow-md"
                    >
                      <figure>
                        <img
                          className="w-full h-60"
                          src={searchAllProduct.img}
                          alt="Shoes"
                        />
                        <Link to={`/products/${searchAllProduct._id}`}>
                          <span className="absolute w-12 h-12 bg-[#F01543] rounded-full flex justify-center items-center top-2 right-2 ">
                            <FaHeart className="  text-white  text-3xl    " />
                          </span>
                        </Link>
                      </figure>
                      <div className="card-body">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-2xl text-[#F01543] font-bold">
                              ${searchAllProduct.price}.00
                            </p>
                          </div>
                          <div className="flex justify-center items-center">
                            <span>
                              <FaStar className="inline text-[#FFB23E] text-2xl mr-2" />
                            </span>
                            <p className="font-bold text-lg">
                              {searchAllProduct.reatings}
                            </p>
                          </div>
                        </div>
                        <h2 className="card-title">{searchAllProduct.name}</h2>
                        <ul>
                          {searchAllProduct.items.map((item, id) => (
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
                            to={`/products/${searchAllProduct._id}`}
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
              )}

              <div className="flex justify-center items-center pb-5 pt-16">
                    <Link to="/">
                      <button className="btn px-16 bg-[#F01543] text-lg text-white hover:bg-black">
                        Back more...
                      </button>
                    </Link>
                  </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SearchPages;