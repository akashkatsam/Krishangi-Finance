import React from 'react'
import Header from './Header'
import krishangiicon  from './krishangiicon.png'
import Footer from './Footer'
import map from './map.png'
import mail from './mail.png'
import phone from './phone.png'
import video from './video.mp4'
export default function Contact() {
  return (
    <>
    
    <Header/>
    <div class="breadcrumb">
  <div class="breadcrumb-content">
 <h1><img src={krishangiicon} className='img-fluid' /> Your Trusted Partner in<br></br> <span>Financial Growth</span></h1>
  </div>
</div>


<section id='aboutpage'>
  <div className='container-fluid'>
    <div className='headingabout'>
      <h4><img src={krishangiicon}  className='img-fluid' /> <span>Krishangi</span> Finance</h4>
    </div>
    <div className='row'>
      <div className='col-md-6'>
        <div className='aboutcontent'>
          <p>At Krishangi Finance, we believe that financial success begins with a clear plan. Our expertise lies in financial goal planning and wealth management, helping individuals and businesses create structured, long-term strategies tailored to their unique aspirations. Whether you're planning for future security, growing your investments, or managing risks, we provide personalized financial solutions that align with your goals and lifestyle.</p>
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

      <div className='col-md-12'>

        <div className='aboutcontent'>
        <p>With a deep commitment to transparency and trust, we simplify complex financial decisions, ensuring your wealth works for you. Our approach blends expert insights with customized strategies, empowering you to achieve financial stability, growth, and peace of mind at every stage of life.
        </p>
      </div>
      </div>

    </div>
  </div>
</section>



<section id='foundermessage'>

  <div className='container'>
    
  </div>

</section>



<Footer/>
    </>
  )
}
