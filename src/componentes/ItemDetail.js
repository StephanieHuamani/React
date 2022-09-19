import React from 'react';
import Btn from './utils/counter';

const ItemDetail = ({item}) => {
  const onAdd = (cantidad) =>{
    alert(`Agregas ${cantidad} producto/s a tu carrito`)
  }
  return (
    <>
    <h2 className="itemTitle">{item.title}</h2>
    <div className="divItemContainer">
        <div className="divItemImg">
          <img src={item.img} alt="" className="itemImg"/>
        </div>

        <div className="itemInfoContainer">
            <p className="pItemDescription">Detalle del producto: {item.description}</p>
            <p className="pItemStock">Tenemos {item.stock} unidades en stock</p>
            <p className="cardText">$ {item.price}</p>
            <div><Btn onAdd={onAdd}/></div>
        </div>
      </div>
      </>
)
}

export default ItemDetail;