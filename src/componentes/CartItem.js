import React, { useContext } from 'react'
import { CartContext } from './CartContext';
import  { IoIosTrash } from "react-icons/io";

const CartItem = ({product}) => {

    const { removeItem } = useContext(CartContext);

  return (
    <>
    <div className='containerCart'>
    <div className='imgContainerCart'>
        <img src={product.item.img} alt ="producto de librería" className="imgCart"/>
    </div>
    <div className='infoContainerCart'>
        <p className='titleCart'>{product.item.title}</p>
        <p className='quantityCart'>Cantidad: {product.quantity}</p>
    </div>
    <div className='priceContainerCart'>
        <IoIosTrash onClick={() => removeItem(product.item.id)} className="iconDelete"/>
        <p className='priceCart'>Subtotal: ${product.quantity * product.item.price}</p>
    </div>
    </div>
    </>
  )
}

export default CartItem;