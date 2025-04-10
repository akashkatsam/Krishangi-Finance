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
import icon from './krishangiicon.png'
const Home = () => {
  return (

    <>
    <Header1/>

<About/>

<Service/>
<Slider/>
<Phone/>

<Accordion/>
<Fiance/>


<section id="insights">


                <h4> <img src={icon} className="img-fluid abstracticon" /> <span>Insights
                </span>  for our clients
                </h4>
<div className="container">
<div className="row">

  <div className="col-md-4">
    <div className="insightcard">
      <img src="https://framerusercontent.com/images/R3B4Xdjq9pqCMYQO5B4qbNsp9ek.jpg" className="img-fluid"/>
    </div>
  </div>

  <div className="col-md-4">
    <div className="insightcard">
      <img src="https://framerusercontent.com/images/R3B4Xdjq9pqCMYQO5B4qbNsp9ek.jpg" className="img-fluid"/>
    </div>
  </div>



  <div className="col-md-4">
    <div className="insightcard">
      <img src="https://framerusercontent.com/images/UOJRImCb2g7ueC2bPrX9iobh6u0.png" className="img-fluid"/>
    </div>
  </div>


  
<div>


</div>
</div>

</div>
</section>
<Footer/>
    </>


  );
};

export default Home;
