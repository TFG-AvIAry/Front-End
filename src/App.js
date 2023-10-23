import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import Aos from 'aos';
import axios from 'axios';
import 'aos/dist/aos.css';
import PureCounter from '@srexi/purecounterjs';
import { useEffect, useState } from 'react';
import { About } from './components/About';
import { Team } from './components/Team';
import { FaQ } from './components/FaQ';
import GLightbox from 'glightbox';
import { ScrollToTop } from './components/ScrollToTop';
import { Ia } from './components/Ia';
import { CutImage } from './components/CutImage';
import { Footer } from './components/Footer';
import { CarouselBrands } from './components/CarouselBrands';
import { Card } from './components/Card';
import { Chart } from './components/Chart';



function App() {

  const [iaData, setIaData] = useState(null);

  const [iaData2, setIaData2] = useState(null);

  const [backData, setBackData] = useState(null);



  useEffect(() => {

    new PureCounter('.purecounter');

    axios.get("http://localhost:8080/birds/get")
      .then(response => {
        // Aquí puedes trabajar con los datos recibidos, por ejemplo, mostrarlos en la página web
        console.log('datossssssss', response.data);
        setBackData(response.data);
      })
      .catch(error => {
        console.error("Error:", error);
      });

    /**
   * Mobile nav toggle
   */
    const mobileNavShow = document.querySelector('.mobile-nav-show');
    const mobileNavHide = document.querySelector('.mobile-nav-hide');

    document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
      el.addEventListener('click', function (event) {
        event.preventDefault();
        mobileNavToogle();
      })
    });

    function mobileNavToogle() {
      document.querySelector('body').classNameList.toggle('mobile-nav-active');
      mobileNavShow.classNameList.toggle('d-none');
      mobileNavHide.classNameList.toggle('d-none');
    }

    /**
     * Hide mobile nav on same-page/hash links
     */
    document.querySelectorAll('#navbar a').forEach(navbarlink => {

      if (!navbarlink.hash) return;

      let section = document.querySelector(navbarlink.hash);
      if (!section) return;

      navbarlink.addEventListener('click', () => {
        if (document.querySelector('.mobile-nav-active')) {
          mobileNavToogle();
        }
      });

    });

    /**
     * Toggle mobile nav dropdowns
     */
    const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

    navDropdowns.forEach(el => {
      el.addEventListener('click', function (event) {
        if (document.querySelector('.mobile-nav-active')) {
          event.preventDefault();
          this.classNameList.toggle('active');
          this.nextElementSibling.classNameList.toggle('dropdown-active');

          let dropDownIndicator = this.querySelector('.dropdown-indicator');
          dropDownIndicator.classNameList.toggle('bi-chevron-up');
          dropDownIndicator.classNameList.toggle('bi-chevron-down');
        }
      })
    });

    Aos.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });

  }, []);


  return (

    <>

      <Nav />
      <Hero dataFromIa={iaData} dataFromIa2={iaData2} backData={backData}/>
      <About />
      <Ia onDataUpdate={setIaData} onDataUpdate2={setIaData2} backData={backData}/>
      <Features />
      <CutImage />
      <Team />
      <FaQ />
      <CarouselBrands />
      <Footer />
      <ScrollToTop />

    </>
  );
}

export default App;
