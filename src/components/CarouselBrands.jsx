import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from '../assets/img/PyTorch.svg'
import image2 from '../assets/img/logo.svg'
import image3 from '../assets/img/MongoDB.svg'
import image4 from '../assets/img/Bootstrap.svg'
import image5 from '../assets/img/Flask.svg'
import image6 from '../assets/img/Netlify-Logo.svg'

export const CarouselBrands = () => {
    return (
        <section id="brands" className="brands pt-0">
            <div className="container" data-aos="fade-up">

                <div className="section-header">
                    <span>Powered by</span>
                    <h2>Powered by</h2>

                </div>

                <div className="row gy-4">

                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                        <div className="card2">
                            <div className="card-img2">
                                <img src={image1} alt="" className="img-fluid" id='pytorchLogo'></img>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                        <div className="card2">
                            <div className="card-img2">
                                <img src={image2} alt="" className="img-fluid"></img>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                        <div className="card2">
                            <div className="card-img2">
                                <img src={image3} alt="" className="img-fluid"></img>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                        <div className="card2">
                            <div className="card-img2">
                                <img src={image4} alt="" className="img-fluid"></img>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
                        <div className="card2">
                            <div className="card-img2">
                                <img src={image5} alt="" className="img-fluid"></img>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
                        <div className="card2">
                            <div className="card-img2">
                                <img src={image6} alt="" className="img-fluid"></img>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </section>
    )
}
