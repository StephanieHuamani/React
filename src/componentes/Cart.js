import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';

const Cart = () => {
  const { cartList, cartClear, totalItemPrice, totalItemPriceWithShipping} = useContext(CartContext);

  return (
    <>
    <h1 className='titulo'>Carrito</h1>
    <div className='btnContainerCart'>
    <Link to="/"><button className="btnSeguirComprando">Seguir comprando</button></Link> 
    <button onClick={cartClear} className="btnBorrarCarrito">Borrar carrito</button>
    </div>
    {cartList.length === 0 ?
          <p className='subtitleCart'>Su carrito esta vacio :c</p>
        :
        <div>
          <div className='precioFinalContainerCart'>
          {cartList.map(product => <CartItem key={product.item.id} product={product} />)}
          </div>
          <div className='precioFinalContainerCart'>
            <p className='priceCart'>Subtotal (sin envío): ${totalItemPrice()}</p>
            <p className='priceCart'>Envio (precio único para todo el país): $300</p>
            <p className='finalPrice'>Total a pagar: ${totalItemPriceWithShipping()}</p>
            <button className='btnFinalizarCompra'>Finalizar Compra</button>
          </div>
        </div>
      }
    </>
  )
}

export default Cart;