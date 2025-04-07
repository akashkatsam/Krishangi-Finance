import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./Header";
import IV from './icon/Initiate Money Transfer.png'
import MF from './icon/Positive Dynamic.png'
import protect from './icon/Protect.png'
import heart from './icon/Heart with Pulse.png'
import loan from './icon/Money Bag Rupee.png'
import well from './icon/To Do.png'
import service from './icon/Services.png'
import porfit from './icon/Profitabilitywhite.png'
import icon from './krishangiicon.png'
gsap.registerPlugin(ScrollTrigger);

export default function Service() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".servicecard, .servicecard1", {
        y: 30,
        opacity: 0,
        stagger: 0.3,
        duration: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%", // Animation starts when section enters the viewport
          end: "bottom 50%", // Ends when leaving viewport
          toggleActions: "play reverse play reverse", // Play on enter, reverse on leave
        },
      });
    }, sectionRef);

    return () => ctx.revert(); // Cleanup animation when component unmounts
  }, []);

  return (
  <>
  <section id="our-services" ref={sectionRef} className="service-section">
      <div className="container-fluid">
        <div className="row">
          {/* Service Heading */}
          <div className="col-md-4">
            <div className="serviceheading">
              <h4> <img src={icon} className="img-fluid" /> <span>Our
                </span> Services</h4>
              <p>
                At Krishangi Finance, we provide expert financial solutions tailored to your needs,
                ensuring stability and growth.
              </p>
            </div>
          </div>

          {/* Service Cards */}
          <div className="col-md-4">
            <div className="servicecard">
              <div className="heading">
                <div className="box1">
                  <img src={porfit}  className="img-fluid"/>
                </div>
                <h2>Financial Planning</h2>
                <p>We help you create a strategic roadmap for your financial future.</p>
                <svg width="27" height="24" viewBox="0 0 27 24" fill="none">
                  <path d="M26.0607 13.0607C26.6464 12.4749 26.6464 11.5251 26.0607 10.9393L16.5147 1.3934C15.9289 0.807612 14.9792 0.807612 14.3934 1.3934C13.8076 1.97918 13.8076 2.92893 14.3934 3.51472L22.8787 12L14.3934 20.4853C13.8076 21.0711 13.8076 22.0208 14.3934 22.6066C14.9792 23.1924 15.9289 23.1924 16.5147 22.6066L26.0607 13.0607Z" fill="#fff"/>
                </svg>
              </div>
            </div>
          </div>

   

          <div className="col-md-4">
            <div className="servicecard1">
              <div className="heading">
                <div className="box2">
                  <img src={service}  className="img-fluid"/>
                </div>
                <h2>Mutual Funds</h2>
                <p>Secure your future with comprehensive retirement plans.</p>
                <svg width="27" height="24" viewBox="0 0 27 24" fill="none">
                  <path d="M26.0607 13.0607C26.6464 12.4749 26.6464 11.5251 26.0607 10.9393L16.5147 1.3934C15.9289 0.807612 14.9792 0.807612 14.3934 1.3934C13.8076 1.97918 13.8076 2.92893 14.3934 3.51472L22.8787 12L14.3934 20.4853C13.8076 21.0711 13.8076 22.0208 14.3934 22.6066C14.9792 23.1924 15.9289 23.1924 16.5147 22.6066L26.0607 13.0607Z" fill="#434343"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="servicecard1">
              <div className="heading">
                <div className="box2">
                  <img src={IV} className="img-fluid"/>
                </div>
                <h2>Alternative Investment Funds</h2>
                <p>AIFs offer high-net-worth investors unique opportunities beyond traditional assets.</p>
                <svg width="27" height="24" viewBox="0 0 27 24" fill="none">
                  <path d="M26.0607 13.0607C26.6464 12.4749 26.6464 11.5251 26.0607 10.9393L16.5147 1.3934C15.9289 0.807612 14.9792 0.807612 14.3934 1.3934C13.8076 1.97918 13.8076 2.92893 14.3934 3.51472L22.8787 12L14.3934 20.4853C13.8076 21.0711 13.8076 22.0208 14.3934 22.6066C14.9792 23.1924 15.9289 23.1924 16.5147 22.6066L26.0607 13.0607Z" fill="#434343"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="servicecard1">
              <div className="heading">
                <div className="box2">
                  <img src={MF} className="img-fluid"/>
                </div>
                <h2>Mutual Funds</h2>
                <p>Invest in a diversified range of mutual funds suited to your risk tolerance and goals.</p>
                <svg width="27" height="24" viewBox="0 0 27 24" fill="none">
                  <path d="M26.0607 13.0607C26.6464 12.4749 26.6464 11.5251 26.0607 10.9393L16.5147 1.3934C15.9289 0.807612 14.9792 0.807612 14.3934 1.3934C13.8076 1.97918 13.8076 2.92893 14.3934 3.51472L22.8787 12L14.3934 20.4853C13.8076 21.0711 13.8076 22.0208 14.3934 22.6066C14.9792 23.1924 15.9289 23.1924 16.5147 22.6066L26.0607 13.0607Z" fill="#434343"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="servicecard1">
              <div className="heading">
                <div className="box2">
                <img src={protect} className="img-fluid"/>

                </div>
                <h2>General Insurance
                </h2>
                <p>Protect your assets with our comprehensive general insurance plans, including health,</p>
                <svg width="27" height="24" viewBox="0 0 27 24" fill="none">
                  <path d="M26.0607 13.0607C26.6464 12.4749 26.6464 11.5251 26.0607 10.9393L16.5147 1.3934C15.9289 0.807612 14.9792 0.807612 14.3934 1.3934C13.8076 1.97918 13.8076 2.92893 14.3934 3.51472L22.8787 12L14.3934 20.4853C13.8076 21.0711 13.8076 22.0208 14.3934 22.6066C14.9792 23.1924 15.9289 23.1924 16.5147 22.6066L26.0607 13.0607Z" fill="#434343"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="servicecard1">
              <div className="heading">
                <div className="box2">
                <img src={loan} className="img-fluid"/>

                </div>
                <h2>Loans</h2>
                <p>Access personalized loan solutions, including home, personal, business, and education loans.</p>
                <svg width="27" height="24" viewBox="0 0 27 24" fill="none">
                  <path d="M26.0607 13.0607C26.6464 12.4749 26.6464 11.5251 26.0607 10.9393L16.5147 1.3934C15.9289 0.807612 14.9792 0.807612 14.3934 1.3934C13.8076 1.97918 13.8076 2.92893 14.3934 3.51472L22.8787 12L14.3934 20.4853C13.8076 21.0711 13.8076 22.0208 14.3934 22.6066C14.9792 23.1924 15.9289 23.1924 16.5147 22.6066L26.0607 13.0607Z" fill="#434343"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="servicecard1">
              <div className="heading">
                <div className="box2">
                <img src={well} className="img-fluid"/>

                </div>
                <h2>Will & Estate Planning
                </h2>
                <p>Secure your legacy with structured will and estate planning services.</p>
                <svg width="27" height="24" viewBox="0 0 27 24" fill="none">
                  <path d="M26.0607 13.0607C26.6464 12.4749 26.6464 11.5251 26.0607 10.9393L16.5147 1.3934C15.9289 0.807612 14.9792 0.807612 14.3934 1.3934C13.8076 1.97918 13.8076 2.92893 14.3934 3.51472L22.8787 12L14.3934 20.4853C13.8076 21.0711 13.8076 22.0208 14.3934 22.6066C14.9792 23.1924 15.9289 23.1924 16.5147 22.6066L26.0607 13.0607Z" fill="#434343"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="servicecard1">
              <div className="heading">
                <div className="box2">
                  <img src={heart} className="img-fluid"/>
                </div>
                <h2>Life Insurance</h2>
                <p>Plan for the future with life insurance solutions that offer financial security to your loved ones.</p>
                <svg width="27" height="24" viewBox="0 0 27 24" fill="none">
                  <path d="M26.0607 13.0607C26.6464 12.4749 26.6464 11.5251 26.0607 10.9393L16.5147 1.3934C15.9289 0.807612 14.9792 0.807612 14.3934 1.3934C13.8076 1.97918 13.8076 2.92893 14.3934 3.51472L22.8787 12L14.3934 20.4853C13.8076 21.0711 13.8076 22.0208 14.3934 22.6066C14.9792 23.1924 15.9289 23.1924 16.5147 22.6066L26.0607 13.0607Z" fill="#434343"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Add more service cards as needed */}
        </div>
      </div>
    </section></>


  );
}
