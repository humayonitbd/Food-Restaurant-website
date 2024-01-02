// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { BsCartPlus } from 'react-icons/bs';
import { FaRegCircleCheck, FaStar } from 'react-icons/fa6';
// import { BsCartPlus } from 'react-icons/bs';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
    const [quantity,setQuantity] = useState(1)
    const [singleProducts,setSingleProducts]=useState({});
    const [simillerCategorys, setSimillerCategorys] = useState({});
    const { id } = useParams();
    const [idx, setIdx] = useState(id);
    useEffect(() => {
      fetch(`http://localhost:5000/api/v1/allProductsData/${idx}`)
        .then((res) => res.json())
        .then((data) => setSingleProducts(data.data))
        .catch((error) => console.error("Error fetching data:", error));
    }, [idx]);
    // console.log(singleProduct.category);
    console.log("idx", idx);
    console.log("singleProduct", singleProducts);
    useEffect(() => {
      fetch(
        `http://localhost:5000/api/v1/allProductsData/?category=${singleProducts.category}`
      )
        .then((res) => res.json())
        .then((data) => setSimillerCategorys(data.data))
        .catch((error) => console.error("Error fetching data:", error));
    }, [singleProducts.category]);

    
    return (
      <div className="w-10/12 mx-auto bg-white pb-20 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="col-span-2">
            <div className="card card-compact  bg-base-100">
              <figure>
                <img
                  className="w-full h-96"
                  src={singleProducts.img}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-4xl text-[#F01543] font-bold">
                      ${singleProducts.price * quantity}.00
                    </p>
                  </div>
                  <div className="flex justify-center items-center">
                    <span>
                      <FaStar className="inline text-[#FFB23E] text-4xl mr-2" />
                    </span>
                    <p className="font-bold text-2xl">
                      {singleProducts.reatings}
                    </p>
                  </div>
                </div>
                <div className='flex justify-between items-center'>
                  <h2 className=" md:text-4xl font-bold my-4">
                    {singleProducts.name}
                  </h2>
                  <button className=' bg-orange-400 btn text-lg px-10 text-white hover:bg-black  '>Favorite</button>
                </div>
                <ul>
                  {singleProducts?.items?.map((item, id) => (
                    <div key={id} className="flex justify-start items-center">
                      <span>
                        <FaRegCircleCheck className="text-[#F01543] text-xl mr-2" />
                      </span>
                      <li className="text-lg mb-2">{item}</li>
                    </div>
                  ))}
                </ul>
                <div className="card-actions mt-3 flex justify-between items-center ">
                  <div>
                    <button
                      onClick={() => setQuantity(quantity - 1)}
                      className={`rounded px-12 text-4xl bg-[#000929]  text-white hover:bg-black ${
                        quantity <= 1 ? "disabled" : ""
                      }`}
                      disabled={quantity <= 1}
                    >
                      -
                    </button>
                    <button className="rounded px-5 mx-5 text-4xl bg-[#F01543]  text-white hover:bg-black ">
                      {quantity}
                    </button>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className=" rounded px-12  bg-[#000929] text-4xl text-white hover:bg-black "
                    >
                      +
                    </button>
                  </div>
                  <button className="btn w-1/2 bg-[#F01543] text-lg text-white hover:bg-black ">
                    <BsCartPlus className="text-lg font-bold" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className=" overflow-y-scroll h-[800px] ">
            {simillerCategorys.length &&
              simillerCategorys?.map((simillerCategory) => (
                <div key={simillerCategory._id} className=" mb-5  ">
                  <div className=" ">
                    <div className="card card-compact bg-base-100 shadow-md">
                      <figure>
                        <img
                          className="w-full"
                          src={simillerCategory.img}
                          alt="Shoes"
                        />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">{simillerCategory.name}</h2>

                        <div className="card-actions">
                          <button
                            onClick={() => setIdx(simillerCategory._id)}
                            className="btn w-full bg-[#F01543] text-lg text-white hover:bg-black "
                          >
                            {/* <BsCartPlus className="text-lg font-bold" /> */}
                            See more...
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
};

export default SingleProduct;