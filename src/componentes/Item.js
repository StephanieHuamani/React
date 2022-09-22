import React, { useState, useContext } from 'react'
import Btn from './utils/counter';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

const Item = ({product}) => {
  const { addItem } = useContext(CartContext);

  const onAdd = (quantity) =>{
    setCart(true);
    alert(`Agregas ${quantity} producto/s a tu carrito`);
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