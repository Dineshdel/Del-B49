import React, { createContext, useState, useEffect } from "react";
import Home from "../Home";

export const ProductContext = createContext();
import jsonData from "../Product.json";

const Context = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  console.log("data----s", jsonData);
  const datas = JSON.parse(jsonData);

  const getApiData = async () => {
    await fetch("../Product.json")
      .then((response) => response.json())
      .then((result) => setProducts(result));
  };

  console.log("data", datas);
  useEffect(() => {
    // getApiData();
    // if (jsonData) {
    //   setProducts(jsonData);
    // }
  }, []);

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};

export default Context;
