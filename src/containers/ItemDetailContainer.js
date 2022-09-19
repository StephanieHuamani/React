import React, { useEffect, useState } from 'react'
import getProducts from '../componentes/utils/getProducts';
import ItemDetail from '../componentes/ItemDetail';
import Loader from '../componentes/Loader';
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const {idDetail} = useParams();

    useEffect(() => {
      setLoading(true);
      getProducts()
      .then(result => setData(result.find(item => item.id  == idDetail)))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
    }, [idDetail]);
    
  return (
    <div>
      {loading ? <Loader /> : <ItemDetail item={data}/>}
    </div>
    
  );
}

export default ItemDetailContainer;