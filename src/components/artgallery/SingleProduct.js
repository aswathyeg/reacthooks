import React, { useContext } from "react";
import { Cart } from "./context/Context";
import "./Styles.css";
const SingleProduct = ({ prod }) => {
  const { cart, setCart } = useContext(Cart);
  return (
    <div className="products">
      <img src={prod.image} alt={prod.name} />
      <div className="prodDesc">
        <span style={{ fontWeight: 700 }}>{prod.name}</span>
        <span>${prod.price.substring(0, 3)}</span>
      </div>
      {cart.includes(prod) ? (
        <button
          className="remove"
          onClick={() => {
            setCart(cart.filter((c) => c.id !== prod.id));
          }}
        >
          Remove from Cart
        </button>
      ) : (
        <button
          className="add"
          onClick={() => {
            setCart([...cart, prod]);
          }}
        >
          AddtoCart
        </button>
      )}
    </div>
  );
};

export default SingleProduct;