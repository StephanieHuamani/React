import React from 'react';
import Btn from './utils/counter';

const ItemDetail = ({item}) => {
  const onAdd = (cantidad) =>{
    alert(`Agregas ${cantidad} producto/s a tu carrito`)
  }
  return (
    <>
    <h2 className="itemTitle">{item.title}Titulo</h2>
    <div className="divItemContainer">
        <div className="itemImg">
          <img src={item.img} alt=""/>
        </div>

        <div className="itemInfoContainer">
            <p className="pItemDescription">Detalle del producto:{item.description}</p>
            <p className="pItemStock">Tenemos {item.stock} unidades en stock</p>
            <p className="pItemPrice">${item.price}</p>
            <Btn onAdd={onAdd}/>
        </div>
      </div>
      </>
)
}

export default ItemDetail;