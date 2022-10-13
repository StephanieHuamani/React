import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { serverTimestamp, doc, setDoc, collection, updateDoc, increment } from 'firebase/firestore';
import { db } from "./utils/firebaseConfig";
import Swal from 'sweetalert2';

const Cart = () => {
  const { cartList, cartClear, totalItemPrice, totalItemPriceWithShipping} = useContext(CartContext);
  const createOrder = async () => {
    const itemsCart = cartList.map(itemCart => ({
      id: itemCart.item.id,
      title: itemCart.item.title,
      quantity: itemCart.quantity,
      price: itemCart.item.price
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

    cartList.forEach( async (itemCart) => {
      const updateStock = doc(db, "products", itemCart.item.id);
      await updateDoc(updateStock, {
        stock: increment(-itemCart.quantity)
      });
    })
    Swal.fire({
      icon: 'success',
      title: 'Compra finalizada',
      text: `Su número de orden es: ${newOrderId.id}`,
      footer: '<p>¡Gracias por su compra!</p>'
    })

    cartClear()
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