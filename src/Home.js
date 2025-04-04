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
const Home = () => {
  return (

    <>
    <Header1/>

<About/>

<Service/>
<Phone/>
<Slider/>
<Accordion/>
<Fiance/>
<Footer/>
    </>


  );
};

export default Home;
