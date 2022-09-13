import React, { useEffect, useState } from 'react';
import ItemList from '../componentes/ItemList';
import getProducts from '../componentes/utils/getProducts';
import Loader from '../componentes/Loader';

const ItemListContainer = () => {
    const [listProducts, setListProducts] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() =>{
        setLoading(true);
getProducts()
.then((response) => setListProducts(response))
.catch((err) =>console.error(err))
.finally(() => setLoading(false))
    }, [])

  return (
    <div className="listContainer">
        {loading ? <Loader /> : <ItemList products={listProducts}/>}
        
    </div>
  )
}

export default ItemListContainer;