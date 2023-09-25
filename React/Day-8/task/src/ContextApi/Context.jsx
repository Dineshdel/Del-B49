import React, { createContext, useState, useEffect } from "react";
import Home from "../Cart";

export const ProductContext = createContext();
import jsonData from "../Product.json";

const Context = ({ children }) => {
  const [products, setProducts] = useState([]);
  const json = JSON.stringify(jsonData);
  const Date = JSON.parse(json);
  const value = Object.values(Date);

  useEffect(() => {
    if (jsonData) {
      setProducts(value);
    }
  }, []);

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};

export default Context;
