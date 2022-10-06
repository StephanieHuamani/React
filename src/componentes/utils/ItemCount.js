import { useState } from "react";

const Btn = ({onAdd, stock, initial}) => {
    const [cant, setCant] = useState(initial);

    const handleCant = () =>{
        setCant(cant+1);
    }
    const handleCantLess = () =>{
        setCant(cant-1)
    }
    return (<>
        <button className="buttonMoreLess" disabled={cant >=stock} onClick={handleCant}>+</button> {cant} producto/s
        <button className="buttonMoreLess" disabled={cant <=1} onClick={handleCantLess}>-</button>
        <br></br>
        <button className="button" disabled={stock <=0} onClick={() => onAdd(cant)}>Agregar al Carrito</button>
        </>
    )
}

export default Btn;