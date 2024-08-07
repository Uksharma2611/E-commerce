import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useAuth } from "../../context/auth";
import { GiShoppingBag } from 'react-icons/gi';
import { toast } from 'react-hot-toast';
import useCategory from '../../;

const Header = () => {
  const { auth, setAuth } = useAuth();
  const categories=useCategory();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand" >
              <GiShoppingBag />E-Commerce App
            </Link>
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink exact to="/" className="nav-link">Home</NavLink>
              </li>
              

              <li className="nav-item">
                <NavLink exact to="/category" className="nav-link">Category</NavLink>
              </li>
              
              {!auth.user ? (
                <>
                  <li className='nav-item'>
                    <NavLink exact to="/register" className="nav-link">Register</NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink exact to="/login" className="nav-link">Login</NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className='nav-item'>
                    <NavLink onClick={handleLogout} exact to="/login" className="nav-link">Logout</NavLink>
                  </li>
                </>
              )}
              <li className="nav-item">
                <NavLink exact to="/cart" className="nav-link" href="#">Cart(0)</NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;