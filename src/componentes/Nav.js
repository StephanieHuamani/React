import { IoIosCart } from "react-icons/io";

const Navbar = () =>{
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-evenly">
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <a className="nav-link" href="index.html">Home</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Cuadernos</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Librería</a>
    </li>
    <li className="nav-item">
      <a className="nav-link">Artistica</a>
    </li>
  </ul>
  <IoIosCart />
</nav>
        </>
    );
  }

export default Navbar;