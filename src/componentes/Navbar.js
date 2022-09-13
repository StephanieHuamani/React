import { IoIosCart } from "react-icons/io";

const Navbar = () =>{
    return (
        <>
 <nav className="navbar navbar-expand-lg navbar-light bg-secondary d-flex justify-content-evenly">
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <a className="nav-link text-light" href="index.html">Home</a>
    </li>
    <li className="nav-item">
      <a className="nav-link text-light" href="#">Cuadernos</a>
    </li>
    <li className="nav-item">
      <a className="nav-link text-light" href="#">Librería</a>
    </li>
    <li className="nav-item">
      <a className="nav-link text-light">Artistica</a>
    </li>
  </ul>
  <IoIosCart />
</nav>
        </>
    );
  }

export default Navbar;