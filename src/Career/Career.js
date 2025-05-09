import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
import OwlCarousel from "react-owl-carousel3";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "bootstrap/dist/css/bootstrap.min.css";
import hold from '../holdmoney.png'
import about from '../careerimg.png';
import Footer from '../Footer';
import img2 from '../Frame 16.png'
import img5 from '../circledesign.png'
import Header from '../Header';
import krishangiicon from '../krishangiicon.png';
import Accordion from './Accordion';
export default function Career() {

  
  
    const formCardRef = useRef(null)
    const rightContactRef = useRef(null)
    const headingRef = useRef(null)
    const subheadingRef = useRef(null)
  
  const options = {
    items: 2,            
    loop: false,          
    margin: 20,
    dots:false,
    startPosition: 0,    
    autoplay: true,     
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 1.5,  
      },
    },
  };


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

  gsap.fromTo(subheadingRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 0.2 }
    )
    
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
              <h3 ref={subheadingRef}><img src={krishangiicon}  className='img-fluid' /> Become Our <span>Sub Distributor</span></h3>
              <div className='boxform'>
                <div className='row'>
                  <div className='col-md-7'>
                    <div className='form-left'>
                      <img src={about} className='img-fluid' />
                    </div>
                  </div>
                  <div className='col-md-5 align-self-center'>
                    <div className='form-right careerform'>
<center>
<h3 className='text-center'>Fill in your details & Join our <br></br><span className='highlight'>Business Partner Network Today</span></h3>

</center><div className='form-group'>
                        <input type='text' className='form-control' id='Name' placeholder='Name' />
                      </div>
                      <div className='form-group'>
                        <input type='text' className='form-control' id='Mobile' placeholder='Mobile No.' />
                      </div>
                      <div className='form-group'>
                        <input type='email' className='form-control' id='Email' placeholder='Email Address' />
                      </div>

                      <div className='row'>

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
              <h4><img src={krishangiicon} className='img-fluid iconkrishangi'/>   <span className='orange'>Sub </span>Distributor</h4>
              <p>
              At Krishangi Finance, we offer more than just opportunities — we create pathways for
growth. Join us to empower more lives with smart financial solutions — and grow your own
journey in the process.


              </p>
            </div>
          </div>
        </div>
      </section>


   
      {/* <FinancialAccordion/> */}
      <Accordion/>
      <Footer />
    </>
  );
}