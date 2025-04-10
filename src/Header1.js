import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Navbar, Nav, Container, Button, NavDropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import logo from './logo.png'
import float from './floatimage.png';
import triangle from './triangle.png'
import './App.css'
import profit from './header1.png'
import icon2 from './headericon/2.png'
import icon3 from './headericon/3.png'
import icon4 from './headericon/4.png'
import icon5 from './headericon/5.png'
import icon6 from './headericon/6.png'
import icon7 from './headericon/7.png'
import icon8 from './headericon/8.png'
import iconkrishangi from './krishangiicon.png'
import { NavLink } from 'react-router-dom';

export default function Header1() {


  const headingRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

    tl.fromTo(
      headingRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5 }
    ).fromTo(
      buttonRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      "+=0.1"
    );
  }, []);

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
          className="d-inline-block align-top logoKF"
        />
      </Link>

      {/* Mobile Toggle Button */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      {/* Navbar Links */}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">

        <NavLink
  to="/about"
  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
>
About Us</NavLink>

          <li className="nav-item dropdown custom-dropdown">
  <NavLink to="#" className={({ isActive }) => isActive ? 'nav-link dropdown-toggle active' : 'nav-link dropdown-toggle'}>
    Services 
    &nbsp;<svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.46967 6.53033C5.76256 6.82322 6.23744 6.82322 6.53033 6.53033L11.3033 1.75736C11.5962 1.46447 11.5962 0.989593 11.3033 0.696699C11.0104 0.403806 10.5355 0.403806 10.2426 0.696699L6 4.93934L1.75736 0.696699C1.46447 0.403806 0.989593 0.403806 0.696699 0.696699C0.403806 0.989592 0.403806 1.46447 0.696699 1.75736L5.46967 6.53033ZM5.25 5L5.25 6L6.75 6L6.75 5L5.25 5Z" fill="#2D2D2D"/>
</svg>

  </NavLink>
  <div className="megamenu dropdown-menu">
    <div className="row">
      <div className='col-md-6'>
                        <div className='row'>
                       
                        <div className='col-md-3 align-self-center'>
                          <div className='menuicon'>
                            <div className='boxcolor'>
                              <img src={profit} className='img-fluid'/>
                            </div>
                          </div>
                        </div>
                        <div className='col-md-9 align-self-center'>
                        <Link to="/financial-planning"> 

                        <div className='megalink'>
                        <h5>Financal Planning </h5>
                        <p>Krishangi Finance is a financial </p>

                        </div>
                        </Link>
                        </div>
                        </div>
                        

                        <div className='row'>
                        <div className='col-md-3 align-self-center'>
                          <div className='menuicon'>
                            <div className='boxcolor'>
                              <img src={icon2} className='img-fluid'/>
                            </div>
                          </div>
                        </div>
                        <div className='col-md-9 align-self-center'>
                        <Link to="/portfolio-management-services"> 

                        <div className='megalink'>
                          
                        <h5>Portfolio Management Services </h5>
                        <p>Krishangi Finance is a financial </p>
                        </div>
                        </Link>
                        </div>
                        </div>

                        


                        <div className='row'>
                        <div className='col-md-3 align-self-center'>
                          <div className='menuicon'>
                            <div className='boxcolor'>
                              <img src={icon3} className='img-fluid'/>
                            </div>
                          </div>
                        </div>
                        <div className='col-md-9 align-self-center'>

                          <Link to="/alternative-investment-funds">
                        <div className='megalink'>
                        <h5>Alternative Investment Funds </h5>
                        <p>Krishangi Finance is a financial </p>
                        </div>
                        </Link>

                        
                        </div>
                        </div>

                        

                        <div className='row'>
                        <div className='col-md-3 align-self-center'>
                          <div className='menuicon'>
                            <div className='boxcolor'>
                              <img src={icon4} className='img-fluid'/>
                            </div>
                          </div>
                        </div>
                        <div className='col-md-9 align-self-center'>
                        <Link to="/mutual-fund"> 

                        <div className='megalink'>
                        <h5>Mutual Funds </h5>
                        <p>Krishangi Finance is a financial </p>
                        </div>
                        </Link>
                        </div>
                        </div>

                        

                        </div>



                        <div className='col-md-6'>
                        <div className='row'>
                        <div className='col-md-3 align-self-center'>
                          <div className='menuicon'>
                            <div className='boxcolor'>
                              <img src={icon4} className='img-fluid'/>
                            </div>
                          </div>
                        </div>
                        <div className='col-md-9 align-self-center'>
                          <Link to="/general-insurance">
                        <div className='megalink'>
                        <h5>General Insurance </h5>
                        <p>Krishangi Finance is a financial </p>
                        </div>
                        </Link>

                        </div>
                        </div>
                        

                        <div className='row'>
                      <div className='col-md-3 align-self-center'>
                          <div className='menuicon'>
                            <div className='boxcolor'>
                              <img src={icon6} className='img-fluid'/>
                            </div>
                          </div>
                        </div>
                        <div className='col-md-9 align-self-center'>
                        <Link to="/loan"> 

                        <div className='megalink'>
                        <h5>Loans </h5>
                        <p>Krishangi Finance is a financial </p>
                        </div>
                        </Link>
                        </div>
                        </div>

                        


                        <div className='row'>
                        <div className='col-md-3 align-self-center'>
                          <div className='menuicon'>
                            <div className='boxcolor'>
                              <img src={icon7} className='img-fluid'/>
                            </div>
                          </div>
                        </div>
                        <div className='col-md-9 align-self-center'>
                        <Link to="/will-estate-planning"> 
                        <div className='megalink'>
                        <h5>Will & Estate Planning </h5>
                        <p>Krishangi Finance is a financial </p>
                        </div></Link>
                        </div>
                        </div>

                        

                        <div className='row'>
                        <div className='col-md-3 align-self-center'>
                          <div className='menuicon'>
                            <div className='boxcolor'>
                              <img src={icon8} className='img-fluid'/>
                            </div>
                          </div>
                        </div>
                        <div className='col-md-9 align-self-center'>
                        <Link to="/life-insurnace"> 

                        <div className='megalink'>
                        <h5>Life Insurance </h5>
                        <p>Krishangi Finance is a financial </p>
                        </div>
                        </Link>

                        </div>
                        </div>


                        

                        </div>


                     
                    
                     



        {/* other items */}
    </div>
  </div>
</li>

        

          <NavLink
  to="/investment-inside"
  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
>
Investmenting Insides
</NavLink>
          <NavLink
  to="/career"
  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
>
  Career
</NavLink>
          <NavLink
  to="/contact-us"
  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
>
  Contact Us
</NavLink>
        </Nav>

        {/* Login Button */}
        <Button >
          Portfolio Login
        </Button>
      </Navbar.Collapse>
    </Container>
  </Navbar>
 <main> 



 <section className="banner">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 align-self-center">
            <div className="left-content-banner">
              <h5 ref={headingRef}>
               <img src={iconkrishangi} className='img-fluid abstracticon' /> Creating Wealth Through Financial Goal Planning
              </h5>
              <div id="bgblue1" ref={buttonRef}>
                <button>
                  talk to an expert
                  <div className="arrowbtn">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.5 2C23.5 1.17157 22.8284 0.5 22 0.5H8.5C7.67157 0.5 7 1.17157 7 2C7 2.82843 7.67157 3.5 8.5 3.5L20.5 3.5L20.5 15.5C20.5 16.3284 21.1716 17 22 17C22.8284 17 23.5 16.3284 23.5 15.5V2ZM3.06066 23.0607L23.0607 3.06066L20.9393 0.93934L0.93934 20.9393L3.06066 23.0607Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6 align-self-center">
            <div className="rightside-banner">
              <img src={float} className="img-fluid" alt="Banner float" />
            </div>
          </div>
        </div>
      </div>
    </section>
 </main>

  </>

  )
}
