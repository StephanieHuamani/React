import React, { useContext } from 'react';
import { IoIosCart } from "react-icons/io";
import { Link } from "react-router-dom";
import { CartContext } from './CartContext';

const CartWidget = () => {

    const { totalItemIconCart } = useContext(CartContext)

  return (
    <div className="iconNavbar"><Link to="/cart"><IoIosCart className="cartNavbar"/> <span className="iconTotalProductsCart">{totalItemIconCart() || ""}</span> </Link></div>
  )
}

export default CartWidget;