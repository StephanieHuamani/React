import { createContext, useState } from "react";

export const CartContext = createContext ();

const CartContextProvider = ({children}) =>{

    const [cartList, setCartList] = useState([]);

    const addItem = (product, quantity) => {
        if(isInCart(product.id)){
            const itemIndex = cartList.findIndex(element => element.item.id === product.id);
            cartList[itemIndex].quantity = cartList[itemIndex].quantity + quantity;
            setCartList([...cartList]);
        } else{
            setCartList([...cartList, {item: product, quantity}])
        }
    }


    const isInCart = (id) =>{
        return cartList.some(element => element.item.id === id)
    }

    const removeItem = (id) => {
        const newCart = cartList.filter(element => element.item.id !== id)
        setCartList(newCart);
    }

    const cartClear = () => {
        setCartList([])
    }

    return(
        <CartContext.Provider value={{cartList, addItem, isInCart, removeItem, cartClear}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;