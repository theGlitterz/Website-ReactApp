import React from 'react';
import logo from './assets/img/Business Cards/Business_card_combined_updated_phone_no.jpeg';
function Visiting() {
  return (
    <section id="visiting">
    <div class="container"> 
    <div class="row pt-2">
        <div class="col-12 d-flex justify-content-center p-3">
            <a href="assets/img/Business Cards/Business_card_combined_updated_phone_no.jpeg" download="Glitterz Business Card">
            
                <img src={logo} alt="Glitterz Business Card" width="400"
                    height="500" id="download-image"/>
            </a>
        </div>
        </div>
    </div>
    </section>
  );
}

export default Visiting;
