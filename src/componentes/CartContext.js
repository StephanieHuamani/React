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
    const totalItemIconCart = () => {
        return cartList.reduce((acc, itemCart) => acc + itemCart.quantity, 0 )
    }
    const totalItemPrice = () => {
        return cartList.reduce((acc, itemCart) => acc + (itemCart.item.price * itemCart.quantity), 0 )
    }

    const totalItemPriceWithShipping = () => {
        return totalItemPrice() + 300;
    }

    return(
        <CartContext.Provider value={{cartList, addItem, isInCart, removeItem, cartClear, totalItemIconCart, totalItemPrice, totalItemPriceWithShipping}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;