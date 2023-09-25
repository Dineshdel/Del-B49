import React, { useContext } from "react";
import { ProductContext } from "./ContextApi/Context";
import "./App.css";
// import Home from "./Cart";

const Home = () => {
  const cartItems = useContext(ProductContext);

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
        cartItems[0].map((singleItems) => (
          <div>
            {singleItems.images.map((image, i) => {
              return (
                <div>
                  <img src={image} alt="img" />
                </div>
              );
            })}

            <h2>
              {" "}
              <p>{singleItems.title}</p>
            </h2>
            <h3>
              {" "}
              <p>{singleItems.price}</p>
            </h3>
            <p>{singleItems.brand}</p>
            <p>{singleItems.description}</p>
            <p>{singleItems.discountPercentage}</p>
            <p>{singleItems.thumbnail}</p>
            <button OnClick> Add to Cart</button>

            <br></br>
            <br></br>
            <br></br>
          </div>
        ))}
    </div>
  );
};

export default Home;
