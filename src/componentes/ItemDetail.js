import React, { useState } from 'react';
import Btn from './utils/counter';
import { Link } from 'react-router-dom';

const ItemDetail = ({item}) => {
  const onAdd = (cantidad) =>{
    setCart(true);
    alert(`Agregas ${cantidad} producto/s a tu carrito`)
  }

  const [cart, setCart] = useState(false);

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
            {
                  cart ? <Link to="/cart"><button className='button'>Ver Carrito</button></Link> : <div><Btn onAdd={onAdd}/></div>
                  }
        </div>
      </div>
      </>
)
}

export default ItemDetail;