import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
import OwlCarousel from "react-owl-carousel3";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "bootstrap/dist/css/bootstrap.min.css";
import hold from '../holdmoney.png'
import about from './Banner.png';
import img2 from '../Frame 16.png'
import img5 from '../circledesign.png'
import Footer from '../Footer';
import GeneralInsuranceAccordion from './GeneralInsuranceAccordion';
import Header from '../Header';
import krishangiicon from '../krishangiicon.png';
import Fiance from '../Fiance';
import Accordion from './Accordion';
import s1 from './1.png'
import s2 from './2.png'
import s3 from './3.png'
import s4 from './4.png'
import s5 from './5.png'
export default function GeneralInsurance() {

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

          
              <h3><img src={krishangiicon}  className='img-fluid abstracticon' /><span>  General Insurance</span>  That Shields  from the Unexpected</h3>
              <div className='boxform'>
                <div className='row'>
                  <div className='col-md-7'>
                    <div className='form-left'>
                      <img src={about} className='img-fluid' />
                    </div>
                  </div>
                  <div className='col-md-5 align-self-center'>
                    <div className='form-right'>
                      <h4>
                      get expert General Insurance guidance today.</h4>
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
            <h4><img src={krishangiicon}  className='img-fluid abstracticon' /> General  <span>Insurance</span></h4>
              <p>
              Life is unpredictable, but your financial well-being doesn’t have to be. At Krishangi Finance, we provide comprehensive General Insurance solutions to protect your health, assets, business, and lifestyle from unforeseen risks. Whether it’s covering your home, vehicle, or business, our customized insurance plans ensure peace of mind.
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
                   <h4>Why General Insurance <br></br> Essential?</h4>
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
                          <h4><span>Financial </span>&nbsp;Protection </h4>
                          </div>
   
                             </div>
   
                           </div>
                           <p>Covers unexpected expenses due to accidents, damage, or losses.
                           </p>
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
                          <h4><span>Risk </span>&nbsp;Mitigation</h4>
                          </div>
   
                             </div>
   
                           </div>
                           <p> Protects assets against natural disasters, theft, and liability claims.
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
                          <h4><span>Protection  </span>&nbsp;Health</h4>
                          </div>
   
                             </div>
   
                           </div>
                           <p>Covers medical emergencies and hospitalization costs.
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
                          <h4><span>Business </span>&nbsp;Continuity </h4>
                          </div>
   
                             </div>
   
                           </div>
                           <p> Prrotects businesses from unforeseen operational risks.
   
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
                          <h4><span>Optimize  </span>&nbsp;Savings</h4>
                          </div>
   
                             </div>
   
                           </div>
                           <p>Maximize returns while minimizing risks.
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

      <GeneralInsuranceAccordion/>
      <Fiance/>
      <Accordion/>
      <Footer />
    </>
  );
}