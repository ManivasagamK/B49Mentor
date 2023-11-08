import { useContext } from "react";
import { useNavigate, Link } from 'react-router-dom';
import "./navbar.css";
import { AppContext } from "../../App";

const NavBar = () => {
  const { cartCount } = useContext(AppContext);
  const navigate = useNavigate();
  const navigateToCart = () => {
    navigate('/cartItems');
  }
  return (
    <div className="container">
      <nav className="navbar navbar-expand-sm navbar-light">
        <div className="nav-item">
          <h4 className="brand-title">
            <Link className="link" to="/">
              ShopHere
            </Link>
          </h4>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="nav-flex collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://">About</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="https://" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Shop
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="https://">All products</a>
                <a className="dropdown-item" href="https://">Popular Items</a>
                <a className="dropdown-item" href="https://">New Arrivals</a>
              </div>
            </li>
          </ul>
          <div onClick={navigateToCart} className="nav-item btn btn-primary cart-item">
            Cart
            <div className="item-count"><p>{cartCount}</p></div>
          </div>
        </div>
      </nav>
    </div>

  );
}

export default NavBar;