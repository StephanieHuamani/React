import React, { useEffect, useState } from 'react'
import getProducts from '../componentes/utils/getProducts';
import ItemDetail from '../componentes/ItemDetail';
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const {idDetail} = useParams();

    useEffect(() => {
      getProducts()
      .then(result => setData(result.find(item => item.id  === idDetail)))
      .catch(err => console.log(err))
    }, [idDetail]);
    
  return (
    <ItemDetail item={data}/>
  );
}

export default ItemDetailContainer;