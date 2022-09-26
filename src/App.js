import Navbar from "./componentes/Navbar";
import ItemListContainer from "./containers/ItemListContainer"
import ItemDetailContainer from "./containers/ItemDetailContainer";
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import Cart from "./componentes/Cart";
import CartContextProvider from "./componentes/CartContext";
import "./componentes/utils/firebaseConfig"

const App = () => {
  return (
    <CartContextProvider>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/category/:idCategory" element={<ItemListContainer />} />
      <Route path="/detalle/:idDetail" element={<ItemDetailContainer />} />
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;