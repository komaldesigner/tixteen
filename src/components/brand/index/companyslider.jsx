import React from 'react';
import OwlCarousel from 'react-owl-carousel';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import Amul from "../../../assets/img/brand/Logos/Amul.jpg";
import Yumiraa from "../../../assets/img/brand/Logos/Yumiraa.jpg";
import GoodMorning from "../../../assets/img/brand/Logos/Good-Morning.jpg";
import SeventySeven from "../../../assets/img/brand/Logos/77.jpg";
import Gang from "../../../assets/img/brand/Logos/Gang.jpg";
import Huge from "../../../assets/img/brand/Logos/Huge.jpg";
import Kashish from "../../../assets/img/brand/Logos/Kashish.jpg";
import LalQilla from "../../../assets/img/brand/Logos/Lal-Qilla.jpg";

const CarouselComponent = () => {
    const options = {
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: { items: 1, nav: true },
            280: { items: 2, nav: true },
            380: { items: 3, nav: true, loop: true },
            500: { items: 4, nav: true, loop: true },
            575: { items: 5, nav: true, loop: true },
            650: { items: 6, nav: true, loop: true },
            900: { items: 7, nav: true, loop: true }
        }
    };

    const logos = [
        { src: Amul, alt: 'Amul' },
        { src: Yumiraa, alt: 'Yumiraa' },
        { src: GoodMorning, alt: 'Good Morning' },
        { src: SeventySeven, alt: '77' },
        { src: Gang, alt: 'Gang' },
        { src: Huge, alt: 'Huge' },
        { src: Kashish, alt: 'Kashish' },
        { src: LalQilla, alt: 'Lal Qilla' }
    ];

    return (
        <div className="lstbg">
        <div className="btnfnt">
          <button type="button" className="btn btn-dark">VIEW ALL</button>
        </div>
        <div className="fttrlogos">
          <div className="influhmbnr6cont">
        <OwlCarousel className="owl-theme" {...options}>
            {logos.map((logo, index) => (
                <div className="homlogo" key={index}>
                    <img src={logo.src} alt={logo.alt} />
                </div>
            ))}
        </OwlCarousel>
        </div>
        </div>
      </div>

    );
};

export default CarouselComponent;
