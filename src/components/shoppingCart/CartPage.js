import React, { useEffect, useState, useContext } from "react";
import SingleProduct from "./SingleProduct";
import { Cart } from "./Context";
const CartPage = () => {
  const { cart } = useContext(Cart);
  const [total, setTotal] = useState();
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);
  return (
    <div>
      <span style={{ fontSize: 30 }}>My cart</span>
      <br />
      <span style={{ fontSize: 30 }}>Total:{total}</span>
      <div className="productContainer">
        {cart.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};
export default CartPage;
