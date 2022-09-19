import React, { useEffect, useState } from 'react'
import getProducts from '../componentes/utils/getProducts';
import ItemDetail from '../componentes/ItemDetail';

const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    useEffect(() => {
      getProducts()
      .then(result => setData(result[1]))
      .catch(err => console.log(err))
    }, []);
    
  return (
    <ItemDetail item={data}/>
  );
}

export default ItemDetailContainer;