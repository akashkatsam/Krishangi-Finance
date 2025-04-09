import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Header from '../Header'
import krishangiicon from '../krishangiicon.png'
import Footer from '../Footer'
import map from '../map.png'
import mail from '../mail.png'
import phone from '../phone.png'
import consutlant from '../consultant.png'
import Header1 from '../Header1'

export default function Blog() {
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
            <img src={krishangiicon} className='img-fluid abstracticon' /> News & <span>Media</span>
          </h1>
          <p ref={subheadingRef}>
          Everything you need to stay up to date with what’s going on at Krishangi Finance — and <br />
          how to get in touch with any press enquiries.
          </p>
        </div>
      </div>

   
<section id='blogsection'>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-6'></div>
            <div className='col-md-6'></div>

        </div>
    </div>
</section>

      <Footer />
    </>
  )
}
