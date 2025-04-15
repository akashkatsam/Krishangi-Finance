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
import icon from '../krishangiicon.png'
import banner1 from './banner-1 (1).png'
import banner2 from './banner-3.png'
import banner4 from './banner4.1.png'

import { Link } from 'react-router-dom'

import blog3 from './banner-2.png'
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

      <div className="breadcrumb breadcrumb1 ">
        <div className="breadcrumb-content">
          <h1 ref={headingRef}>
            <img src={krishangiicon} className='img-fluid abstracticon' /> Investment <span>Insights</span>
          </h1>
          <p ref={subheadingRef}>
          Everything you need to stay up to date with what’s going on at Krishangi Finance — and <br />
          how to get in touch with any press enquiries.
          </p>
        </div>
      </div>

   

      <section id="insights">

<div className="container">
<div className="row">

<div className="col-md-6">
<Link to="/financial-Goal-Planning">
<div className="insightcardblog">
<img src={banner1} className="img-fluid w-100"/>
<div className='blogcaption'>
<h4>Financial Goal Planning: Step-by-Step Guide for Working Professionals
</h4>
<p>10 April 2025</p>
</div>
</div></Link>
</div>

<div className="col-md-6">
<Link to="/blog2">

<div className="insightcardblog">
<img src={banner2} className="img-fluid w-100"/>
<div className='blogcaption'>
<h4>How to Build a Diversified Portfolio That Matches Your Financial Goals
</h4>
<p>09 April 2025</p>
</div>
</div>
</Link>
</div>



<div className="col-md-6">
<Link to="/blog3">

<div className="insightcardblog">
<img src={blog3} className="img-fluid w-100"/>
<div className='blogcaption'>
<h4>Mutual Funds vs Fixed Deposits: Which One Suits Your Financial Goals?

</h4>
<p>08 April 2025</p>
</div>
</div>
</Link>
</div>




<div className="col-md-6">
<Link to="/blog4">

<div className="insightcardblog">
<img src={banner4} className="img-fluid w-100"/>
<div className='blogcaption'>
<h4>Investment Planning for Professionals: Building a Balanced Portfolio

</h4>
<p>10 April 2025</p>
</div>
</div>
</Link>
</div>






<div>


</div>
</div>

</div>
</section>

      <Footer />
    </>
  )
}
