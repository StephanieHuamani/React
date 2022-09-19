import React, { useEffect, useState } from 'react';
import ItemList from '../componentes/ItemList';
import getProducts from '../componentes/utils/getProducts';
import Loader from '../componentes/Loader';
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [listProducts, setListProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const {idCategory} = useParams();

    useEffect(() =>{
      setLoading(true);
      if (idCategory){
        getProducts()
.then((response) => setListProducts(response.filter(item => item.category === idCategory)))
.catch((err) =>console.error(err))
.finally(() => setLoading(false))
      } else {
        getProducts()
.then((response) => setListProducts(response))
.catch((err) =>console.error(err))
.finally(() => setLoading(false))
      }
    }, [idCategory]);

  return (
    <div className="listContainer">
        {loading ? <Loader /> : <ItemList products={listProducts}/>}
    </div>
  )
}

export default ItemListContainer;