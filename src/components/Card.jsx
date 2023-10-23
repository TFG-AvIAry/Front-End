import React, { useState, useEffect, useCallback } from 'react';
import '../assets/css/card.css';
import arrowUp from '../assets/img/arrow-up.png';
import arrowDown from '../assets/img/arrow-down.png';

const angle = 20;

const lerp = (start, end, amount) => {
    return (1 - amount) * start + amount * end;
};

const remap = (value, oldMax, newMax) => {
    const newValue = ((value + oldMax) * (newMax * 2)) / (oldMax * 2) - newMax;
    return Math.min(Math.max(newValue, -newMax), newMax);
};


export const Card = ({ dataFromIa2, filteredList, handleClean, backData }) => {



    const [index, setIndex] = useState(dataFromIa2 ? dataFromIa2.id : 0);
    console.log('index', index)
    const [datosMostrados, setDatosMostrados] = useState(backData ? backData[index] : null);
    const [showAttributes, setShowAttributes] = useState(false); // Estado para controlar la visibilidad de los atributos





    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [isMouseOver, setIsMouseOver] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);




    const originalPosition = { rotateX: 0, rotateY: 0 };


    const handleMouseMove = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const offsetX = event.nativeEvent.offsetX - centerX;
        const offsetY = event.nativeEvent.offsetY - centerY;

        const x = remap(offsetX, rect.width / 2, angle);
        const y = remap(offsetY, rect.height / 2, angle);
        setRotateX(x);
        setRotateY(-y);
        setIsMouseOver(true);
    };

    const handleMouseLeave = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            animateReturnToOriginalPosition();
        }
    };


    const cardStyle = {
        '--rotateX': isMouseOver ? `${rotateX}deg` : '0deg',
        '--rotateY': isMouseOver ? `${rotateY}deg` : '0deg',
        transition: 'transform 0.3s ease-in-out',
    };

    const findMatchingNameInFilteredList = useCallback(() => {
        const speciesKeys = Object.keys(backData);
        let newIndex = -1;

        if (filteredList.length === 0) {
            // Si no hay texto de búsqueda, muestra el primer elemento
            setIndex(0);
            setDatosMostrados(backData[speciesKeys[0]]);
            return;
        }

        if (index >= 0 && index < speciesKeys.length) {
            // Comprueba si el elemento actual sigue siendo una coincidencia
            const currentKey = speciesKeys[index];
            const currentName = backData[currentKey].name;
            if (filteredList.includes(currentName)) {
                setDatosMostrados(backData[currentKey]);
                return;
            }
        }

        // Busca la primera coincidencia después del índice actual
        newIndex = speciesKeys.slice(index + 1).findIndex((key) => filteredList.includes(backData[key].name));
        if (newIndex !== -1) {
            newIndex += index + 1;
            setIndex(newIndex);
            setDatosMostrados(backData[speciesKeys[newIndex]]);
        } else {
            // Si no se encontraron coincidencias después del índice actual, busca desde el principio
            newIndex = speciesKeys.findIndex((key) => filteredList.includes(backData[key].name));
            if (newIndex !== -1) {
                setIndex(newIndex);
                setDatosMostrados(backData[speciesKeys[newIndex]]);
            }
        }
    }, [backData, filteredList, index]);

    useEffect(() => {
        originalPosition.rotateX = 0;
        originalPosition.rotateY = 0;
    }, []);

    useEffect(() => {

        if (dataFromIa2) {
            handleClean();
            const newData = backData[dataFromIa2.id - 1];
            setDatosMostrados(newData);
        } else if (filteredList && filteredList.length > 0) {
            findMatchingNameInFilteredList();
        }
    }, [backData, dataFromIa2, filteredList, findMatchingNameInFilteredList, handleClean]);

    useEffect(() => {
        // Cuando el índice cambia, actualiza los datos mostrados
        if (index >= 1) {
            setDatosMostrados(backData[index]);
        }
    }, [backData, index]);



    const animateReturnToOriginalPosition = () => {
        const startTime = Date.now();
        const duration = 500; // Duración de la animación en milisegundos

        const startRotateX = rotateX;
        const startRotateY = rotateY;

        const frame = () => {
            const currentTime = Date.now();
            const elapsed = currentTime - startTime;

            if (elapsed < duration) {
                const t = elapsed / duration;
                setRotateX(lerp(startRotateX, originalPosition.rotateX, t));
                setRotateY(lerp(startRotateY, originalPosition.rotateY, t));
                requestAnimationFrame(frame);
            } else {
                setIsAnimating(false);
            }
        };

        frame();
    };

    const handleIncrement = () => {
        handleClean();
        setIndex((prevIndex) => prevIndex < 401 - 1 ? prevIndex + 1 : prevIndex);
    };


    const handleDecrement = () => {
        handleClean();
        setIndex((prevIndex) => prevIndex > 0 ? prevIndex - 1 : prevIndex);
    };

    console.log('datosMostrados', datosMostrados);

    const isLastCard = index === 401 - 1;
    const isFirstCard = index === 1;

    const toggleAttributes = () => {
        setShowAttributes(!showAttributes);
    };



    return (
        <><div className="centered">


            <div
                className="cardBird border-left-behind"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={cardStyle}
                onClick={toggleAttributes}

            >

                <div>

                    <div className="shadow" style={{ '--url': datosMostrados ? `url(${datosMostrados.imagen})` : `url(https://imgs.search.brave.com/PXIL12j7C3VXPu_5qGnbfXSrI2AKngP5JoA3yZVXNtg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTA2/NjY5Njk2L3Bob3Rv/L3BhcnJvdHMuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVVh/U2hTRGZfX2s1R2t2/aEJMYXBzbXFiaUNm/QjVDT3VZbDlqWF9H/MDZCZmc9)` }}></div>
                    <div className="image background" style={{ '--url': datosMostrados ? `url(${datosMostrados.imagen})` : `url(https://imgs.search.brave.com/PXIL12j7C3VXPu_5qGnbfXSrI2AKngP5JoA3yZVXNtg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTA2/NjY5Njk2L3Bob3Rv/L3BhcnJvdHMuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVVh/U2hTRGZfX2s1R2t2/aEJMYXBzbXFiaUNm/QjVDT3VZbDlqWF9H/MDZCZmc9)` }}></div>
                    <div className="image cutout" style={{ '--url': datosMostrados ? `url(${datosMostrados.imagen})` : `url(https://imgs.search.brave.com/PXIL12j7C3VXPu_5qGnbfXSrI2AKngP5JoA3yZVXNtg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTA2/NjY5Njk2L3Bob3Rv/L3BhcnJvdHMuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVVh/U2hTRGZfX2s1R2t2/aEJMYXBzbXFiaUNm/QjVDT3VZbDlqWF9H/MDZCZmc9)` }}></div>

                    <div className="content2">
                        <span>
                            {showAttributes ? (
                                <>
                                    <h2>{datosMostrados ? datosMostrados.name : ''}</h2>
                                    <div className="glass">
                                        <div className="row">
                                            <div className="col-lg-6 position-relative align-self-start order-lg-last order-first">
                                                <h5>{datosMostrados ? datosMostrados.habitat: ''} </h5>
                                            </div>
                                            <div className="col-lg-6 position-relative align-self-start order-lg-last order-first">
                                                <h5>{datosMostrados ? datosMostrados.colores: ''} </h5>
                                            </div>

                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 position-relative align-self-start order-lg-last order-first">
                                                <h5>{datosMostrados ? datosMostrados.esperanza_de_vida: ''}</h5>
                                            </div>
                                            <div className="col-lg-6 position-relative align-self-start order-lg-last order-first">
                                                <h5>{datosMostrados ? datosMostrados.alimentación: ''}</h5>
                                            </div>

                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 position-relative align-self-start order-lg-last order-first">
                                                <h5>{datosMostrados ? datosMostrados.tamaño: ''}</h5>
                                            </div>
                                            <div className="col-lg-6 position-relative align-self-start order-lg-last order-first">
                                                <h5>{datosMostrados ? datosMostrados.peso: ''}</h5>
                                            </div>

                                        </div>
                                    </div>
                                </>
                            ) : (
                                <h2>{datosMostrados ? datosMostrados.name : 'WELCOME TO AVIARY'}</h2>
                            )}
                        </span>


                    </div>

                </div>

            </div>
            <div className="cardButtons">
                <button onClick={handleDecrement} className={`smallButton ${isFirstCard ? 'disabled' : ''}`}>
                    <img src={arrowUp} alt="" />
                </button>
                <button onClick={handleIncrement} className={`smallButton ${isLastCard ? 'disabled' : ''}`}>
                    <img src={arrowDown} alt="" />
                </button>
            </div>
        </div>
            <div className="cardButtons2">
                <button onClick={handleDecrement} className={`smallButton2 ${isFirstCard ? 'disabled' : ''}`}>
                    <img src={arrowUp} alt="" />
                </button>
                <button onClick={handleIncrement} className={`smallButton21 ${isLastCard ? 'disabled' : ''}`}>
                    <img src={arrowDown} alt="" />
                </button>
            </div>

        </>


    );



};
