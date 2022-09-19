import Navbar from "./componentes/Navbar";
import ItemListContainer from "./containers/ItemListContainer"
import ItemDetailContainer from "./containers/ItemDetailContainer";
import { BrowserRouter, Routes, Route,  } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/category/:idCategory" element={<ItemListContainer />} />
      <Route path="/detalle/:idDetail" element={<ItemDetailContainer />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;