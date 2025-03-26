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
const Header = () => {
  return (

    <>
    
  <main>

  <Navbar expand="lg">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt="Krishangi Logo"
            height="40"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        {/* Mobile Toggle Button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navbar Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/about">About Us</Nav.Link>
            <NavDropdown title="Services" id="services-dropdown">
              <NavDropdown.Item href="/service1">Service 1</NavDropdown.Item>
              <NavDropdown.Item href="/service2">Service 2</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/insights">Investing Insights</Nav.Link>
            <Nav.Link href="/careers">Careers</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
          </Nav>

          {/* Login Button */}
          <Button className="rounded-pill px-4">
            Log in
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>




    <section className="banner">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="left-content-banner">
              <h5>
              Creating Wealth Through Financial goal Planning
                </h5>

                {/* <a href="#" class="custom-button">
        TALK TO AN EXPERT
        <span class="icon"></span>
    </a> */}
            </div>
          </div>
          <div className="col-md-6">

            <div className="rightside-banner">
  <img src={float} className="img-fluid "/>
            </div>
          </div>

        </div>
      </div>
    </section>
  </main>
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

export default Header;
