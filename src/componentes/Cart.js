import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';

const Cart = () => {
  const { cartList, cartClear} = useContext(CartContext);

  return (
    <>
    <h1 className='titulo'>Carrito</h1>
    {cartList.length === 0 ?
          <p className='subtitleCart'>Su carrito esta vacio</p>
        :
        <div>
          {cartList.map(product => <CartItem key={product.item.id} product={product} />)}
        </div>
      }
    <div className='btnContainerCart'>
    <Link to="/"><button className="btnSeguirComprando">Seguir comprando</button></Link> 
    <button onClick={cartClear} className="btnBorrarCarrito">Borrar carrito</button>
    </div>
    </>
  )
}

export default Cart;