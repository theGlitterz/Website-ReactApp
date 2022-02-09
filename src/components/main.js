import React from 'react';
import './assets/css/style.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/vendor/bootstrap/css/bootstrap.css'
import './assets/vendor/bootstrap/css/bootstrap-grid.css'
import './assets/vendor/bootstrap/css/bootstrap-grid.min.css'
import './assets/vendor/bootstrap/css/bootstrap-reboot.css'
import './assets/vendor/bootstrap/css/bootstrap-reboot.min.css'
import './assets/vendor/bootstrap/css/bootstrap.min.css'
import logo from './assets/img/Illustrations/undraw_true_love_cy8x.svg';
import logo1 from './assets/img/Illustrations/Icons/innovation.svg';
import logo2 from './assets/img/Illustrations/Icons/user centred.svg';
import logo3 from './assets/img/Illustrations/Icons/it consulting.svg';
import logo4 from './assets/img/Illustrations/Icons/solution design.svg';
import logo5 from './assets/img/Illustrations/Icons/application dev.svg';
import logo6 from './assets/img/Illustrations/Icons/it support.svg';
import logo7 from './assets/img/Illustrations/Icons/solution design.svg';
function Main() {
  return (
    <main id="main">
    {/* <!-- ======= About Section ======= --> */}
    <section id="about" class="about">
      <div class="container">

        <div class="row justify-content-between">
          <div class="col-lg-5 d-flex align-items-center justify-content-center about-img">
            <img src={logo} class="img-fluid" alt="" data-aos="zoom-in"></img>
          </div>
          <div class="col-lg-6 pt-5 pt-lg-0">
            <h3 data-aos="fade-up">We are a team of young, inquisitive professionals who are passionate about digital
              transformation</h3>
            <br></br>
            {/* <!-- <p data-aos="fade-up" data-aos-delay="100">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Duis aute irure dolor in reprehenderit
          </p> --> */}
            <div class="row">
              <div class="col-md-6" data-aos="fade-up" data-aos-delay="100">
                <img src={logo1} class="glitterz_icons"></img>
                <h4 class="title">Innovative Solutions</h4>
                <p class="description">Pushing the boundaries of technology to provide simple solutions for complex
                  business problems</p>
              </div>
              <div class="col-md-6" data-aos="fade-up" data-aos-delay="200">
                <img src={logo2} class="glitterz_icons"></img>
                <h4 class="title">User Centered Design</h4>
                <p class="description">Designing experiences keeping user's needs at the heart of every solution</p>
              </div>
            </div>
          </div>
        </div>

      </div>
      {/* <!-- End About Section --> */}
    </section>
    
    {/* <!-- ======= Services Section ======= --> */}
    <section id="services" className="services section-bg">
      <div class="container">

        <div class="section-title" data-aos="fade-up">
          <h2>Services</h2>
          <p>Check out the great services we offer</p>
        </div>

        <div class="row services-center">
          <div class="col-md-4  d-flex align-items-stretch services-center" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box">
              <img src={logo3} class="glitterz_icons"></img>
              <h4 class="title"><a href="">IT Consulting</a></h4>
              <p class="description"> Supporting businesses to proactively tackle their current and forthcoming
                challenges</p>
            </div>
          </div>

          <div class="col-md-4 d-flex align-items-stretch services-center" data-aos="zoom-in" data-aos-delay="200">
            <div class="icon-box">
              <img src={logo4} class="glitterz_icons"></img>
              <h4 class="title"><a href="">Solution Design</a></h4>
              <p class="description">User-centered tailor made solutions to help businesses take the next big step</p>
            </div>
          </div>

          <div class="col-md-4  d-flex align-items-stretch services-center" data-aos="zoom-in" data-aos-delay="300">
            <div class="icon-box">
              <img src={logo5} class="glitterz_icons"></img>
              <h4 class="title"><a href="">Application Development</a></h4>
              <p class="description">Applications to digitalise your business for scale, efficiency and growth</p>
            </div>
          </div>

          <div class="col-md-4  d-flex align-items-stretch services-center" data-aos="zoom-in" data-aos-delay="400">
            <div class="icon-box">
              <img src={logo6} class="glitterz_icons"></img>
              <h4 class="title"><a href="">IT Support</a></h4>
              <p class="description">Striving for customer satisfaction, prioritising customers and building long-term
                associations</p>
            </div>
          </div>
          <div class="col-md-4  d-flex align-items-stretch services-center" data-aos="zoom-in" data-aos-delay="200">
            <div class="icon-box">
              <img src={logo7} class="glitterz_icons"></img>
              <h4 class="title"><a href="">Digital Marketing</a></h4>
              <p class="description">Engage with your existing and potential customers on social media in a really cool and innovative fashion </p>
            </div>
          </div>
        </div>

      </div>

      {/* <!-- End Services Section --> */}
    </section>
    



    {/* <!-- ======= Contact Us Section ======= --> */}
    <section id="contact" class="contact">
      <div class="container">

        <div class="section-title" data-aos="fade-up">
          <h2>Let's get started</h2>
          <p>How can we help you?</p>
        </div>

        <div class="row">

          {/* <!-- <div class="col-lg-5 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
          
          <div class="info">
            <a href="index.html"><img src="assets/img/Glitterz-logo/Logo_updated tagline.png" alt="" class="img-fluid img-footer"></a>
            <div class="email">
              <i class="icofont-envelope"></i>
              <h4>Email:</h4>
              <p>contact@theglitterz.com</p>
            </div>
            <div class="phone">
              <i class="icofont-phone"></i>
              <h4>Call:</h4>
              <p>+353 899 512 148</p>
            </div>
            
            <div class="phone">
              <i class="icofont-phone"></i>
              <h4>Call:</h4>
              <p>+353 899 512 148</p>
            </div>
        </div> --> */}

          <div className="col-lg-12 mt-5 mt-lg-0 d-flex align-items-stretch " data-aos="fade-up" data-aos-delay="200">
            <form
              action="https://script.google.com/macros/s/AKfycbzb3-Iehr7hxSS7lHvP5CEeUr3l-7E3XN4hJ_Ggc5fmY0aIbYB7kAZ8/exec"
              method="post" role="form" class="php-email-form gform">
              <div class="form-row">
                
                <div className="form-group col-md-6">
                  <label for="name">Your Name</label>
                  <input type="text" name="name" class="form-control" id="name" data-rule="minlen:4"
                    data-msg="Please enter at least 4 chars" required />
                  <div class="validate"></div>
                </div>
                <div class="form-group col-md-6">
                  <label for="name">Your Email</label>
                  <input type="email" class="form-control" name="email" id="email" data-rule="email"
                    data-msg="Please enter a valid email" required />
                  <div class="validate"></div>
                </div>
                
              </div>
              <div class="form-group">
                <label for="name">Subject</label>
                <input type="text" class="form-control" name="subject" id="subject" data-rule="minlen:4"
                  data-msg="Please enter at least 8 chars of subject" required />
                <div class="validate"></div>
              </div>
              <div class="form-group">
                <label for="name">Message</label>
                <textarea class="form-control" name="message" rows="10" data-rule="required"
                  data-msg="Please write something for us" required></textarea>
                <div class="validate"></div>
              </div>
              <div class="mb-3">
                <div class="loading">Loading</div>
                <div class="error-message">Oops.. something went wrong. Please try again</div>
                <div class="sent-message">Thank you for your message. We will be in touch with you shortly</div>
              </div>
              <div class="text-center"><button type="submit" onClick={window['formFunction']}>Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>
    {/* <!-- End Contact Us Section --> */}


    </main>
  );
}

export default Main;
