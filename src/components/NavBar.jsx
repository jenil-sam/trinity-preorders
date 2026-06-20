import { Link } from "react-router-dom";
import "../css/NavBar.css"

export default function NavBar() {
  return (
    <>
      <div className='nav-bar'>
        <Link className='title-link' to='/'>
          <h1 className="title">Trinity YS Bake Sale</h1>
        </Link>

        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
        </div>
      </div>

      <div className='box2'></div>
      
    </>
  );
}

