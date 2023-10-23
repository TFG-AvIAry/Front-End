import React, { useEffect } from 'react';
import '../assets/css/main.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export const ScrollToTop = () => {

    useEffect(() => {
        const scrollTop = document.querySelector('.scroll-top');

        if (scrollTop) {
            const toggleScrollTop = function () {
                window.scrollY > 100
                    ? scrollTop.classList.add('active')
                    : scrollTop.classList.remove('active');
            };

            window.addEventListener('load', toggleScrollTop);
            document.addEventListener('scroll', toggleScrollTop);

            scrollTop.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });

            return () => {
                window.removeEventListener('load', toggleScrollTop);
                document.removeEventListener('scroll', toggleScrollTop);
                scrollTop.removeEventListener('click', toggleScrollTop);
            };
        }
    }, []);

    return (
        <a href="#" className="scroll-top d-flex align-items-center justify-content-center">
            <i className="bi bi-arrow-up-short"></i>
        </a>

    )
}
