import React from 'react';
import './assets/css/style.css';
import logo from './assets/img/Illustrations/undraw_content_team_3epn.svg';

function Hero() {
  return (
    <section id="hero" class="d-flex align-items-center">

    <div class="container">
      <div class="row">
        <div class="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1">
          <h1>Intelligent and customised IT solutions with Glitterz</h1>
          <h2>Delivering user-centered innovative experiences</h2>
          <a href="#contact" class="btn-get-started scrollto">Get Started</a>
        </div>
        <div class="col-lg-6 order-1 order-lg-2 hero-img">
     
              <img src={logo} class="img-fluid animated" alt=""></img>
        </div>
      </div>
    </div>
    {/* <!-- End Hero --> */}
  </section>
  );
}

export default Hero;
