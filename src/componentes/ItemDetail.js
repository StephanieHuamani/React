import React from 'react';
import Btn from './utils/counter';

const ItemDetail = ({item}) => {
  const onAdd = (cantidad) =>{
    alert(`Agregas ${cantidad} producto/s a tu carrito`)
  }
  return (
    <>
    {
            <div className="card" alt="itemosLibreria">
            <img className="img" src={item.img}/>
            <div className="cardBody">
            <h2 className="cardTitle">{item.title}</h2>
            <p className="cardText">${item.price}</p>
            <Btn onAdd={onAdd} />
            </div>
</div>
    }
    </>
  )
}

export default ItemDetail;