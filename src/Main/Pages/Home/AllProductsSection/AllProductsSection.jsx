// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { FaRegCircleCheck } from "react-icons/fa6";
import { BsCartPlus } from "react-icons/bs";
import SmallLoading from "../../../SharedPage/Loading/SmallLoading";


const AllProductsSection = () => {
  const [categorys, setCategorys] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All Category");
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/categorys")
      .then((res) => res.json())
      .then((data) => setCategorys(data.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // const AllBookedPlace = () => {
  //   const find = true;
  // //booking data get by email
  // const {
  //   data: allBookedPlaceData = [],
  //   refetch,
  //   isLoading,
  // } = useQuery({
  //   queryKey: ["allBookedPlaceData"],
  //   queryFn: async () => {
  //     const res = await fetch(
  //       `http://localhost:5000/allBookedPlaceData/${find}`
  //     );
  //     const data = await res.json();
  //     return data;
  //   },
  // });

  useEffect(() => {
    fetch(
      `http://localhost:5000/api/v1/allProductsData/?category=${activeCategory}`
    )
      .then((res) => res.json())
      .then((data) => setCategoryProducts(data.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [activeCategory]);

  return (
    <div className="categorybg">
      <div className="w-11/12 mx-auto pb-20  ">
        <div className="text-center text-black text-5xl font-semibold">
          <h2 className="leading-tight mb-10">
            Some Traditional Food <br /> Based on Location
          </h2>
        </div>

        <div className="flex justify-between border-2 p-3 rounded-md w-[795px] mx-auto ">
          {categorys?.map((category) => (
            <ul className="" key={category._id}>
              <li
                onClick={() => setActiveCategory(category.category)}
                className={`${
                  activeCategory === category.category
                    ? "bg-[#F01543] text-white"
                    : "bg-white text-black"
                } text-lg  border-2 border-stone-300 py-2 px-5 rounded-md `}
              >
                {category.category}
              </li>
            </ul>
          ))}
        </div>

        {/* all products section start */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-10">
          {categoryProducts.length === 0 ? (
            <SmallLoading />
          ) : (
            categoryProducts?.slice(0, 6).map((categoryProduct) => (
              <div
                key={categoryProduct._id}
                className="card card-compact  bg-base-100"
              >
                <figure>
                  <img
                    src={categoryProduct.img}
                    className="w-full h-72"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-2xl text-[#F01543] font-bold">
                        ${categoryProduct.price}.00
                      </p>
                    </div>
                    <div className="flex justify-center items-center">
                      <span>
                        <FaStar className="inline text-[#FFB23E] text-2xl mr-2" />
                      </span>
                      <p className="font-bold text-lg">
                        {categoryProduct.reatings}
                      </p>
                    </div>
                  </div>
                  <h2 className="card-title">{categoryProduct.name}</h2>
                  <ul>
                    {categoryProduct.items.map((item, id) => (
                      <div key={id} className="flex justify-start items-center">
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
                      to={`/products/${categoryProduct._id}`}
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
            ))
          )}
        </div>
        <div className="flex justify-center items-center pb-5 pt-10">
          <Link to="/products">
            <button className="btn px-16 bg-[#F01543] text-lg text-white hover:bg-black">
              See more...
            </button>
          </Link>
        </div>
        {/* all products section end */}
      </div>
    </div>
  );
};

export default AllProductsSection;
