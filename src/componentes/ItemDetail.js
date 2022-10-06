import React, { useContext, useState } from 'react';
import Btn from './utils/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";

const ItemDetail = ({item}) => {
  const { addItem } = useContext(CartContext);

  const [cart, setCart] = useState(false);
  
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
                  cart ? <Link to="/cart"><button className='button'>Ver Carrito</button></Link> : <div><Btn stock={item.stock} initial={1} onAdd={onAdd}/></div>
                  }
        </div>
      </div>
      </>
)
}

export default ItemDetail;