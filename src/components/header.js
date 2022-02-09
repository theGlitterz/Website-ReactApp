import React from 'react';
import logo from './assets/img/Glitterz-logo/Logo v0.3.png';
import './assets/css/style.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Header() {
  return(
    <div>
    <header id="header" class="fixed-top">
    <div className="container-fluid d-flex">

      <div class="logo mr-auto">
         {/* Uncomment below if you prefer to use an image logo  */}
        <a href="index.html"><img src={logo} alt="Glitterz-logo"
      class="img-fluid"></img></a>
      </div>
      <nav class="nav-menu d-none d-lg-block ">
        <ul>
          <li class="active"><a href="index.html">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#footer">Contact Us</a></li>

          <li class="get-started"><a href="#contact">Get Started</a></li>
        </ul>
        {/* .nav-menu */}
      </nav> 

    </div>
    {/* <!-- End Header --> */}
  </header>
    </div>
  );
}

export default Header;
