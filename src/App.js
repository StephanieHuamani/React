import Navbar from "./componentes/Navbar";
import Section from "./componentes/Section";
import ItemListContainer from "./containers/ItemListContainer";

const App = () => {
  return (
    <>
    <Navbar />
    <Section greeting="Todos los productos" />
    <ItemListContainer />
    </>
  );
}

export default App;