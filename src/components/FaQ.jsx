import React from 'react';
import '../assets/css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const FaQ = () => {
    return (
        <section id="faq" className="faq">
            <div className="container" data-aos="fade-up">

                <div className="section-header">
                    <span>Frequently Asked Questions</span>
                    <h2>Frequently Asked Questions</h2>

                </div>

                <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="200">
                    <div className="col-lg-10">

                        <div className="accordion accordion-flush" id="faqlist">

                            <div className="accordion-item">
                                <h3 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                                        <i className="bi bi-question-circle question-icon"></i>
                                        How does the bird species classification work on this platform?
                                    </button>
                                </h3>
                                <div id="faq-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                    <div className="accordion-body">
                                    We use a deep learning algorithm based on PyTorch to analyze bird images and determine their species. Users can upload an image, and our AI will process the image and provide a corresponding species classification.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h3 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                                        <i className="bi bi-question-circle question-icon"></i>
                                        What should I do if I'm unsure of the species of a bird I've photographed?
                                    </button>
                                </h3>
                                <div id="faq-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                    <div className="accordion-body">
                                    If you have a picture of a bird but are uncertain about its species, you can upload the image to our platform. Our AI will attempt to classify it. You can also search the bird image database for a visual match.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h3 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-3">
                                        <i className="bi bi-question-circle question-icon"></i>
                                        How accurate is the bird species classification?
                                    </button>
                                </h3>
                                <div id="faq-content-3" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                    <div className="accordion-body">
                                    Our AI is trained on a vast database of bird images and is quite accurate. However, accuracy may vary depending on the image quality and identification difficulty. We always recommend cross-referencing the classification with other sources if needed.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h3 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-4">
                                        <i className="bi bi-question-circle question-icon"></i>
                                        Is registration necessary to use the platform?
                                    </button>
                                </h3>
                                <div id="faq-content-4" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                    <div className="accordion-body">
                                        No, registration is not required to perform bird species classifications, you only need to upload an image to see the results.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h3 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-5">
                                        <i className="bi bi-question-circle question-icon"></i>
                                        Can I use the platform on my mobile device?
                                    </button>
                                </h3>
                                <div id="faq-content-5" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                    <div className="accordion-body">
                                    Yes, our platform is responsive and mobile-friendly, so you can access it on your smartphone or tablet. We've designed the user interface to work seamlessly on various screen sizes.
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}
