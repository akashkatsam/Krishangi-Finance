import React from 'react'
import { Navbar, Nav, Container, Button, NavDropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import logo from './logo.png'
import float from './floatimage.png';
import triangle from './triangle.png'
import './App.css'
import profit from './header1.png'
export default function Header1() {
  return (
    <>
    
{/* <main> */}
    <Navbar expand="lg">
    <Container>
      {/* Logo */}
      <Link to="/">
        <img
          src={logo}
          alt="Krishangi Logo"
          height="40"
          className="d-inline-block align-top"
        />
      </Link>

      {/* Mobile Toggle Button */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      {/* Navbar Links */}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Link to="/about" className="nav-link">About Us</Link>

          <NavDropdown title="Services" id="services-dropdown">
          <img src={triangle}  className='img-fluid arrow'/>

            <div className='megamenu'>
                <div className='row'>
                    <div className='col-md-6'>
                    <NavDropdown.Item href="/service1"><div className='megalink'>
                        <div className='row'>
                        <div className='col-md-3'>
                          <div className='menuicon'>
                            <div className='boxcolor'>
                              <img src={profit} className='img-fluid'/>
                            </div>
                          </div>
                        </div>
                        <div className='col-md-9'>
                        <div className='megalink'>
                        <h5>Financal Planning </h5>
                        <p>Krishangi Finance is a financial </p>
                        </div>
                        </div>
                        </div>
                        </div></NavDropdown.Item>


                      <NavDropdown.Item href="/service1"><div className='megalink'>
                        <div className='row'>
                        <div className='col-md-3'>
                          <div className='menuicon'>
                            <div className='boxcolor'>
                              <img src={profit} className='img-fluid'/>
                            </div>
                          </div>
                        </div>
                        <div className='col-md-9'>
                        <div className='megalink'>
                        <h5>Portfolio Management <br></br>Services</h5>
                        <p>Krishangi Finance is a financial </p>
                        </div>
                        </div>
                        </div>
                        </div></NavDropdown.Item>


                        <NavDropdown.Item href="/service1"><div className='megalink'>
                        <div className='row'>
                        <div className='col-md-3'>
                          <div className='menuicon'>
                            <div className='boxcolor'>
                              <img src={profit} className='img-fluid'/>
                            </div>
                          </div>
                        </div>
                        <div className='col-md-9'>
                        <div className='megalink'>
                        <h5>Alternative Investment<br></br> Funds</h5>
                        <p>Krishangi Finance is a financial </p>
                        </div>
                        </div>
                        </div>
                        </div></NavDropdown.Item>




                        <NavDropdown.Item href="/service1"><div className='megalink'>
                        <div className='row'>
                        <div className='col-md-3'>
                          <div className='menuicon'>
                            <div className='boxcolor'>
                              <img src={profit} className='img-fluid'/>
                            </div>
                          </div>
                        </div>
                        <div className='col-md-9'>
                        <div className='megalink'>
                        <h5>Mutual Funds</h5>
                        <p>Krishangi Finance is a financial </p>
                        </div>
                        </div>
                        </div>
                        </div></NavDropdown.Item>

                    
                     


                    </div>
                    <div className='col-md-6'>
                    <NavDropdown.Item href="/service1"><div className='megalink'>
                        <div className='row'>
                        <div className='col-md-3'>
                          <div className='menuicon'>
                            <div className='boxcolor'>
                              <img src={profit} className='img-fluid'/>
                            </div>
                          </div>
                        </div>
                        <div className='col-md-9'>
                        <div className='megalink'>
                        <h5>General Insurance</h5>
                        <p>Krishangi Finance is a financial </p>
                        </div>
                        </div>
                        </div>
                        </div></NavDropdown.Item>


                      <NavDropdown.Item href="/service1"><div className='megalink'>
                        <div className='row'>
                        <div className='col-md-3'>
                          <div className='menuicon'>
                            <div className='boxcolor'>
                              <img src={profit} className='img-fluid'/>
                            </div>
                          </div>
                        </div>
                        <div className='col-md-9'>
                        <div className='megalink'>
                        <h5>Loan</h5>
                        <p>Krishangi Finance is a financial </p>
                        </div>
                        </div>
                        </div>
                        </div></NavDropdown.Item>


                        <NavDropdown.Item href="/service1"><div className='megalink'>
                        <div className='row'>
                        <div className='col-md-3'>
                          <div className='menuicon'>
                            <div className='boxcolor'>
                              <img src={profit} className='img-fluid'/>
                            </div>
                          </div>
                        </div>
                        <div className='col-md-9'>
                        <div className='megalink'>
                        <h5>Will & Estate Planning</h5>
                        <p>Krishangi Finance is a financial </p>
                        </div>
                        </div>
                        </div>
                        </div></NavDropdown.Item>




                        <NavDropdown.Item href="/service1"><div className='megalink'>
                        <div className='row'>
                        <div className='col-md-3'>
                          <div className='menuicon'>
                            <div className='boxcolor'>
                              <img src={profit} className='img-fluid'/>
                            </div>
                          </div>
                        </div>
                        <div className='col-md-9'>
                        <div className='megalink'>
                        <h5>Life Insurance</h5>
                        <p>Krishangi Finance is a financial </p>
                        </div>
                        </div>
                        </div>
                        </div></NavDropdown.Item>

                    
                     


                    </div>
                </div>
            </div>
          
          </NavDropdown>
          <Link to="/contact-us" className="nav-link">
          Investmenting Insides
          </Link>
          <Link to="/carrer" className="nav-link">
          Career
          </Link>
          <Link to="/contact-us" className="nav-link">
          Contact Us
          </Link>
        </Nav>

        {/* Login Button */}
        <Button >
          Log in
        </Button>
      </Navbar.Collapse>
    </Container>
  </Navbar>
 <main> 



<section className="banner">
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-6">
        <div className="left-content-banner">
          <h5>
          Creating Wealth Through Financial goal Planning
            </h5>
<div id="bgblue1">
            <button>talk to an expert <div className='arrowbtn'>
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.5 2C23.5 1.17157 22.8284 0.5 22 0.5H8.5C7.67157 0.5 7 1.17157 7 2C7 2.82843 7.67157 3.5 8.5 3.5L20.5 3.5L20.5 15.5C20.5 16.3284 21.1716 17 22 17C22.8284 17 23.5 16.3284 23.5 15.5V2ZM3.06066 23.0607L23.0607 3.06066L20.9393 0.93934L0.93934 20.9393L3.06066 23.0607Z" fill="white"/>
</svg>
</div></button>

</div>
          
        </div>
      </div>
      <div className="col-md-6">

        <div className="rightside-banner">
<img src={float} className="img-fluid "/>
        </div>
      </div>

    </div>
  </div>
</section> */}
 </main>

  </>

  )
}
