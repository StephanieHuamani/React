import Navbar from "./componentes/Navbar";
import Section from "./componentes/Section";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer";

const App = () => {
  return (
    <>
    <Navbar />
    <Section greeting="Todos los productos" />
    <ItemDetailContainer/>
    </>
  );
}

export default App;