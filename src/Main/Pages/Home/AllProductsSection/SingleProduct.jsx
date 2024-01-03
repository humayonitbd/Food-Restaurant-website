// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from 'react';
import { BsCartPlus } from 'react-icons/bs';
import { FaRegCircleCheck, FaStar } from 'react-icons/fa6';
// import { BsCartPlus } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import Modal from "react-modal";
import { AuthContext } from '../../../Context/AuthProvider';

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

const SingleProduct = () => {
  const { user } = useContext(AuthContext);
  const [quantity, setQuantity] = useState(1);
  const [singleProducts, setSingleProducts] = useState({});
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

  //modal code start
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  //modal code end

  const handleSubmitBtnModal=(e)=>{
     e.preventDefault();
    const order = {
      orderId: singleProducts._id,
      orderName:singleProducts.name,
      orderImg:singleProducts.img,
      orderPrice:singleProducts.price,
      orderQuantity:singleProducts.quantiry,
      orderCategory:singleProducts.category,
      userGmail:user?.email

    };
    console.log(order);

    // fetch(`http://localhost:5000/bookingPlace`, {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(bookingData),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.acknowledged) {
    //       alert("booking successfull!!");
    //       // refetch;
    //       navigate("/home");
    //       refetch();
    //     }
    //     console.log(data);
    //   });
    setIsOpen(false);
  }

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
              <div className="flex justify-between items-center">
                <h2 className=" md:text-4xl font-bold my-4">
                  {singleProducts.name}
                </h2>
                <button className=" bg-orange-400 btn text-lg px-10 text-white hover:bg-black  ">
                  Favorite
                </button>
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
                <button
                  onClick={openModal}
                  className="btn w-1/2 bg-[#F01543] text-lg text-white hover:bg-black "
                >
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
        {/* modal code start  */}
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <form
            onSubmit={handleSubmitBtnModal}
            className="modal-box w-full shadow-none "
          >
            <div className="text-center border-4 border-[#F01543] p-3 rounded">
              <div className="flex justify-center items-center">
                <span className=" text-xl mr-2">Email:</span>
                <p className="text-xl font-bold">{user?.email}</p>
              </div>
              <div className="my-3">
                <h3 className="my-3 text-xl ">
                  Name:{" "}
                  <span className="text-black font-bold">
                    {" "}
                    {singleProducts.name}
                  </span>
                </h3>
                <div className="">
                  <p className="text-xl mb-2">
                    Price:
                    <span className="font-bold text-black ml-2">
                      ${singleProducts.price * quantity}.00
                    </span>
                  </p>
                  <p className="text-xl mb-2">
                    Quantity:
                    <span className="font-bold text-black ml-2">
                      {quantity}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-20">
              <button
                onClick={closeModal}
                className="btn mr-10 bg-[#F01543] text-white text-lg px-10"
              >
                Close
              </button>
              <button
                type="submit"
                className="btn bg-green-600 text-white text-lg"
              >
                Confrom Order
              </button>
            </div>
          </form>
        </Modal>
        {/* modal code end  */}
      </div>
    </div>
  );
};

export default SingleProduct;