import React, { useEffect, useState } from 'react';
import logo from './footerlogo.png'
import ios from './ios.png'
import android from './play.png'
import { Link } from 'react-router-dom'
import SIP from './SIP'
import LoanCalculator from './Loan'
import EMICalculator from './EMICalculator'
import calc from './cal icon.png'
import sip from './sip.png'
import laon from './loans.png'
import emi from './emi.png'
import close from './cross.png'
import formimg from './formimg.png'
export default function Footer() {

  const [showOptions, setShowOptions] = useState(false);
  const [shake, setShake] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Functions to run on each click
 
  const handleToggle = () => {
    setShowOptions((prev) => !prev);
  };

  return (
    <>

{/* <div className="calculator-wrapper">
      <div className="tooltip-container">
        <div
          className={`tooltip ${showOptions ? 'show' : ''}`}
          style={{ transitionDelay: '0.1s' }}
          data-toggle="modal" data-target="#exampleModal"

        >
          <img src={sip} className="img-fluid" />
        </div>
        <div
          className={`tooltip ${showOptions ? 'show' : ''}`}
          style={{ transitionDelay: '0.2s' }}
           data-toggle="modal" data-target="#exampleEMI"
        >
          <img src={emi} className="img-fluid" />
        </div>
        <div
          className={`tooltip ${showOptions ? 'show' : ''}`}
          style={{ transitionDelay: '0.3s' }}
          data-toggle="modal" data-target="#exampleLoan"

        >
          <img src={laon} className="img-fluid" />

        </div>
      </div>

      <button
        className={`main-btn ${shake ? 'shake' : ''}`}
        onClick={handleToggle}
        
      >
       <img src={calc} className='img-fluid calculator' />
      </button>
    </div>
   */}


    <section id='footer'>

<div className='footerlinkstop'>
  <div className='container-fluid'>
    <div className='row'>
      <div className='footertop'>
        <h2>Download the Krish Finance App & start investing today for a smarter financial future!
          &nbsp; &nbsp; <Link to="https://apps.apple.com/us/app/krish-finance/id1359577962" target='_blank'><img src={ios} className='img-fluid' />
          </Link>     &nbsp; &nbsp;  <Link to="https://play.google.com/store/apps/details?id=com.mobileappz.krishfinance&hl=en_IN" target='_blank'><img src={android} className='img-fluid' /></Link> </h2></div> </div>
    <div className='sep-30'></div>
    <div className='row'>
      <div className='col mobilehide'>
        <img src={logo} className='img-fluid footerimg' />
      </div>

      <div className='col'>
        <div className='footerlist'>
          <h6>Quick Links</h6>
          <ul>
          <Link to="/about">  <li>
About Us</li>
</Link>





<Link to="/investment-inside">  <li>
Investment Insights</li>
</Link>


<Link to="/career">  <li>
Career</li>
</Link>

<Link to="/contact-us">  <li>

Contact Us</li>
</Link>
          </ul>
        </div>
      </div>

      <div className='col'>
        <div className='footerlist'>
          <h6>Our Services</h6>
          <ul>
          <Link to="/financial-planning">  <li>
            Financial Planning </li>
</Link>


<Link to="/life-insurnace">  <li>
Life Insurnace</li>
</Link>




<Link to="/alternative-investment-funds">  <li>
Alternative Investment Funds</li>
</Link>


<Link to="/loan">  <li>

Loans</li>
</Link>




          </ul>
        </div>
      </div>
      <div className='col'>
        <div className='footerlist'>
          <h6>Our Services</h6>
          <ul>

      <Link to="/mutual-fund">  <li>
Mutual Fund </li>
</Link>     

<Link to="/portfolio-management-services">  <li>
Portfolio Management Services </li>
</Link>
<Link to="/portfolio-management-services">  <li>

General Insurance </li>
</Link>









<Link to="/will-estate-planning">  <li>
Will & Estate Planning </li>
</Link>







          </ul>
        </div>
      </div>
      
  
      <div className='col'>
        <div className='footerlist'>
          <h6>Let's get social</h6>
          <ul className='sociallink'>





            <Link target='_blank' to="https://www.facebook.com/krishangifinance">

              <li>
                <svg width="10" height="21" viewBox="0 0 10 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.08264 20.0568V11.2541H0.285889V7.8235H3.08264V5.2982C2.96882 4.08484 3.36606 2.88007 4.16834 2.00534C4.97063 1.1306 6.09635 0.674901 7.24514 0.75982C8.08034 0.754624 8.91508 0.802356 9.74489 0.902761V3.96409H8.02926C7.58691 3.86496 7.12706 4.00689 6.8043 4.34217C6.48153 4.67745 6.33873 5.16155 6.42389 5.63173V7.8235H9.63239L9.21389 11.2541H6.42839V20.0568H3.08264Z" fill="white" />
                </svg>
              </li>

            </Link>

            <Link target='_blank' to="https://www.linkedin.com/company/krishangi-financial-services/">

            <li>
              
<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.57076 1.89588C4.57076 0.849349 3.72292 0 2.67887 0C1.63054 0 0.785767 0.849349 0.785767 1.89588C0.785767 2.94302 1.63054 3.79237 2.67887 3.79237C3.72292 3.79237 4.57076 2.94302 4.57076 1.89588ZM4.31157 15.75H1.04494V5.22959H4.31157V15.75ZM9.48781 5.22958H6.35933V15.75H9.61924V10.5467C9.61924 9.17383 9.87842 7.84438 11.5765 7.84438C13.2514 7.84438 13.2729 9.41387 13.2729 10.6337V15.75H16.5358V9.9803C16.5358 7.1469 15.9252 4.96873 12.6212 4.96873C11.0331 4.96873 9.96766 5.84073 9.53244 6.66803H9.48781V5.22958Z" fill="white"/>
</svg>

            </li>
            </Link>

            <Link target='_blank' to="https://www.instagram.com/krishangifinance">

              <li>
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.78564 0.875244C7.34102 0.875244 7.03502 0.886494 6.07539 0.929244C5.11689 0.973119 4.46327 1.12499 3.89064 1.34774C3.29007 1.5738 2.74604 1.92816 2.29652 2.38612C1.79589 2.88562 1.48764 3.38737 1.25814 3.98024C1.03539 4.55287 0.88352 5.20649 0.839645 6.16499C0.796895 7.12462 0.785645 7.43062 0.785645 9.87524C0.785645 12.3199 0.796895 12.6259 0.839645 13.5855C0.88352 14.544 1.03539 15.1976 1.25814 15.7702C1.48764 16.362 1.79589 16.8649 2.29652 17.3644C2.79602 17.865 3.29777 18.1732 3.89064 18.4027C4.46327 18.6255 5.11689 18.7774 6.07539 18.8212C7.03502 18.864 7.34102 18.8752 9.78564 18.8752C12.2303 18.8752 12.5363 18.864 13.4959 18.8212C14.4544 18.7774 15.108 18.6255 15.6806 18.4027C16.2812 18.1767 16.8252 17.8223 17.2748 17.3644C17.7754 16.8649 18.0836 16.3631 18.3131 15.7702C18.5359 15.1976 18.6878 14.544 18.7316 13.5855C18.7744 12.6259 18.7856 12.3199 18.7856 9.87524C18.7856 7.43062 18.7744 7.12462 18.7316 6.16499C18.6878 5.20649 18.5359 4.55287 18.3131 3.98024C18.0871 3.37968 17.7327 2.83566 17.2748 2.38612C16.8252 1.92816 16.2812 1.5738 15.6806 1.34774C15.108 1.12499 14.4544 0.973119 13.4959 0.929244C12.5363 0.886494 12.2303 0.875244 9.78564 0.875244ZM9.78564 2.49637C12.1886 2.49637 12.4744 2.50649 13.4228 2.54924C14.3003 2.58974 14.7761 2.73599 15.0934 2.85974C15.5141 3.02287 15.8134 3.21749 16.1284 3.53249C16.4434 3.84749 16.638 4.14674 16.8011 4.56749C16.9249 4.88474 17.0711 5.36062 17.1116 6.23812C17.1544 7.18762 17.1645 7.47224 17.1645 9.87524C17.1645 12.2782 17.1544 12.564 17.1116 13.5124C17.0711 14.3899 16.9249 14.8657 16.8011 15.183C16.638 15.6037 16.4434 15.903 16.1284 16.218C15.8134 16.533 15.5141 16.7276 15.0934 16.8907C14.7761 17.0145 14.3003 17.1607 13.4228 17.2012C12.4733 17.244 12.1886 17.2541 9.78564 17.2541C7.38264 17.2541 7.09689 17.244 6.14852 17.2012C5.27102 17.1607 4.79514 17.0145 4.47789 16.8907C4.08697 16.7466 3.73331 16.5167 3.44289 16.218C3.14412 15.9276 2.91423 15.5739 2.77014 15.183C2.64639 14.8657 2.50014 14.3899 2.45964 13.5124C2.41689 12.5629 2.40677 12.2782 2.40677 9.87524C2.40677 7.47224 2.41689 7.18649 2.45964 6.23812C2.50014 5.36062 2.64639 4.88474 2.77014 4.56749C2.93327 4.14674 3.12789 3.84749 3.44289 3.53249C3.75789 3.21749 4.05714 3.02287 4.47789 2.85974C4.79514 2.73599 5.27102 2.58974 6.14852 2.54924C7.09802 2.50649 7.38264 2.49637 9.78564 2.49637ZM9.78564 12.8756C9.39163 12.8756 9.00147 12.798 8.63745 12.6472C8.27343 12.4964 7.94267 12.2754 7.66406 11.9968C7.38545 11.7182 7.16444 11.3875 7.01366 11.0234C6.86288 10.6594 6.78527 10.2693 6.78527 9.87524C6.78527 9.48123 6.86288 9.09107 7.01366 8.72705C7.16444 8.36303 7.38545 8.03227 7.66406 7.75366C7.94267 7.47505 8.27343 7.25404 8.63745 7.10326C9.00147 6.95248 9.39163 6.87487 9.78564 6.87487C10.5814 6.87487 11.3446 7.19098 11.9072 7.75366C12.4699 8.31634 12.786 9.0795 12.786 9.87524C12.786 10.671 12.4699 11.4341 11.9072 11.9968C11.3446 12.5595 10.5814 12.8756 9.78564 12.8756ZM9.78564 5.25374C8.55995 5.25374 7.38445 5.74065 6.51775 6.60735C5.65105 7.47405 5.16414 8.64955 5.16414 9.87524C5.16414 11.1009 5.65105 12.2764 6.51775 13.1431C7.38445 14.0098 8.55995 14.4967 9.78564 14.4967C11.0113 14.4967 12.1868 14.0098 13.0535 13.1431C13.9202 12.2764 14.4071 11.1009 14.4071 9.87524C14.4071 8.64955 13.9202 7.47405 13.0535 6.60735C12.1868 5.74065 11.0113 5.25374 9.78564 5.25374ZM15.6694 5.07149C15.6694 5.35793 15.5556 5.63263 15.3531 5.83517C15.1505 6.03771 14.8758 6.15149 14.5894 6.15149C14.303 6.15149 14.0283 6.03771 13.8257 5.83517C13.6232 5.63263 13.5094 5.35793 13.5094 5.07149C13.5094 4.78506 13.6232 4.51036 13.8257 4.30782C14.0283 4.10528 14.303 3.99149 14.5894 3.99149C14.8758 3.99149 15.1505 4.10528 15.3531 4.30782C15.5556 4.51036 15.6694 4.78506 15.6694 5.07149Z" fill="white" />
                </svg>
              </li>

            </Link>

            <Link target='_blank' to="https://youtube.com/@krishangifinance?si=UrHu4F05KhsRnDK1">
              <li>

                <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5745 0.447608C20.4942 0.6939 21.2183 1.4196 21.4642 2.34118C21.9109 4.01142 21.9109 7.49639 21.9109 7.49639C21.9109 7.49639 21.9109 10.9813 21.4642 12.6517C21.2183 13.5732 20.4942 14.2989 19.5745 14.5452C17.9076 14.9928 11.2234 14.9928 11.2234 14.9928C11.2234 14.9928 4.53921 14.9928 2.87232 14.5452C1.95271 14.2989 1.22839 13.5732 0.982578 12.6517C0.535889 10.9813 0.535889 7.49639 0.535889 7.49639C0.535889 7.49639 0.535889 4.01142 0.982578 2.34118C1.22839 1.4196 1.95271 0.6939 2.87232 0.447608C4.53921 0 11.2234 0 11.2234 0C11.2234 0 17.9076 0 19.5745 0.447608ZM14.6239 7.49652L9.03732 10.6605V4.33232L14.6239 7.49652Z" fill="white" />
                </svg>

              </li>
            </Link>

          </ul>
        </div>
      </div>
    </div>

    <div className='sep-30'></div>

  </div>
</div>

<div className='copyright'>
  <p>Mutual Fund investments are subject to market risks, read all scheme-related documents carefully. Past performance is not an indicator of future returns.</p>

  <p className='copyrighttext'>All rights are reserved with Krishangi Finance. Copyright © 2025</p>
</div>
</section>


<div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-xl">
    <div class="modal-content">
    
  
      <div class="modal-body p-0">
      <img src={close} type="button" class="close" data-dismiss="modal" aria-label="Close" className='img-fluid cross'/>

    <div className='row'>
      <div className='col-md-6 p-0'>
        <img src={formimg}  className='img-fluid' />
      </div>
      <div className='col-md-6 align-self-center'>
      <div className='modaldesign'>
                <div id='formcard'>
                  <h3><span className='orange'>Need guidance?</span> Our experts are here to assist.
</h3>
                  <div className='mt-4'>
                    <div className='form-group'>
                      <input type='text' className='form-control' placeholder='Name' />
                    </div>
                    <div className='form-group'>
                      <input type='text' className='form-control' placeholder='Mobile No.' />
                    </div>
                    <div className='form-group'>
                      <input type='email' className='form-control' placeholder='Email Address' />
                    </div>
                    <div className='form-group'>
                      <input type='text' className='form-control' placeholder='Leave us a message..' />
                    </div>
                  </div>
                  <div className='contactbtn'>
                    <button>
                      Send message
                      <div className="arrowbtn">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M23.5 2C23.5 1.17157 22.8284 0.5 22 0.5H8.5C7.67157 0.5 7 1.17157 7 2C7 2.82843 7.67157 3.5 8.5 3.5L20.5 3.5L20.5 15.5C20.5 16.3284 21.1716 17 22 17C22.8284 17 23.5 16.3284 23.5 15.5V2ZM3.06066 23.0607L23.0607 3.06066L20.9393 0.93934L0.93934 20.9393L3.06066 23.0607Z" fill="white" />
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              </div> 
      </div>
    </div>
              
              
              
              
              
                   </div>
      
  
      
    </div>
  </div>
</div>




<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered bd-example-modal-lg">
    <div class="modal-content">
    
    <img src={close} type="button" class="close" data-dismiss="modal" aria-label="Close" className='img-fluid cross'/>
      <div class="modal-body ">


        <SIP/>
           </div>
      
  
      
    </div>
  </div>
</div>




<div class="modal fade" id="exampleLoan" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered bd-example-modal-lg">
    <div class="modal-content">
    
    <img src={close} type="button" class="close" data-dismiss="modal" aria-label="Close" className='img-fluid cross'/>

      <div class="modal-body ">


        <LoanCalculator/>
           </div>
      
  
      
    </div>
  </div>
</div>




<div class="modal fade" id="exampleEMI" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered bd-example-modal-lg">
    <div class="modal-content">
    
    <img src={close} type="button" class="close" data-dismiss="modal" aria-label="Close" className='img-fluid cross'/>

      <div class="modal-body ">


        <EMICalculator/>
           </div>
      
  
      
    </div>
  </div>
</div>
</>



  )
}
