import React, { useState } from "react";
import { ProductContext } from ".";

const RoodContext = (props) => {
  const [productUrl, setProductUrl] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productAll, setProductAll] = useState([]);
  const [basket, setBasket] = useState([]); 

  const addToProduct = () => {
    let newProduct = {
      id: 1,
      url: productUrl,
      name: productName,
      price: productPrice,
    };
    let result = [...productAll, newProduct];
    setProductAll(result);
    setProductUrl("");
    setProductName("");
    setProductPrice("");
  };

  const deleteProduct = (index) => {
    let updatedProductAll = [...productAll];
    updatedProductAll.splice(index, 1);
    setProductAll(updatedProductAll);
  };

  const basketProduct = (index) => {
    const selectedProduct = productAll[index];
    setBasket((prevBasket) => [...prevBasket, selectedProduct]);
    console.log("Added to basket:", selectedProduct);
  };

  console.log(productAll);

  return (
    <ProductContext.Provider
      value={{
        addToProduct,
        deleteProduct,
        setProductUrl,
        setProductName,
        setProductPrice,
        productAll,
        productUrl,
        productPrice,
        productName,
        basketProduct,
        basket,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default RoodContext;
