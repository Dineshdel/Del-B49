import React, { useContext } from "react";
import { ProductContext } from "./ContextApi/Context";
import "./App.css";
const Home = (props) => {
  const products = useContext(ProductContext);
  console.log("-------", products);

  console.log(props);
  const clickHandler = (item) => {
    setCartItems(...cartItems, item);
  };

  return (
    <div className="container">
      {products &&
        products.map((prod) => {
          <div className="card" key={prod.id}>
            <p>{prod.title}</p>
            <p>{prod.price}</p>
            <img src={prod.image} className="img" />
            <div>
              <button
                onClick={() => {
                  clickHandler(prod);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>;
        })}
    </div>
  );
};

export default Home;
