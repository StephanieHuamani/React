import { useState } from "react";

const Btn = ({onAdd}) => {
    const [cant, setCant] = useState(0);
    const handleCant = () =>{
        setCant(cant+1);
    }
    const handleCantLess = () =>{
        setCant(cant-1)
    }
    return (<>
        <button disabled={cant >=5} onClick={handleCant}>+</button> {cant} productos
        <button disabled={cant <=1} onClick={handleCantLess}>-</button>
        <br></br>
        <button onClick={() => onAdd(cant)}>Agregar al Carrito</button>
        </>
    )
}

export default Btn;