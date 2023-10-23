import React from 'react'
import '../assets/css/main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../assets/img/Features1.webp'
import image2 from '../assets/img/Features2.jpg'
import image3 from '../assets/img/Features3.webp'
import image4 from '../assets/img/Features4.jpg'
import image5 from '../assets/img/Features5.jpg'
import image6 from '../assets/img/Features6.jpg'


export const Features = () => {
    

    return (
        <section id="our-feature" className="services pt-0">
            <div className="container" data-aos="fade-up">

                <div className="section-header">
                    <span>Features</span>
                    <h2>Features</h2>

                </div>

                <div className="row gy-4">

                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                        <div className="card">
                            <div className="card-img">
                                <img src={image1} alt="" className="img-fluid"></img>
                            </div>
                            <h3><a className="stretched-link">Precision Color Classification</a></h3>
                            <p>Identify birds by the spectrum of colors in their plumage, ranging from vibrant hues to subtle variations, with exceptional accuracy.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                        <div className="card">
                            <div className="card-img">
                                <img src={image2} alt="" className="img-fluid"></img>
                            </div>
                            <h3><a className="stretched-link">Avian Morphology Detection</a></h3>
                            <p>Explore differences in wing, beak, and body shapes for precise species identification based on morphology.</p>
                        </div>
                    </div>


                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                        <div className="card">
                            <div className="card-img">
                                <img src={image3} alt="" className="img-fluid"></img>
                            </div>
                            <h3><a className="stretched-link">Real-Time Species Comparison</a></h3>
                            <p>Compare multiple bird species in real-time and obtain detailed information about their visual differences and similarities.</p>
                        </div>
                    </div>


                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                        <div className="card">
                            <div className="card-img">
                                <img src={image4} alt="" className="img-fluid"></img>
                            </div>
                            <h3><a className="stretched-link">User-Friendly and Accessible Interface</a></h3>
                            <p>Our platform offers a user-friendly and accessible interface to cater to both bird experts and novice enthusiasts, ensuring an enjoyable identification experience.</p>
                        </div>
                    </div>


                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
                        <div className="card">
                            <div className="card-img">
                                <img src={image5} alt="" className="img-fluid"></img>
                            </div>
                            <h3><a className="stretched-link">Scalable Cloud Infrastructure</a></h3>
                            <p>We deploy our services on a scalable cloud infrastructure, ensuring high availability, performance, and the ability to handle varying workloads.</p>
                        </div>
                    </div>


                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
                        <div className="card">
                            <div className="card-img">
                                <img src={image6} alt="" className="img-fluid"></img>
                            </div>
                            <h3><a className="stretched-link">Real-time Image Processing</a></h3>
                            <p>Our system utilizes real-time image processing to deliver quick and accurate species classification results, making it ideal for birdwatchers and researchers.</p>
                        </div>

                    </div>
                </div>


            </div>
        </section>
    )
}
