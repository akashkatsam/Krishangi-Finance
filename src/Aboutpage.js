import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

import Header from './Header'
import krishangiicon  from './krishangiicon.png'
import Footer from './Footer'
import map from './map.png'
import mail from './mail.png'
import phone from './phone.png'
import video from './aboutvideo.mp4'
import ceo from './CEO.png'
import sign from './logo12.png'

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
    
    <Header/>
    <div class="breadcrumb">
  <div class="breadcrumb-content">
 <h1 ref={headingRef}><img src={krishangiicon} className='img-fluid iconkrishangi' /> Your Trusted Partner in<br></br> <span>Financial Growth</span></h1>
  </div>
</div>


<section id='aboutpage'>
  <div className='container-fluid'>
    <div className='headingabout'>
      <h4><img src={krishangiicon}  className='img-fluid abstracticon' /> <span>Krishangi</span> Finance</h4>
    </div>
    <div className='row'>
      <div className='col-md-6'>
        <div className='aboutcontent'>
          <p>At Krishangi Finance, we believe that financial success begins with a clear plan. Our expertise lies in financial goal planning and wealth management, helping individuals and businesses create structured, long-term strategies tailored to their unique aspirations. Whether you're planning for future security, growing your investments, or navigating uncertainties, we provide personalized financial solutions that align with your goals and lifestyle.</p>
        </div>
      </div>
      <div className='col-md-6'>
      <video width="100%"  autoPlay
        muted
        loop
        playsInline>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>


<div className='pt-10'></div>
      <div className='col-md-12'>

        <div className='aboutcontent'>
        <p className='bottomcontent'>With a deep commitment to transparency and trust, we simplify complex financial decisions, ensuring your wealth works for you. Our approach blends expert insights with customized strategies, empowering you to achieve financial stability, growth, and peace of mind at every stage of life.
        </p>
      </div>
      </div>

    </div>
  </div>
</section>





 
<section id="foundermessage">
      <div className="container-fluid">
      <div className='headingabout'>
      <h4><img src={krishangiicon}  className='img-fluid' /> <span>Meet our </span> Director</h4>
    </div>
        <div className="row">
          <div className="col-md-5">

            <img src={ceo} className='img-fluid founderimg' />
          </div>
          <div className="col-md-7">
            <div className="founderright">
              <div className="foundertext">
                <h4>Sachin Agrawal</h4>
                <p className='designation'>CEO, Krishangi Finance</p>
                <p>Sachin Agrawal, a seasoned financial goal planner with over 20 years of expertise in financial planning and wealth management. With a deep passion for guiding individuals toward financial security, he specializes in investment management, retirement planning, tax strategies, and risk management. His approach is rooted in understanding each client’s unique financial landscape and crafting personalized, strategic plans that ensure long-term growth and stability.</p>
                <p>  Sachin Agrawal believes that financial planning isn’t just about numbers, but it’s about empowering lives. By working closely with clients from diverse backgrounds, he provides clear, customized financial roadmaps that help them achieve their goals with confidence. His unwavering commitment to transparency, trust, and client success defines the foundation of Krishangi Finance</p>

                <div className='sign'>
                  <img src={sign}  className='imgp-fluid'/>
                </div>
              </div>
            </div>
          </div>

          </div></div> 
      
      </section>


<Footer/>
    </>
  )
}
