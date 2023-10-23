import React, { useState, useRef, useEffect } from "react";
import '../assets/css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Confetti from "react-confetti";
import { Card } from './Card';

export const Hero = ({ dataFromIa, dataFromIa2, backData }) => {
    const [inputValue, setInputValue] = useState(dataFromIa);
    const [searchTerm, setSearchTerm] = useState('');
    const [showConfetti, setShowConfetti] = useState(false);
    const [refreshComponent, setRefreshComponent] = useState(false);

    console.log('backDataHerooooo', backData);

    console.log('dataFromIa', dataFromIa);
    console.log('dataFromIa2', dataFromIa2);

    const [height, setHeight] = useState(null);
    const [width, setWidth] = useState(null);
    const confetiRef = useRef(null);

    useEffect(() => {
        setHeight(confetiRef.current.clientHeight);
        setWidth(confetiRef.current.clientWidth);
    }, []);

    useEffect(() => {
        setInputValue(dataFromIa);
    }, [dataFromIa]);

    useEffect(() => {
        if (dataFromIa2) {
            setShowConfetti(true);
            setTimeout(() => {
                setShowConfetti(false);
            }, 3500);
        }
    }, [dataFromIa2, refreshComponent]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        setSearchTerm(e.target.value);
    };

    const handleClean = () => {
        setInputValue('');
        setSearchTerm('');
    };

    const birdNames = backData ? backData.map((bird) => bird.name) : [];

    console.log('birdNames22', birdNames);

    const filteredList = birdNames.filter((word) =>
        searchTerm && word.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section id="hero" className="hero d-flex align-items-center">
            <div className="container">
                <div className="confettie-wrap" ref={confetiRef}>
                    <div className="row gy-4 d-flex justify-content-between">
                        <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                            <h2 data-aos="fade-up">Do you have a captured bird (in a picture)?</h2>
                            <p data-aos="fade-up" data-aos-delay="100">
                                We have the tools to free your doubts and give you all the relevant information about that species of birds, so that you keep on investigating and being curious about birds.
                                <br></br>
                                <br></br>
                                * Click in the card to show all the info about the bird specie and click again to close the info
                            </p>

                            <form action="#" className="form-search d-flex align-items-stretch mb-3" data-aos="fade-up" data-aos-delay="200">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Bird specie to investigate"
                                    value={inputValue}
                                    onChange={handleInputChange}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            e.preventDefault();
                                            window.scrollTo(0, 0);
                                        }
                                    }}
                                />
                                <button type="submit" className="btn btn-primary" onClick={handleClean}>
                                    Clean
                                </button>
                            </form>

                            <div className="row gy-4" data-aos="fade-up" data-aos-delay="400">
                                <div className="col-lg-3 col-6">
                                    <div className="stats-item text-center w-100 h-100">
                                        <span data-purecounter-start="0" data-purecounter-end="400" data-purecounter-duration="1" className="purecounter"></span>
                                        <p>Species</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-6">
                                    <div className="stats-item text-center w-100 h-100">
                                        <span data-purecounter-start="0" data-purecounter-end="3" data-purecounter-duration="1" className="purecounter"></span>
                                        <p>IA's</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-6">
                                    <div className="stats-item text-center w-100 h-100">
                                        <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1" className="purecounter"></span>
                                        <p>Code Lines</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-6">
                                    <div className="stats-item text-center w-100 h-100">
                                        <span data-purecounter-start="0" data-purecounter-end="1000" data-purecounter-duration="1" className="purecounter"></span>
                                        <p>Info Lines</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 order-1 order-lg-2 hero-img" data-aos="zoom-out">
                            <Card dataFromIa={dataFromIa} dataFromIa2={dataFromIa2} filteredList={filteredList} handleClean={handleClean} backData={backData} />
                        </div>
                    </div>
                    {showConfetti && (
                        <Confetti numberOfPieces={150} width={width} height={height} />
                    )}
                </div>
            </div>
        </section>
    );
};
