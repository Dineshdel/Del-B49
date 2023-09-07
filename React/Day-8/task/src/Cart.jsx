import React, { useContext } from "react";
import { ProductContext } from "./ContextApi/Context";
import "./App.css";
import jsonData from "./Product.json";

const Cart = () => {
  const productsData = JSON.stringfy(jsonData);

  const cartItems = useContext(ProductContext);

  //   console.log(cartItems)
  console.log("cartItems", cartItems);

  if (cartItems.length === 0) {
    return (
      <div>
        <p> "No Items Added"</p>
      </div>
    );
  }

  return (
    <div>
      {cartItems &&
        cartItems.map((singleItems) => (
          <div>
            <p>{singleItems.title}</p>
            <p>{singleItems.price}</p>
            <img src={singleItems.image} alt="img" />
          </div>
        ))}
    </div>
  );
};

export default Cart;
