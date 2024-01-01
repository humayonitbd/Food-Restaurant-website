// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';

const Products = () => {
    const [allProducts,setAllProducts] = useState([]);

    useEffect(() => {
      fetch(`http://localhost:5000/api/v1/allProductsData`)
        .then((res) => res.json())
        .then((data) => setAllProducts(data.data))
        .catch((error) => console.error("Error fetching data:", error));
    }, []);
    console.log(allProducts)
    return (
      <div className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
          {allProducts?.map((allProduct) => (
            <div
              key={allProduct._id}
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
      </div>
    );
};

export default Products;