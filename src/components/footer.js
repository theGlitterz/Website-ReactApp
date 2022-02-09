import React from 'react';
import './assets/css/style.css';
import logo from './assets/img/Glitterz-logo/Logo v0.3.png';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Visiting from './visiting_card';
function Footer() {
  return (
    // <!-- ======= Footer ======= -->
    <footer id="footer">
  
      <div class="footer-top">
        <div class="container">
          <div class="row">
  
            <div className="col-lg-3 col-md-6 footer-contact" data-aos="fade-up" data-aos-delay="100">
              <a href="index.html"><img src={logo} alt=""
                  className="img-fluid img-footer"></img></a>
                  <p id="footer-contact">
                <strong>Phone:</strong> +353 899 512 148<br></br>
                <strong>Email:</strong>contact@theglitterz.com<br></br>
                <a href="#visiting" target="_blank" rel="noopener noreferrer">Our Business Card</a>
                </p>
            </div>
  
            <div className="col-lg-2 col-md-6 footer-links pt-4 pr-0 mr-0 pl-2" data-aos="fade-up" data-aos-delay="200">
              <h4>Useful Links</h4>
              <ul>
                <li><i class="bx bx-chevron-right"></i> <a href="index.html">Home</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="#about">About Us</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="#services">Services</a></li>
              </ul>
            </div>
  
            <div className="col-lg-4 col-md-6 footer-links pt-4 pl-2 ml-0" data-aos="fade-up" data-aos-delay="300">
              <h4>Our Services</h4>
              <ul>
                <li><i class="bx bx-chevron-right"></i> <a href="#services">IT Consulting</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="#services">Solution Design</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="#services">Application Development</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="#services">IT Support</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="#services">Digital Marketing</a></li>
              </ul>
            </div>
  
          </div>
        </div>
      </div>
    </footer>
    /* <!-- End Footer --> */
  );
}

export default Footer;
