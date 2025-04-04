import React from 'react'
import logo from './footerlogo.png'
import ios from './ioslogo.png'
import android from './android.png'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <section id='footer'>

      <div className='footerlinkstop'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='footertop'>
            <h2>Download the Krish Finance App & start investing today for a smarter financial future!
            &nbsp; &nbsp; <img src={ios} className='img-fluid' />      &nbsp; &nbsp;  <img src={android} className='img-fluid' /> </h2></div> </div>
<div className='sep-30'></div>
            <div className='row'>
              <div className='col'>
                <img src={logo} className='img-fluid footerimg'/>
              </div>
              <div className='col'>
                <div className='footerlist'>
                  <h6>Company</h6>
                  <ul>
                    <li><Link to="/about">About Us</Link></li>
                    <li>Services </li>
                    <li>Investing Insights </li>
                    <li>Careers </li>
                  </ul>
                </div>
              </div>
              <div className='col'>
                <div className='footerlist'>
                  <h6>Contact us</h6>
                  <ul>
                    <li>Help & Support </li>
                    <li>Contact Us </li>
                  </ul>
                </div>
              </div><div className='col'>
                <div className='footerlist'>
                  <h6>Company</h6>
                  <ul>
                    <li>Privacy Us</li>
                    <li> Security </li>
                    <li>Terms </li>
                  </ul>
                </div>
              </div>
              <div className='col'>
                <div className='footerlist'>
                  <h6>Let's get social</h6>
                  <ul>
                    <li>Privacy Us</li>
                    <li> Security </li>
                    <li>Terms </li>
                  </ul>
                </div>
              </div>
            </div>

<div className='sep-30'></div>

      </div>
      </div>

      <div className='copyright'>
        <p>Mutual Fund investments are subject to market risks, read all scheme-related documents carefully. Past performance is not an indicator of future returns. Krishangi Finance is a AMFI registered Mutual Fund distributor with ARN - XXXXX (valid upto XXXXXX) and has held the AMFI registration since XXXXX.</p>
      
      <p className='copyrighttext'>All rights are reserved with Krishangi Finance. Copyright © 2025</p>
      </div>
    </section>
  )
}
