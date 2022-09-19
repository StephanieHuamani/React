import { IoIosCart } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () =>{
    return (
        <>
 <nav className="navbar navbar-expand-lg navbar-light bg-secondary d-flex justify-content-evenly">
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <Link to="/">Home</Link>
    </li>
    <li className="nav-item">
      <Link to="/category/Cuaderno">Cuadernos</Link> 
    </li>
    <li className="nav-item">
      <Link to="/category/Librería">Librería</Link>
    </li>
    <li className="nav-item">
      <Link to="/category/Escritura">Escritura</Link>
    </li>
  </ul>
  <IoIosCart />
</nav>
        </>
    );
  }

export default Navbar;