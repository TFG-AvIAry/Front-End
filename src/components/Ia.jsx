import React, { useState } from 'react';
import '../assets/css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Hero } from './Hero';
import axios from 'axios';
import { Chart } from './Chart';





export const Ia = ({ onDataUpdate, onDataUpdate2, backData}) => {

  const [data, setData] = useState('');
  const [classificationResults, setClassificationResults] = useState([]);


  const [image, setImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSendImage = () => {

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    const formData = new FormData();
    formData.append('image', image);

    axios.post('http://127.0.0.1:5000/upload', formData).then((res) => {
      console.log('res', res);
      console.log('resdata', res.data);
      console.log('resclass', res.data[0].class);
      console.log('resprop', res.data[0].confidence);
      setData(res.data[0].class);
      setClassificationResults(res.data);
    });




  };


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const maxSize = 3000000;
    const allowedExtensions = /(\.jpeg|\.webp|\.jpg)$/i;

    if (!file) return; // No file selected

    if (!allowedExtensions.exec(file.name)) {
      setErrorMessage('Invalid file type. Only JPEG, JPG and WEBP files are allowed.');
    } else if (file.size > maxSize) {
      setErrorMessage('The file is too large (max 3Mb)');
    } else {
      setImage(file);
      setErrorMessage(null);
    }
  };

  const totalConfidenceOfTop5 = (results) => {
    return results.slice(0, 5).reduce((total, result) => total + result.confidence, 0);
  };




  const buscarEspeciePorNombre = (nombreEspecie) => {
    const especieEncontrada = backData.find(especie => especie.name === nombreEspecie);
    return especieEncontrada || null;
  }

  const speciesNameToFind = data; // Cambia esto al nombre que desees buscar

  console.log('ayayay', speciesNameToFind)
  const speciesDataFound = speciesNameToFind ? buscarEspeciePorNombre(speciesNameToFind) : null;
  console.log('especie encontradaIa', speciesDataFound);
  onDataUpdate2(speciesDataFound);


  return (

    <section id="about" className="about pt-0">
      <div className="container" data-aos="fade-up">
        <div className="row gy-4">
          <div className="col-lg-6 position-relative align-self-start order-lg-last order-first">
            <div
              className="img-fluid rectangulo-responsive"
              style={{
                maxWidth: '100%',
                height: '43vh',
                maxHeight: '43vh',
                border: '2px solid gray',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                const maxSize = 3000000;
                const allowedExtensions = /(\.jpeg|\.webp|\.jpg)$/i;
                const file = e.dataTransfer.files[0];

                if (!allowedExtensions.exec(file.name)) {
                  setErrorMessage('Invalid file type. Only JPEG, JPG and WEBP files are allowed.');
                } else if (file.size > maxSize) {
                  setErrorMessage('The file is too large (max 3Mb)');
                } else {
                  setImage(file);
                  setErrorMessage(null);
                }
              }}
            >
              {image ? (
                <img src={URL.createObjectURL(image)} style={{ maxWidth: '100%', maxHeight: '100%' }} />
              ) : (
                <div>Drag an image here</div>
              )}
              {errorMessage && <div>{errorMessage}</div>}
            </div>
            <input type="file" id="fileInput" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} />
            <button className="get-a-quote" id="our-features" onClick={() => document.getElementById('fileInput').click()}>Select Image</button>
            <button className="get-a-quote" id="our-features">Refresh Tab</button>
            <button className="get-a-quote" id="our-features" onClick={handleSendImage}>Send Image</button>

            <div>
              <h1>Classification analysis</h1>
              {classificationResults.map((result, index) => (
                <div key={index}>
                  <p>Specie: {result.class}</p>
                  <p>Confidence: {((result.confidence / totalConfidenceOfTop5(classificationResults)) * 100).toFixed(2)}%</p>
                </div>
              ))}
            </div>
          </div>


          <div className="col-lg-6 content order-last order-lg-first">
            <h3>IA</h3>
            <p>Offer an image to our AI for it to evaluate and tell you what species it thinks it is and relevant info about it.</p>
            <ul>
              <li data-aos="fade-up" data-aos-delay="100">
                <i className="bi bi-diagram-3"></i>
                <div>
                  <h5>Large number of possible species </h5>
                  <p>We have more than 400 species, so the possibilities are very wide.</p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-fullscreen-exit"></i>
                <div>
                  <h5>Straight to the target</h5>
                  <p>After analysis the AI decides which is the best match between your result and our database.</p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay="300">
                <i className="bi bi-broadcast"></i>
                <div>
                  <h5>Output of the result</h5>
                  <p>The result is almost instantaneous and the AI is able to write it at the top for you for your convenience.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="row gy-4">

          <div className="col-lg-6 position-relative align-self-start order-lg-last order-first">
            <Chart classificationResults={classificationResults} />
          </div>
          <div className="col-lg-6 content order-last order-lg-first">
            <Chart classificationResults={classificationResults} />

          </div>


        </div>
      </div>

    </section>
  )
}
