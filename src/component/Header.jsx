import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './Header.css'; 
const Header = ({ handleAboutUsClick, handleDecoratorsClick, handleLoginClick }) => {
  return (
    <div className='fixed-top landingpage'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg">
        <div className="container-fluid ">
          <a className="navbar-brand fw-bold" href="#">OnePlaceEvent</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="/">Home</a>
                {/* <button className="nav-link btn btn-link text-white" onClick={handleAClick}>About Us</button> */}
              </li>
              <li className="nav-item">
                <button className="nav-link btn btn-link text-white" onClick={handleAboutUsClick} >About Us</button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn btn-link text-white" onClick={handleDecoratorsClick}>Services</button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn btn-outline-light rounded-pill px-3" onClick={handleLoginClick}>Login</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
