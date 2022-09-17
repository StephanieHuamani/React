import React, { useEffect } from 'react'
import getProducts from './utils/getProducts';
import ItemDetail from './ItemDetail';
const products = require ('./utils/getProducts');

const ItemDetailContainer = () => {
    const [oneProduct, setOneProduct] = useState({});

    useEffect(() => {
      getProducts(2000, products[1])
      .then(result => setOneProduct(result))
      .catch(err => console.log(err))
    }, []);
    
  return (
    <ItemDetail item={oneProduct}/>
  );
}

export default ItemDetailContainer;