import React, { useEffect, useState } from 'react'
import ItemDetail from '../componentes/ItemDetail';
import Loader from '../componentes/Loader';
import { useParams } from "react-router-dom";
import { doc, getDoc, query, where } from "firebase/firestore";
import { db } from '../componentes/utils/firebaseConfig';

const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const {idDetail} = useParams();

    useEffect(() =>{
      setLoading(true);
      const firesoreFetch = async () => {
        let q
        const docSnap = await getDoc(q);
        const idFromFirestore = docSnap.doc.filter(document=>({
          id: document.id,
          ...document.data()
        }))
        if (docSnap.exists()) {
          q = query(doc(db, "products"), where("id", "==", idDetail))
        } else{
          q = query(doc(db, "products"))
        }
        return idFromFirestore
    }
    firesoreFetch()
    .then(response => setData(response))
    .finally(() => setLoading(false))
      }, [idDetail]);
    
  return (
    <div>
      {loading ? <Loader /> : <ItemDetail item={data}/>}
    </div>
    
  );
}

export default ItemDetailContainer;