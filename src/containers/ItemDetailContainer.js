import React, { useEffect, useState } from 'react'
import ItemDetail from '../componentes/ItemDetail';
import Loader from '../componentes/Loader';
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../componentes/utils/firebaseConfig';

const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const {idDetail} = useParams();

    useEffect(() =>{
      setLoading(true);
      const firesoreFetchId = async () => {
        const docSnap = await getDoc(doc(db, "products", idDetail));
        return {idDetail: idDetail, ...docSnap.data()}
    }
    firesoreFetchId()
    .then(result => setData(result))
    .finally(() => setLoading(false))
      }, [idDetail]);
    
  return (
    <div>
      {loading ? <Loader /> : <ItemDetail item={data}/>}
    </div>
    
  );
}

export default ItemDetailContainer;