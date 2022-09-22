import { IoIosCart } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () =>{
    return (
        <>
 <nav className="navbar">
  <div>
  <Link to="/"><img alt="logo" src="http://d3ugyf2ht6aenh.cloudfront.net/stores/891/147/themes/common/logo-1846906730-1657206055-405949e6552c3c55495b051e8d8487441657206055.jpg?0" className="imgNavbar"/></Link>
  </div>

  <div className="containerNavbar">
      <Link to="/" className="aLink">Home</Link>
      <Link to="/category/Cuaderno" className="aLink">Cuadernos</Link> 
      <Link to="/category/Librería" className="aLink">Librería</Link>
      <Link to="/category/Escritura" className="aLink">Escritura</Link>
  </div>
  
  <div className="cartNavbar"><Link to="/cart"><IoIosCart /></Link></div>
</nav>
        </>
    );
  }

export default Navbar;