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
import porfit from './Profitability (3).png'
import icon from './krishangiicon.png'
import test from './white tree.png'
import { Link } from "react-router-dom";
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

                <h4> <img src={icon} className="img-fluid abstracticon" /> <span>Our
                </span> Services</h4>
                <p>
                  At Krishangi Finance, we provide expert
                  financial solutions tailored to your needs,
                  ensuring stability and growth. Our
                  services are designed to simplify wealth
                  management and secure your financial
                  future.
                </p>
              </div>
            </div>

            

            {/* Service Cards */}
            <div className="col-md-4">
            <Link to="/financial-planning">

              <div className="servicecard1">
                <div className="heading">
                  <div className="box1">
                    <img src={porfit} className="img-fluid" />
                  </div>
                  <h2>Financial Planning</h2>
                  <p>Tailored roadmap for budgeting, saving, investing, and achieving financial goals.</p>


                  <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26.0607 13.0607C26.6464 12.4749 26.6464 11.5251 26.0607 10.9393L16.5147 1.3934C15.9289 0.807612 14.9792 0.807612 14.3934 1.3934C13.8076 1.97918 13.8076 2.92893 14.3934 3.51472L22.8787 12L14.3934 20.4853C13.8076 21.0711 13.8076 22.0208 14.3934 22.6066C14.9792 23.1924 15.9289 23.1924 16.5147 22.6066L26.0607 13.0607ZM0 13.5L25 13.5V10.5L0 10.5L0 13.5Z" fill="black" />
                  </svg>
                </div>
              </div>

              </Link>

            </div>

              <div className="col-md-4">
            <Link to="/mutual-fund">

              <div className="servicecard1">
                <div className="heading">
                  <div className="box2">
                    <img src={MF} className="img-fluid" />
                  </div>
                  <h2>Mutual Funds</h2>
                  <p>Diversified mutual fund investments aligned with your goals and risk profile.</p>

                 

<svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M26.0607 13.0607C26.6464 12.4749 26.6464 11.5251 26.0607 10.9393L16.5147 1.3934C15.9289 0.807612 14.9792 0.807612 14.3934 1.3934C13.8076 1.97918 13.8076 2.92893 14.3934 3.51472L22.8787 12L14.3934 20.4853C13.8076 21.0711 13.8076 22.0208 14.3934 22.6066C14.9792 23.1924 15.9289 23.1924 16.5147 22.6066L26.0607 13.0607ZM0 13.5L25 13.5V10.5L0 10.5L0 13.5Z" fill="black" />
</svg>

                </div>
              </div>

</Link>

            </div>


            <div className="col-md-4">
            <Link to="/life-insurnace">

              <div className="servicecard1">
                <div className="heading">
                  <div className="box2">
                    <img src={heart} className="img-fluid" />
                  </div>
                  <h2>Life Insurance</h2>
                  <p>Life insurance solutions ensure security and peace of mind for loved ones.</p>
                  

<svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M26.0607 13.0607C26.6464 12.4749 26.6464 11.5251 26.0607 10.9393L16.5147 1.3934C15.9289 0.807612 14.9792 0.807612 14.3934 1.3934C13.8076 1.97918 13.8076 2.92893 14.3934 3.51472L22.8787 12L14.3934 20.4853C13.8076 21.0711 13.8076 22.0208 14.3934 22.6066C14.9792 23.1924 15.9289 23.1924 16.5147 22.6066L26.0607 13.0607ZM0 13.5L25 13.5V10.5L0 10.5L0 13.5Z" fill="black" />
</svg>
                </div>
              </div>
</Link>

            </div>



            <div className="col-md-4">
            <Link to="/portfolio-management-services">

              <div className="servicecard1">
                <div className="heading">
                  <div className="box2">
                    <img src={service} className="img-fluid" />
                  </div>
                  <h2>Portfolio Management Services</h2>
                  <p>Expert portfolio management to maximize returns and balance investment risks.</p>


                  <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26.0607 13.0607C26.6464 12.4749 26.6464 11.5251 26.0607 10.9393L16.5147 1.3934C15.9289 0.807612 14.9792 0.807612 14.3934 1.3934C13.8076 1.97918 13.8076 2.92893 14.3934 3.51472L22.8787 12L14.3934 20.4853C13.8076 21.0711 13.8076 22.0208 14.3934 22.6066C14.9792 23.1924 15.9289 23.1924 16.5147 22.6066L26.0607 13.0607ZM0 13.5L25 13.5V10.5L0 10.5L0 13.5Z" fill="black" />
                  </svg>
                </div>
              </div>

              </Link>

            </div>

            <div className="col-md-4">
            <Link to="/alternative-investment-funds">

              <div className="servicecard1">
                <div className="heading">
                  <div className="box2">
                    <img src={IV} className="img-fluid" />
                  </div>
                  <h2>Alternative Investment Funds</h2>
                  <p>Exclusive AIF access with tailored strategies beyond traditional investment assets.</p>


<svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M26.0607 13.0607C26.6464 12.4749 26.6464 11.5251 26.0607 10.9393L16.5147 1.3934C15.9289 0.807612 14.9792 0.807612 14.3934 1.3934C13.8076 1.97918 13.8076 2.92893 14.3934 3.51472L22.8787 12L14.3934 20.4853C13.8076 21.0711 13.8076 22.0208 14.3934 22.6066C14.9792 23.1924 15.9289 23.1924 16.5147 22.6066L26.0607 13.0607ZM0 13.5L25 13.5V10.5L0 10.5L0 13.5Z" fill="black" />
</svg>

                </div>
              </div>
</Link>

            </div>

          

            <div className="col-md-4">
            <Link to="/general-insurance">

              <div className="servicecard1">
                <div className="heading">
                  <div className="box2">
                    <img src={protect} className="img-fluid" />

                  </div>
                  <h2>General Insurance
                  </h2>
                  <p>Comprehensive insurance plans to safeguard health, home, and business assets.</p>


<svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M26.0607 13.0607C26.6464 12.4749 26.6464 11.5251 26.0607 10.9393L16.5147 1.3934C15.9289 0.807612 14.9792 0.807612 14.3934 1.3934C13.8076 1.97918 13.8076 2.92893 14.3934 3.51472L22.8787 12L14.3934 20.4853C13.8076 21.0711 13.8076 22.0208 14.3934 22.6066C14.9792 23.1924 15.9289 23.1924 16.5147 22.6066L26.0607 13.0607ZM0 13.5L25 13.5V10.5L0 10.5L0 13.5Z" fill="black" />
</svg>
                </div>
              </div>
</Link>

            </div>

            <div className="col-md-4">
            <Link to="/loan">

              <div className="servicecard1">
                <div className="heading">
                  <div className="box2">
                    <img src={loan} className="img-fluid" />

                  </div>
                  <h2>Loans</h2>
                  <p>Personalized loan solutions with expert support for every financial need.</p>


<svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M26.0607 13.0607C26.6464 12.4749 26.6464 11.5251 26.0607 10.9393L16.5147 1.3934C15.9289 0.807612 14.9792 0.807612 14.3934 1.3934C13.8076 1.97918 13.8076 2.92893 14.3934 3.51472L22.8787 12L14.3934 20.4853C13.8076 21.0711 13.8076 22.0208 14.3934 22.6066C14.9792 23.1924 15.9289 23.1924 16.5147 22.6066L26.0607 13.0607ZM0 13.5L25 13.5V10.5L0 10.5L0 13.5Z" fill="black" />
</svg>
                </div>
              </div>

</Link>

            </div>

            <div className="col-md-4">
            <Link to="/will-estate-planning">

              <div className="servicecard1">
                <div className="heading">
                  <div className="box2">
                    <img src={well} className="img-fluid" />

                  </div>
                  <h2>Will & Estate Planning
                  </h2>
                  <p>Estate planning services ensure legacy protection and seamless wealth transfer.</p>

                

<svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M26.0607 13.0607C26.6464 12.4749 26.6464 11.5251 26.0607 10.9393L16.5147 1.3934C15.9289 0.807612 14.9792 0.807612 14.3934 1.3934C13.8076 1.97918 13.8076 2.92893 14.3934 3.51472L22.8787 12L14.3934 20.4853C13.8076 21.0711 13.8076 22.0208 14.3934 22.6066C14.9792 23.1924 15.9289 23.1924 16.5147 22.6066L26.0607 13.0607ZM0 13.5L25 13.5V10.5L0 10.5L0 13.5Z" fill="black" />
</svg>
                </div>
              </div>

</Link>

            </div>

          

            {/* Add more service cards as needed */}
          </div>
        </div>
      </section></>


  );
}
