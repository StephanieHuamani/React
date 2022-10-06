import React, { useState, useContext } from 'react'
import Btn from './utils/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";

const Item = ({product}) => {
  const { addItem } = useContext(CartContext);

  const onAdd = (quantity) =>{
    setCart(true);
    Toastify({
      text: `Agregaste ${quantity} producto(s) al carrito`,
      close: true,
      duration: 2000,
      style: {
        color: "white",
        background: "rgb(58,146,252)",
        background: "linear-gradient(90deg, rgba(58,146,252,1) 25%, rgba(41,128,185,1) 95%)",
      },
      }).showToast();
    addItem(product, quantity)
  }

  const [cart, setCart] = useState(false);

  return (
    <div className="card">
                <img className="img" src={product.img}  alt="productosLibreria"/>
                <div className="cardBody">
                <h2 className="cardTitle">{product.title}</h2>
                <p className="cardText">${product.price}</p>
                {
                  cart ? <Link to="/cart"><button className='button'>Ver Carrito</button></Link> : <Btn stock={product.stock} initial={1} onAdd={onAdd}/>
                  }
                <Link to={`/detalle/${product.id}`}><button className='detalleProducto'>Ver detalle del producto</button></Link>
                </div>
    </div>
  )
}

export default Item;