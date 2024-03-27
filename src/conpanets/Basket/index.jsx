import React, { useContext, useState } from "react";
import { ProductContext } from "../../context";

const Basket = () => {
  const { productAll, deleteProduct } = useContext(ProductContext);
  const [deletedProductIndex, setDeletedProductIndex] = useState(null);

  const handleDelete = (index) => {
    deleteProduct(index);
    setDeletedProductIndex(index);
  };

  return (
    <div className="container">
      <div className="flex items-start flex-wrap gap-12">
        {productAll.map((el, index) => (
          <div
            key={index}
            className={`max-w-sm bg-white border text-center border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ${
              deletedProductIndex === index ? "fade-out" : ""
            }`}
          >
            <a href="#">
              <img
                className="rounded-t-lg w-full"
                src={el.url}
                alt=""
                style={{ width: "200px", height: "200px" }}
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5
                  className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                >
                  {el.name}
                </h5>
              </a>

              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {el.price}$
              </a>
              <button
                style={{
                  padding: "7px 10px",
                  borderRadius: "10px",
                  color: "white",
                  background: "red",
                  border: "1px solid ",
                }}
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Basket;
