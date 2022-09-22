import React, { useContext, useState } from 'react';
import Btn from './utils/counter';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

const ItemDetail = ({item}) => {
  const { addItem } = useContext(CartContext);

  const [cart, setCart] = useState(false);
  
  const onAdd = (quantity) =>{
    setCart(true);
    alert(`Agregas ${quantity} producto/s a tu carrito`)
    addItem(item, quantity)
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
            {
                  cart ? <Link to="/cart"><button className='button'>Ver Carrito</button></Link> : <div><Btn onAdd={onAdd}/></div>
                  }
        </div>
      </div>
      </>
)
}

export default ItemDetail;