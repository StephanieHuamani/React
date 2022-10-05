import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { serverTimestamp, doc, setDoc, collection, updateDoc, increment } from 'firebase/firestore';
import { db } from "./utils/firebaseConfig"

const Cart = () => {
  const { cartList, cartClear, totalItemPrice, totalItemPriceWithShipping} = useContext(CartContext);
  const createOrder = async () => {
    const itemsCart = cartList.map(item => ({
      id: item.id,
      title: item.title,
      quantity: item.quantity,
      price: item.price
    }))
    let order = {
      buyer:{
        name: "Stephanie Huamani",
        phone: 224987133,
        email: "stefHuama@hotmail.com"
      },
      date: serverTimestamp(),
      items: itemsCart,
      total: totalItemPrice()
    }

    const newOrderId = doc(collection(db, "orders"))
    await setDoc(newOrderId, order);

    cartList.forEach( async (item) => {
      const updateStock = doc(db, "products", item.id);
      await updateDoc(updateStock, {
        stock: increment(-item.quantity)
      });
    })
    cartClear()

    alert('Pedido realizado. Tu número de orden es:' + newOrderId.id)
  }

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
            <button className='btnFinalizarCompra' onClick={() => createOrder()}>Finalizar Compra</button>
          </div>
        </div>
      }
    </>
  )
}

export default Cart;