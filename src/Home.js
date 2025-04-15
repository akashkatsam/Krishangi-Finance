import React from "react";
import { Navbar, Nav, Container, Button, NavDropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import logo from './logo.png'
import About from "./About";
import Phone from "./Phone";
import float from './floatimage.png';
import Fiance from "./Fiance";
import Accordion from "./Accordion";
import Slider from './Slider'
import Service from "./Service";
import Footer from "./Footer";
import Header1 from "./Header1";
import { Link } from 'react-router-dom';
import banner1 from './Blog/banner-1 (1).png'
import banner2 from './Blog/banner-3.png'
import banner4 from './Blog/banner4.1.png'

import OwlCarousel from "react-owl-carousel3";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import blog3 from './Blog/banner-2.png'

import {Helmet} from "react-helmet";

import icon from './krishangiicon.png'
const Home = () => {
  const options = {
    loop: true,
      margin: 20,
      nav: false,
      dots:false,
      autoplay: true,
      autoplayTimeout: 3000, // 3 seconds
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
  };
  
  
  return (

    <>

<Helmet>
        <title>Krishangi Finance</title>
        <meta name="description" content="Creating Wealth Through Financial Goal Planning" />
    </Helmet>
    <Header1/>

<About/>

<Service/>
<Slider/>
<Phone/>

<Accordion/>
<Fiance/>


<section id="insights">


                <h4> <img src={icon} className="img-fluid abstracticon" /> <span>Investment 
                </span> Insights
                </h4>
<div className="container">
<div className="row">


            <OwlCarousel className="owl-theme" {...options}>
    
    <div className="insightcard">
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


    <div className="insightcardblog">
<Link to="/blog2">

<img src={banner2} className="img-fluid w-100"/>
<div className='blogcaption'>
<h4>How to Build a Diversified Portfolio That Matches Your Financial Goals
</h4>
<p>09 April 2025</p>
</div>
</Link>
</div>

<div className="insightcardblog">
<Link to="/blog3">

<img src={blog3} className="img-fluid w-100"/>
<div className='blogcaption'>
<h4>Mutual Funds vs Fixed Deposits: Which One Suits Your Financial Goals?

</h4>
<p>08 April 2025</p>
</div>
</Link>

</div>




<div className="insightcardblog">
<Link to="/blog4">

<img src={banner4} className="img-fluid w-100"/>
<div className='blogcaption'>
<h4>Investment Planning for Professionals: Building a Balanced Portfolio

</h4>
<p>08 April 2025</p>
</div>
</Link>

</div>

    </OwlCarousel>
  </div>
  
<div>


</div>

</div>
</section>
<Footer/>








    </>


  );
};

export default Home;
