import React, { useEffect, useState } from 'react'
import getProducts from '../componentes/utils/getProducts';
import ItemDetail from '../componentes/ItemDetail';
const products = require ('../componentes/utils/getProducts');

const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    useEffect(() => {
      getProducts(2000, products[1])
      .then(result => setData(result))
      .catch(err => console.log(err))
    }, []);
    
  return (
    <ItemDetail item={data}/>
  );
}

export default ItemDetailContainer;