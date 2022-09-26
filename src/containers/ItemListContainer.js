import React, { useEffect, useState } from 'react';
import ItemList from '../componentes/ItemList';
import Loader from '../componentes/Loader';
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../componentes/utils/firebaseConfig';
const ItemListContainer = () => {
    const [listProducts, setListProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const {idCategory} = useParams();

    useEffect(() =>{
      setLoading(true);
      const firesoreFetch = async () => {
        let q
        if (idCategory){
          q = query(collection(db, "products"), where("category", "==", idCategory))
        } else{
          q = query(collection(db, "products"))
        }
        const querySnapshot = await getDocs(q)
        const productsFromFirestore = querySnapshot.docs.map(document=>({
          id: document.id,
          ...document.data()
        }))
        return productsFromFirestore
    }
    firesoreFetch()
    .then(response => setListProducts(response))
    .finally(() => setLoading(false))
      }, [idCategory]);

  return (
    <div className="listContainer">
        {loading ? <Loader /> : <ItemList products={listProducts}/>}
    </div>
  )
}

export default ItemListContainer;