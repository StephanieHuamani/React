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
        <button className="buttonMoreLess" disabled={cant >=5} onClick={handleCant}>+</button> {cant} productos
        <button className="buttonMoreLess" disabled={cant <=0} onClick={handleCantLess}>-</button>
        <br></br>
        <button className="button" onClick={() => onAdd(cant)}>Agregar al Carrito</button>
        </>
    )
}

export default Btn;