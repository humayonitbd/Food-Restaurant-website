// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

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


  console.log("activeCategory", activeCategory);
  console.log("categoryProducts", categoryProducts);
  return (
    <div className="categorybg">
      <div className="w-11/12 mx-auto pb-20">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-10">
          {categoryProducts?.map((categoryProduct) => (
            <div
              key={categoryProduct._id}
              className="card card-compact w-96 bg-base-100 shadow-xl"
            >
              <figure>
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center pb-5 pt-10">
          <button className="btn px-16 bg-[#F01543] text-lg text-white hover:bg-black">See more...</button>
        </div>
        {/* all products section end */}
      </div>
    </div>
  );
};

export default AllProductsSection;
