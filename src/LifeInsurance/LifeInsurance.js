import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
import OwlCarousel from "react-owl-carousel3";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "bootstrap/dist/css/bootstrap.min.css";
import hold from '../holdmoney.png'
import about from './lige.png';
import img2 from '../Frame 16.png'
import img5 from '../circledesign.png'
import Footer from '../Footer';
import LifeInsuranceAccordion from './LifeInsuranceAccordion';
import Header from '../Header';
import krishangiicon from '../krishangiicon.png';
import Fiance from '../Fiance';
import Accordion from './Accordion';
import s1 from './1.png'
import s2 from './2.png'
import s3 from './3.png'
import s4 from './4.png'
import s5 from './5.png'
export default function LifeInsurance() {

  const options = {
    center: true,
    items:2,
    loop:true,
    dots:true,
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
    window.scrollTo({ top: 0, behavior: 'smooth' });

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
              <h3><img src={krishangiicon}  className='img-fluid' /> <span>Life Insurance</span> Services That Safeguard Your Loved Ones’
              </h3>
              <div className='boxform'>
                <div className='row'>
                  <div className='col-md-7'>
                    <div className='form-left'>
                      <img src={about} className='img-fluid' />
                    </div>
                  </div>
                  <div className='col-md-5 align-self-center'>
                    <div className='form-right'>
                      <h4>get expert Life Insurance guidance today.
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
                        Krishangi Financial Services Pvt. Ltd. may contact you regarding your existing relationship, important updates, or related information and may process your data in accordance with its privacy policy.

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
            <h4><img src={krishangiicon}  className='img-fluid abstracticon' /> Life <span>Insurance</span></h4>
              <p>
              Life is uncertain, but your family’s financial stability doesn’t have to be. With Krishangi Finance’s Life Insurance solutions, you can safeguard your loved ones from financial hardships and ensure their future is secure. Our personalized approach helps you choose the right plan.
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
                <h4>Why is Life Insurance <br></br> Essential?</h4>
                <p></p>
              </div>
            </div>
       

            <div className='separator-20'></div>
            <OwlCarousel className="owl-theme" {...options}>
              <div className='sildercard'>
                <div className='sliderbox'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='leftslider'>

                        <div className='row'>
                          <div className='col-3'>
                            <h6>01</h6>
                          </div>
                          <div className='col-8'>
                       <div className='sliderorange'>
                       <h4><span>Family </span>&nbsp;Security </h4>
                       </div>

                          </div>

                        </div>
                        <p>Financial Protection for Your Family in Your Absence</p>
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

                        <div className='row'>
                          <div className='col-3'>
                            <h6>02</h6>
                          </div>
                          <div className='col-8'>
                       <div className='sliderorange'>
                       <h4><span>Debt </span>&nbsp;Coverage </h4>
                       </div>

                          </div>

                        </div>
                        <p>Covers Outstanding Debts & Liabilities
                        </p>
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

                        <div className='row'>
                          <div className='col-3'>
                            <h6>03</h6>
                          </div>
                          <div className='col-8'>
                       <div className='sliderorange'>
                       <h4><span>Income  </span>&nbsp;Assurance </h4>
                       </div>

                          </div>

                        </div>
                        <p>Ensures Long-Term Income Stability for Dependents
                        </p>
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




              <div className='sildercard'>
                <div className='sliderbox'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='leftslider'>

                        <div className='row'>
                          <div className='col-3'>
                            <h6>04</h6>
                          </div>
                          <div className='col-8'>
                       <div className='sliderorange'>
                       <h4><span>Wealth </span>&nbsp;Growth </h4>
                       </div>

                          </div>

                        </div>
                        <p> Provides Tax Benefits & Wealth Accumulation Opportunities

                        </p>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='rightslider'>
                        <img src={s4} className='img-fluid' />
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

                        <div className='row'>
                          <div className='col-3'>
                            <h6>05</h6>
                          </div>
                          <div className='col-8'>
                       <div className='sliderorange'>
                       <h4><span>Retirement   </span>&nbsp;Planning </h4>
                       </div>

                          </div>

                        </div>
                        <p>Helps with Retirement & Estate Planning

                        </p>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='rightslider'>
                        <img src={s5} className='img-fluid' />
                      </div>
                    </div>


                  </div>
                </div>
              </div>
             
            </OwlCarousel>
          </div>
        </div>
      </section>
  

      <LifeInsuranceAccordion/>
      <Fiance/>
      <Accordion/>
      <Footer/>
    </>
  );
}