import React from 'react'
import Btn from './utils/counter';

const Item = ({product}) => {
  const onAdd = (cantidad) =>{
    alert(`Agregas ${cantidad} producto/s a tu carrito`)
  }
  return (
    <div className="card" alt="productosLibreria">
                <img className="img" src={product.img}/>
                <div className="cardBody">
                <h2 className="cardTitle">{product.title}</h2>
                <p className="cardText">${product.price}</p>
                <Btn onAdd={onAdd} />
                </div>
    </div>
  )
}

export default Item;