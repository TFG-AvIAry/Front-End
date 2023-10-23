import React from 'react';
import '../assets/css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import image1 from '../assets/img/JmFace.png';
import image2 from '../assets/img/JuanPeFace.png';

export const Team = () => {
    return (
        <section id="team" className="team pt-0">
            <div className="container" data-aos="fade-up">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className="section-header">
                    <span>Our Team</span>
                    <h2>Our Team</h2>
                </div>
                <div className="row" data-aos="fade-up" data-aos-delay="100">
                    <div className="col-lg-5 col-md-6 d-flex">
                        <div className="member">
                            <img
                                src={image1}
                                className="img-fluid"
                                alt="Walter White"
                            />
                            <div className="member-content">
                                <h4>Jose Maria Garcia Quijada</h4>
                                <span>Current Software Engineer Student</span>
                                <p>
                                    Don't let laziness decide for you, try it even if you know that the result is not going to be logical, maybe you will learn something new in the process.
                                </p>
                                <div className="social">
                                    <a href="">
                                        <i className="bi bi-twitter"></i>
                                    </a>
                                    <a href="">
                                        <i className="bi bi-facebook"></i>
                                    </a>
                                    <a href="">
                                        <i className="bi bi-instagram"></i>
                                    </a>
                                    <a href="">
                                        <i className="bi bi-linkedin"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 d-none d-md-flex"></div>

                    <div className="col-lg-5 col-md-6 d-flex">
                        <div className="member">
                            <img
                                src={image2}
                                className="img-fluid"
                                alt="William Anderson"
                            />
                            <div className="member-content">
                                <h4>Juan Pedro Dominguez Morales</h4>
                                <span>Expert from IA department</span>
                                <p>
                                    Voluptas necessitatibus occaecati quia. Earum totam
                                    consequuntur qui porro et laborum toro des clara
                                </p>
                                <div className="social">
                                    <a href="">
                                        <i className="bi bi-twitter"></i>
                                    </a>
                                    <a href="">
                                        <i className="bi bi-facebook"></i>
                                    </a>
                                    <a href="">
                                        <i className="bi bi-instagram"></i>
                                    </a>
                                    <a href="">
                                        <i className="bi bi-linkedin"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
