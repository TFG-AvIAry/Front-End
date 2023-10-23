import React from 'react'
import '../assets/css/main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


export const About = () => {
    return (
        <section id="our-tech" className="our-tech">
            <div className="container" id='our-tech'>

                <div className="section-header" data-aos="fade-up">
                    <span>Our Tech</span>
                    <h2>Our Tech</h2>
                </div>

                <div className="row gy-4">

                    <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up">
                        <div className="icon flex-shrink-0"><i className="fa-solid fa-cart-flatbed"></i></div>
                        <div>
                            <h4 className="title">Secuential Neuronal Network</h4>
                            <p className="description">A very interesting option that we considered was to implement a neural network with the objective that, based on brute force and continuous training, it would be able to classify any image of a bird without any problem. However, the training of this neural network required a great computational power that was out of our reach, since a moderate hit rate required a number of hours of training (which consumed too many resources) that we could not afford.</p>
                            <a className="readmore stretched-link"><span>Learn More</span><i className="bi bi-arrow-right"></i></a>
                        </div>
                    </div>


                    <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="100">
                        <div className="icon flex-shrink-0"><i className="fa-solid fa-truck"></i></div>
                        <div>
                            <h4 className="title">Pre-training?</h4>
                            <p className="description">Pretraining in AI is the foundational phase where models are exposed to diverse data, building a broad understanding of language and context. It equips AI with general knowledge before fine-tuning for specific tasks, enabling adaptability and intelligence in various real-world applications.</p>
                            <a  className="readmore stretched-link"><span>Learn More</span><i className="bi bi-arrow-right"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="200">
                        <div className="icon flex-shrink-0"><i className="fa-solid fa-truck-ramp-box"></i></div>
                        <div>
                            <h4 className="title">Transformer</h4>
                            <p className="description">We were investigating how the different neural networks worked and the training they underwent to obtain results. Looking for efficient structures we found the Transformer structure, a new structure with great potential due to its flexibility and decentralized logic which allows its use in many fields, not only in image classification (it can also classify audio or any kind of input) but also in fields such as translation or interactive reading.</p>
                            <a  className="readmore stretched-link"><span>Learn More</span><i className="bi bi-arrow-right"></i></a>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}
