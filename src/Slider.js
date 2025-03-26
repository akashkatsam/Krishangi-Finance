import React from "react";
import OwlCarousel from "react-owl-carousel3";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Slider = () => {
  const options = {
    loop: true,
    margin: 40,
    nav: false,
    dots: true,
    center: true,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
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
      title: "Your Financial Guardian",
      description:
        "With years of experience and deep industry insights, we provide clear, strategic financial guidance to help you make informed decisions.",
      index: "1/5",
    },
    {
      title: "Expertise That Empowers",
      description:
      "With years of experience and deep industry insights, we provide clear, strategic financial guidance to help you make informed decisions.",
      index: "2/5",
    },
    {
      title: "Trust & Transparency",
      description:
      "With years of experience and deep industry insights, we provide clear, strategic financial guidance to help you make informed decisions.",
      index: "3/5",
    },
    {
        title: "Trust & Transparency",
        description:
        "With years of experience and deep industry insights, we provide clear, strategic financial guidance to help you make informed decisions.",
        index: "3/5",
      },

  ];

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
            <OwlCarousel className="owl-theme custom-carousel" {...options}>
              {items.map((item, index) => (
                <div className="item">
                  <div className="card">
                    <div className="card-body">
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
