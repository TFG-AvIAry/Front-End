import React, { useEffect } from 'react';
import '../assets/css/main.css'
import 'bootstrap/dist/css/bootstrap.min.css';




export const Nav = () => {

  /**
  * Sticky header on scroll
  */
  useEffect(() => {
    const selectHeader = document.querySelector('#header');

    if (selectHeader) {
      const handleScroll = () => {
        window.scrollY > 100
          ? selectHeader.classList.add('sticked')
          : selectHeader.classList.remove('sticked');
      };

      document.addEventListener('scroll', handleScroll);

      return () => {
        document.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  useEffect(() => {
    const mobileNavShow = document.querySelector('.mobile-nav-show');
    const mobileNavHide = document.querySelector('.mobile-nav-hide');

    document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
      el.addEventListener('click', function (event) {
        event.preventDefault();
        mobileNavToggle();
      });
    });

    function mobileNavToggle() {
      document.body.classList.toggle('mobile-nav-active');
      mobileNavShow.classList.toggle('d-none');
      mobileNavHide.classList.toggle('d-none');
    }

    document.querySelectorAll('#navbar a').forEach(navbarlink => {
      if (!navbarlink.hash) return;

      let section = document.querySelector(navbarlink.hash);
      if (!section) return;

      navbarlink.addEventListener('click', () => {
        if (document.querySelector('.mobile-nav-active')) {
          mobileNavToggle();
        }
      });
    });

    const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

    navDropdowns.forEach(el => {
      el.addEventListener('click', function (event) {
        if (document.querySelector('.mobile-nav-active')) {
          event.preventDefault();
          this.classList.toggle('active');
          this.nextElementSibling.classList.toggle('dropdown-active');

          let dropDownIndicator = this.querySelector('.dropdown-indicator');
          dropDownIndicator.classList.toggle('bi-chevron-up');
          dropDownIndicator.classList.toggle('bi-chevron-down');
        }
      });
    });
  }, []);

  return (

    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

        <a href="#hero" className="logo d-flex align-items-center">
          <h1>avIAry</h1>
        </a>

        <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
        <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
        <nav id="navbar" className="navbar">
          <ul>
            <li><a href="#hero" className="active">Home</a></li>
            <li><a href="#our-tech">Our Tech</a></li>
            <li><a href="#our-features">Features</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#faq">FaQ</a></li>
            <li><a className="get-a-quote" href="#footer">Powered By</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
