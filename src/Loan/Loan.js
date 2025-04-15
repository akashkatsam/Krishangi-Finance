import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
import OwlCarousel from "react-owl-carousel3";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "bootstrap/dist/css/bootstrap.min.css";
import hold from '../holdmoney.png'
import about from '../loans (1).png';
import Footer from '../Footer';
import img2 from '../Frame 16.png'
import img5 from '../circledesign.png'
import LoanAccordian from './LoanAccordian';
import Header from '../Header';
import krishangiicon from '../krishangiicon.png';
import Fiance from '../Fiance';
import Accordion from './Accordion';
import s1 from './1.png'
import s2 from './2.png'
import s3 from './3.png'
import s5 from './4.png'
import s4 from './5.png'
export default function Loan() {

  const options = {
    center: true,
    items:2,
    loop:true,
    dots:false,
    margin:30,
    responsive: {
      0: {
        items: 1.2,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2
      },
    },
  };
  


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const paragraphs = document.querySelectorAll('.animatetext p');
    paragraphs.forEach((p) => {
      const words = p.innerText.split(' ').map((word) => {
        return `<span class="word" style="color: gray;">${word}</span>`;
      }).join(' ');

      p.innerHTML = words;
      gsap.fromTo(
        p.querySelectorAll('.word'),
        {
          color: '#9390905e', // Initial color is gray
        },
        {
          opacity: 1, 
          color: 'white', 
          duration: 1.2, 
          stagger: 0.15, 
          ease: 'power2.out', 
          scrollTrigger: {
            trigger: p,
            start: 'top 90%',
            end: 'bottom top',
            scrub: 1, 
            markers: false, 
          },
        }
      );
    });
  }, []);

  return (
    <>
    <Header/>
      <section id='form-ui'>
        <div className='formcaption'>
          <div className='container'>
            <div className='headingabout'>
              <h3><img src={krishangiicon}  className='img-fluid abstracticon' />  Smart <span>Loans</span> for Smarter Life Goals</h3>
              <div className='boxform'>
                <div className='row'>
                  <div className='col-md-7'>
                    <div className='form-left'>
                      <img src={about} className='img-fluid' />
                    </div>
                  </div>
                  <div className='col-md-5 align-self-center'>
                    <div className='form-right'>
                      <h4>get expert Loan guidance today.
</h4>
                      <div className='form-group'>
                        <input type='text' className='form-control' id='Name' placeholder='Name' />
                      </div>
                      <div className='form-group'>
                        <input type='text' className='form-control' id='Mobile' placeholder='Mobile No.' />
                      </div>
                      <div className='form-group'>
                        <input type='email' className='form-control' id='Email' placeholder='Email Address' />
                      </div>
                      <p>
                        Tata AIA Life Insurance Company Limited will send you updates on new products, services, insurance solutions, existing policy or related information and/or process your information in accordance with
                      </p>
                      <button>
                        Submit
                        <div className='arrowbtn'>
                          <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path
                              d='M23.5 2C23.5 1.17157 22.8284 0.5 22 0.5H8.5C7.67157 0.5 7 1.17157 7 2C7 2.82843 7.67157 3.5 8.5 3.5L20.5 3.5L20.5 15.5C20.5 16.3284 21.1716 17 22 17C22.8284 17 23.5 16.3284 23.5 15.5V2ZM3.06066 23.0607L23.0607 3.06066L20.9393 0.93934L0.93934 20.9393L3.06066 23.0607Z'
                              fill='white'
                            />
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='animatetext'>
            <h4><img src={krishangiicon}  className='img-fluid abstracticon' /> Loan <span>Planning</span></h4>
              <p>
              Whether you’re planning to buy a home, expand your business, or need funds for personal expenses, Krishangi Finance provides customized loan solutions to your financial needs. With our expert guidance, quick processing, and competitive interest rates, we help you find the right loan at ease.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section id='about-slider'>
        <div className='container-fluidm p-0'>
          <div className='row'>
            <div className='col-12'>
              <div className='headingslider'>
                <h4>Why Choose Krishangi Finance <br></br> for Loans?</h4>
                <p></p>
              </div>
            </div>
       

            <div className='separator-20'></div>
            <OwlCarousel className="owl-theme custom-carousel" {...options}>
              <div className='sildercard'>
                <div className='sliderbox'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='leftslider'>
                        <h4><h6>01.</h6>&nbsp;&nbsp;&nbsp;Personalized Loan:</h4>
                        <p>Grow your assets with a structured investment approach.</p>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='rightslider'>
                        <img src={s1} className='img-fluid' />
                      </div>
                    </div>


                  </div>
                </div>
              </div>
              <div className='sildercard'>
                <div className='sliderbox'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='leftslider'>
                        <h4><h6>02.</h6>&nbsp;&nbsp;&nbsp;Build Wealth:</h4>
                        <p>Grow your assets with a structured investment approach.</p>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='rightslider'>
                        <img src={s2} className='img-fluid' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='sildercard'>
                <div className='sliderbox'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='leftslider'>
                        <h4><h6>03.</h6>&nbsp;&nbsp;&nbsp;Build Wealth:</h4>
                        <p>Grow your assets with a structured investment approach.</p>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='rightslider'>
                        <img src={s3} className='img-fluid' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>

      <LoanAccordian/>
      <Fiance/>
      <Accordion/>
      <Footer/>
    </>
  );
}