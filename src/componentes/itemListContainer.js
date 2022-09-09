import Btn from "./counter";
const Section = (props) => {
    const onAdd = (cantidad) =>{
        console.log(`Agregas ${cantidad} a tu carrito`)
    }
    return (<>
        <h1>{props.greeting}</h1>
        <Btn onAdd={onAdd}/>
        </>
    )
}

export default Section;