import React, { useContext } from 'react';
import { IoIosCart } from "react-icons/io";
import { Link } from "react-router-dom";
import { CartContext } from './CartContext';

const CartWidget = () => {

    const { totalItemIconCart } = useContext(CartContext)

  return (
    <div className="iconNavbar"><Link to="/cart"><IoIosCart className="cartNavbar"/></Link> <span className='iconTotalProductsCart' hidden={totalItemIconCart()===0}>{totalItemIconCart()}</span> </div>
  )
}

export default CartWidget;