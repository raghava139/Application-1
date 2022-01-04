import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function NavBar() {
const GeTTingData = useSelector(state => state.HandleCart)
  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-dark py-2 bg-light">
        <div className="container">
          <Link className="navbar-brand fw-bold fs-5 text-danger active" to="/Home">
            Magical Products
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to="/Home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="contactus">
                  Contactus
                </Link>
              </li>
            </ul>
            <div className="buttons">
                    <Link className="btn btn-outline-light" to='/Login'> 
                        <i className="bi bi-box-arrow-in-right me-1"></i>  Login
                    </Link>
                    <Link className="btn btn-outline-light ms-1"to='/cart'>   
                      <i className="bi bi-cart me-1"></i>
                      <span className="px-1">Cart</span>
                      <span className='badge badge-dark m-0'>{GeTTingData.length}</span>
                  </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
