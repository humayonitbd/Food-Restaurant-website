// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { BsCartPlus } from 'react-icons/bs';
import { FaRegCircleCheck, FaStar } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Products = () => {
    const [allProducts,setAllProducts] = useState([]);

    useEffect(() => {
      fetch(
        `http://localhost:5000/api/v1/allProductsData/?category=All Category`
      )
        .then((res) => res.json())
        .then((data) => setAllProducts(data.data))
        .catch((error) => console.error("Error fetching data:", error));
    }, []);
    console.log(allProducts)
    return (
      <div className="py-20 w-11/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
          {allProducts?.map((allProduct) => (
            <div
              key={allProduct._id}
              className="card card-compact  bg-base-100 shadow-md"
            >
              <figure>
                <img src={allProduct.img} alt="Shoes" />
              </figure>
              <div className="card-body">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-2xl text-[#F01543] font-bold">
                      ${allProduct.price}.00
                    </p>
                  </div>
                  <div className="flex justify-center items-center">
                    <span>
                      <FaStar className="inline text-[#FFB23E] text-2xl mr-2" />
                    </span>
                    <p className="font-bold text-lg">{allProduct.reatings}</p>
                  </div>
                </div>
                <h2 className="card-title">{allProduct.name}</h2>
                <ul>
                  {allProduct.items.map((item, id) => (
                    <div key={id} className="flex justify-start items-center">
                      <span>
                        <FaRegCircleCheck className="text-[#F01543] text-lg mr-2" />
                      </span>
                      <li className="text-lg">{item}</li>
                    </div>
                  ))}
                </ul>
                <div className="card-actions mt-3">
                  <Link className="w-full" to={`/products/${allProduct._id}`}>
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
        <div className="flex justify-center items-center pb-5 pt-16">
          <Link to="/">
            <button className="btn px-16 bg-[#F01543] text-lg text-white hover:bg-black">
              Back more...
            </button>
          </Link>
        </div>
      </div>
    );
};

export default Products;