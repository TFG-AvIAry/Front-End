import React from 'react';
import '../assets/css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const CutImage = () => {
  return (
    <section id="cut-image" className="cut-image">
      <div className="container" data-aos="zoom-out">

        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h3>Time to classify some birds</h3>
            <br></br>
            <p> Thanks to our system you will be able to quickly classify new images of birds that you obtain. </p>
            <p>Remember that the higher the quality of the image and the sharper the bird, the better the AI response will be. </p>
            <a className="cta-btn" href="#">Go for it!</a>
          </div>
        </div>

      </div>
    </section>
  )
}
