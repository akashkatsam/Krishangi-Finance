import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Header from './Header'
import krishangiicon from './krishangiicon.png'
import Footer from './Footer'
import map from './map.png'
import mail from './mail.png'
import phone from './phone.png'
import consutlant from './consultant.png'
import Header1 from './Header1'

export default function Contact() {
  const formCardRef = useRef(null)
  const rightContactRef = useRef(null)
  const headingRef = useRef(null)
  const subheadingRef = useRef(null)

  useEffect(() => {
    // Heading animation
    gsap.fromTo(headingRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    )

    // Subheading <p> animation
    gsap.fromTo(subheadingRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 0.2 }
    )

    // Left form card
    gsap.fromTo(formCardRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 0.4 }
    )

    // Right side content
    gsap.fromTo(rightContactRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 0.6 }
    )
  }, [])

  return (
    <>
      <Header />
      <div className="breadcrumb">
        <div className="breadcrumb-content">
          <h1 ref={headingRef}>
            <img src={krishangiicon} className='img-fluid abstracticon' /> Get in touch <span>with us</span>
          </h1>
          <p ref={subheadingRef}>
            At Krishangi Finance, we understand that financial stability doesn’t happen by chance, it’s the result<br />
            of careful planning and strategic decisions.
          </p>
        </div>
      </div>

      <section id='contactpage'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-6 order-sm-2 order-md-1 order-lg-1'>
              <div className='leftcontact' ref={formCardRef}>
                <div id='formcard'>
                  <h3>Have Questions? We’re just a Message Away!</h3>
                  <p>Fill out the form below, and one of our team members will get back to you shortly.</p>
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

            <div className='col-md-6 order-sm-1 order-md-2 order-lg-2'>
              <div className='rightcontact' ref={rightContactRef}>
                <div className='consultant'>
                  <img src={consutlant} className='img-fluid' />
                </div>
                <div className='detailcard'>
                  <img src={phone} className='img-fluid' />
                  <p>+91 91115-77221, +91 98260-72100</p>
                </div>
                <div className='detailcard'>
                  <img src={map} className='img-fluid' />
                  <p>Workie Tower, 2nd and 3rd Floor,
                    Sajan Prabha Complex (SP 365),
                    22/3, New Palasiya, Indore(M.P.)</p>
                </div>
                <div className='detailcard'>
                  <img src={mail} className='img-fluid' />
                  <p>sachin@krishangifinancial.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='col-md-12'>
          <div className='iframe'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2803.1468631304097!2d75.87908417385523!3d22.727174527290035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fdd5749ee197%3A0xb51a7fa939e213dc!2sWorkie!5e1!3m2!1sen!2sin!4v1744010063795!5m2!1sen!2sin"
              width="100%" height="450" allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
