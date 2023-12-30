// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

const AllProductsSection = () => {
  const [categorys, setCategorys] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All Category");

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/categorys")
      .then((res) => res.json())
      .then((data) => setCategorys(data.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  console.log(categorys);
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
      </div>
    </div>
  );
};

export default AllProductsSection;
