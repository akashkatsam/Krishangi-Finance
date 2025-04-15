import React, { useRef } from "react";
import OwlCarousel from "react-owl-carousel3";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "bootstrap/dist/css/bootstrap.min.css";
import orangebg from './orangebg.png';
import img1 from './General Insurance4.png'
import img2 from './icon-2.jpg'
import img3 from './icon-3.jpg'
import img4 from './icon 4.jpg'
import img5 from './icon-5.jpg'

const Slider = () => {
  const carouselRef = useRef();

  const options = {
    loop: true,
    margin: 35,
    nav: false,
    dots: true,
    center: true,
    autoplay: true,
    autoplayTimeout: 400000, // changed from 3000 to 4000ms
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1.2,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  const items = [
    {
      title: "Financial Guardian",
      img:img1,
      description:
        "We don’t just manage wealth, we nurture it with care, ensuring your financial well-being at every step.",
      index: "1/5",
    },
    {
      title: "Expertise",
      img:img2,
      description:
        "With years of experience and deep industry insights, we provide clear, strategic financial guidance to help you make informed decisions.",
      index: "2/5",
    },
    {
      title: "Trust & Transparency",
      img:img3,
      description:
        "Built on a foundation of integrity, we bring structure and discipline to your finances, ensuring stability and sustained growth.",
      index: "3/5",
    },
    {
      title: "Personalized Solutions",
      img:img4,
      description:
        "Your goals are unique, and so is our approach. From wealth creation to volatility control, we tailor strategies to align with your aspirations.",
      index: "4/5",
    },
    {
      title: "Financial Excellence",
      img:img5,
      description:
        "With a commitment to excellence, we provide expert-led services that help you stay in control of your financial future.",
      index: "5/5",
    },
  ];

  const handleClick = (index) => {
    if (carouselRef.current) {
      carouselRef.current.to(index, 300); // go to the clicked item
    }
  };

  return (
    <section className="why-krishangi-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5 text-white">
            <h2>Why Krishangi?</h2>
            <p className="text-why">
              Guided by expertise and built on trust, we craft financial
              solutions that adapt, grow, and secure your future with
              confidence.
            </p>
          </div>
          <div className="col-md-7">
            <OwlCarousel
              className="owl-theme custom-carousel"
              {...options}
              ref={carouselRef}
            >
              {items.map((item, index) => (
                <div
                  key={index}
                  className="item"
                  style={{ cursor: "pointer" }} // pointer cursor on hover
                  onClick={() => handleClick(index)} // center on click
                >
                  <div className="card">
                    <div className="card-body">
                      <img src={item.img} className="img-fluid orangebox" />
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.description}</p>
                      <span className="index">{item.index}</span>
                    </div>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
