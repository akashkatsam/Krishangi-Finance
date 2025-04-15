import { useEffect, useRef, useState } from 'react';
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
import logo2 from './logoorange.png'
import avatar from './avatar.svg'
import Trade from './Trade';
import img1 from './images 1.png'
import img3 from './images (1).png'
import img2 from './NSE_reverse4x-100.jpg'
import kyc from './kyc (1).png'
import kyc1 from './krishangi logo2 (1).jpg'
import kyc2 from './krishangi logo1 (2).jpg'
import kyc3 from './krishangi logo3 (1).jpg'
import kyc01 from './kgf logo1.jpg'
import kyc02 from  './kgfogo4.jpg'
import kyc03 from './kgflogo3.jpg'
import lic from './kgfLogo5.jpg'


import c1 from './cal1 (1).jpg'
import c3 from './cal1 (2).jpg'
import c2 from './cal2.jpg'
import phonepay from './ONLINE.png'
import   kgflogo6 from './kgflogo6.jpg'

import sip from './sip or.png'
import laon from './loans or.png'
import emi from './emi or.png'
import p1 from './birla sun life.png'
import p2 from './kgf logo2.jpg'


import cal from './calculator.png'
export default function Header1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);
  const lastScrollY = useRef(window.scrollsetIsMenuOpenY);
  const [hidden, setHidden] = useState(false);
  const [blur, setBlur] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // 👈 Add this

  const [showNavbar, setShowNavbar] = useState(true);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // 👈 Add this
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };




  const [activeTab, setActiveTab] = useState("premium");
  const renderContent = () => {
    switch (activeTab) {
      case "premium":
        return (
          <>
            <div className='row'>
              <div className='col-md-6'>
                <div className='toolsimg'>
                <Link to="https://www.licindia.in/" target='_blank'>

                  <img src={lic} className='img-fluid' />
                  </Link>
                </div>
              </div>
  
           
              <div className='col-md-6'>
                <div className='toolsimg'>
                <Link to="https://insurance.birlasunlife.com/Pages/Secured/Individual/MyAccount/Transactions/PayPremiumOnline.aspx" target='_blank'>

                  <img src={p2} className='img-fluid' />
                  </Link>
                </div>
              </div>



              <div className='col-md-6'>
                <div className='toolsimg'>
                <Link to="https://paytminsurance.co.in/" target='_blank'>

                  <img src={kgflogo6} className='img-fluid' />
                  </Link>
                </div>
              </div>
              
            
  
              
            </div>
          </>
        );
      case "kyc":
        return (
          <>
             <div className='row'>
              <div className='col-md-6'>
                <div className='toolsimg'>
                <Link to="https://camskra.com/" target='_blank'>

                  <img src={kyc01} className='img-fluid' />
                  </Link>
                </div>
              </div>
  
              <div className='col-md-6'>
                <div className='toolsimg'>
                <Link to="https://www.cvlkra.com/kycpaninquiry.aspx/" target='_blank'>

                  <img src={kyc03} className='img-fluid' />
                  </Link>
                </div>
              </div>

              <div className='col-md-6'>
                <div className='toolsimg'>
                <Link to="https://www.nsekra.com/" target='_blank'>

                  <img src={kyc02} className='img-fluid' />
                  </Link>
                </div>
              </div>
  
              
            </div>
          </>
        );
      case "calculator":
        return (
          <>
           <div className='row'>
              <div className='col-md-6'>
                <div className='toolsimg'>
                  <Link to="#" data-toggle="modal" data-target="#exampleLoan">
                  <img src={c1} className='img-fluid' />

                  </Link>
                </div>
              </div>
  
              <div className='col-md-6'>
                <div className='toolsimg'>
                <Link to="#" data-toggle="modal" data-target="#exampleModal">
                  <img src={c2} className='img-fluid' />

                  </Link>
                </div>
              </div>

              
  
              <div className='col-md-6'>
                <div className='toolsimg'>
                <Link to="#" data-toggle="modal" data-target="#exampleLoan">
                  <img src={c3} className='img-fluid' />

                  </Link>
                </div>
              </div>
            </div>
          </>
        );
      default:
        return (
          <>
            <div className='row'>
              <div className='col-md-6'>
                <div className='toolsimg'>
                  <img src={sip} className='img-fluid' />
                </div>
              </div>
  
              <div className='col-md-6'>
                <div className='toolsimg'>
                  <img src={laon} className='img-fluid' />
                </div>
              </div>
  
              <div className='col-md-6'>
                <div className='toolsimg'>
                  <img src={emi} className='img-fluid' />
                </div>
              </div>
            </div>
          </>
        );
    }
  };
  
  

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




  const headingRef = useRef(null);
  const buttonRef = useRef(null);
  useEffect(() => {
    // GSAP animation
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

    // Scroll show/hide logic
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY.current) {
        setShowNavbar(true); // Scrolling up
      } else {
        setShowNavbar(false); // Scrolling down
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>

      {/* <main> */}
     
      <Navbar ref={navRef} className={`navbar navbar-expand-lg fixed-top transition-all duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}  >
        <Container>
          {/* Logo */}
          <Link to="/">
            <img
              src={logo}
              alt="Krishangi Logo"
              className="d-inline-block align-top logoKF"
            />

            <img
              src={logo2}
              alt="Krishangi Logo"
              className="d-inline-block align-top logoKF2"
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
                <NavLink to="/financial-planning" className={({ isActive }) => isActive ? 'nav-link dropdown-toggle active' : 'nav-link dropdown-toggle'}>
                  Services
                  &nbsp;<svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.46967 6.53033C5.76256 6.82322 6.23744 6.82322 6.53033 6.53033L11.3033 1.75736C11.5962 1.46447 11.5962 0.989593 11.3033 0.696699C11.0104 0.403806 10.5355 0.403806 10.2426 0.696699L6 4.93934L1.75736 0.696699C1.46447 0.403806 0.989593 0.403806 0.696699 0.696699C0.403806 0.989592 0.403806 1.46447 0.696699 1.75736L5.46967 6.53033ZM5.25 5L5.25 6L6.75 6L6.75 5L5.25 5Z" fill="#2D2D2D" />
                  </svg>

                </NavLink>
                <div className="megamenu dropdown-menu">
                  <div className="row">
                    <div className='col-md-6'>
                      <div className='row'>

                        <div className='col-md-3 align-self-center'>
                          <div className='menuicon'>
                            <div className='boxcolor'>
                              <img src={profit} className='img-fluid' />
                            </div>
                          </div>
                        </div>
                        <div className='col-md-9 align-self-center'>
                          <Link to="/financial-planning">

                            <div className='megalink'>
                              <h5>Financial Planning </h5>
                              <p>Goals, budgeting, investing, protection, growth.</p>

                            </div>
                          </Link>
                        </div>
                      </div>


                      <div className='row'>
                        <div className='col-md-3 align-self-center'>
                          <div className='menuicon'>
                            <div className='boxcolor'>
                              <img src={icon2} className='img-fluid' />
                            </div>
                          </div>
                        </div>
                        <div className='col-md-9 align-self-center'>
                          <Link to="/portfolio-management-services">

                            <div className='megalink'>

                              <h5>Portfolio Management  </h5>
                              <p> Diversification, strategy, analysis, and balance</p>
                            </div>
                          </Link>
                        </div>
                      </div>




                      <div className='row'>
                        <div className='col-md-3 align-self-center'>
                          <div className='menuicon'>
                            <div className='boxcolor'>
                              <img src={icon3} className='img-fluid' />
                            </div>
                          </div>
                        </div>
                        <div className='col-md-9 align-self-center'>

                          <Link to="/alternative-investment-funds">
                            <div className='megalink'>
                              <h5>Alternative Investment Funds </h5>
                              <p>Private, diversified, exclusive, sophisticated
 </p>
                            </div>
                          </Link>


                        </div>
                      </div>



                      <div className='row'>
                        <div className='col-md-3 align-self-center'>
                          <div className='menuicon'>
                            <div className='boxcolor'>
                              <img src={icon4} className='img-fluid' />
                            </div>
                          </div>
                        </div>
                        <div className='col-md-9 align-self-center'>
                          <Link to="/mutual-fund">

                            <div className='megalink'>
                              <h5>Mutual Funds </h5>
                              <p>Pooling, investment, diversification, management</p>
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
                              <img src={icon4} className='img-fluid' />
                            </div>
                          </div>
                        </div>
                        <div className='col-md-9 align-self-center'>
                          <Link to="/general-insurance">
                            <div className='megalink'>
                              <h5>General Insurance </h5>
                              <p> Protection, risk, coverage, safety, security </p>
                            </div>
                          </Link>

                        </div>
                      </div>


                      <div className='row'>
                        <div className='col-md-3 align-self-center'>
                          <div className='menuicon'>
                            <div className='boxcolor'>
                              <img src={icon6} className='img-fluid' />
                            </div>
                          </div>
                        </div>
                        <div className='col-md-9 align-self-center'>
                          <Link to="/loan">

                            <div className='megalink'>
                              <h5>Loans </h5>
                              <p>Credit, funding, repayment, need-based, flexibility </p>
                            </div>
                          </Link>
                        </div>
                      </div>




                      <div className='row'>
                        <div className='col-md-3 align-self-center'>
                          <div className='menuicon'>
                            <div className='boxcolor'>
                              <img src={icon7} className='img-fluid' />
                            </div>
                          </div>
                        </div>
                        <div className='col-md-9 align-self-center'>
                          <Link to="/will-estate-planning">
                            <div className='megalink'>
                              <h5>Will & Estate Planning </h5>
                              <p>Legacy, distribution, clarity, wishes, succession</p>
                            </div></Link>
                        </div>
                      </div>



                      <div className='row'>
                        <div className='col-md-3 align-self-center'>
                          <div className='menuicon'>
                            <div className='boxcolor'>
                              <img src={icon8} className='img-fluid' />
                            </div>
                          </div>
                        </div>
                        <div className='col-md-9 align-self-center'>
                          <Link to="/life-insurnace">

                            <div className='megalink'>
                              <h5>Life Insurance </h5>
                              <p>Protection, dependents, coverage, future, security</p>
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
                Investment Insights
              </NavLink>
              <NavLink
                to="/career"
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              >
                Career
              </NavLink>

              <li className="nav-item dropdown custom-dropdown">
                <NavLink to="/sd" className={({ isActive }) => isActive ? 'nav-link dropdown-toggle active' : 'nav-link dropdown-toggle'}>
                  Tools
                  &nbsp;<svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.46967 6.53033C5.76256 6.82322 6.23744 6.82322 6.53033 6.53033L11.3033 1.75736C11.5962 1.46447 11.5962 0.989593 11.3033 0.696699C11.0104 0.403806 10.5355 0.403806 10.2426 0.696699L6 4.93934L1.75736 0.696699C1.46447 0.403806 0.989593 0.403806 0.696699 0.696699C0.403806 0.989592 0.403806 1.46447 0.696699 1.75736L5.46967 6.53033ZM5.25 5L5.25 6L6.75 6L6.75 5L5.25 5Z" fill="#2D2D2D" />
                  </svg>

                </NavLink>
                <div className="megamenu megamenu1 dropdown-menu">
                  <div className='row'>

                  <div style={{ display: "flex" }}>
      {/* Tabs */}
      <div style={{ width: "240px", borderRight: "1px solid #ccc" }}>
        {["premium", "kyc", "calculator"].map((tab) => (
          <div
            key={tab}
            onMouseEnter={() => setActiveTab(tab)}
            className={`tab-item ${activeTab === tab ? "active" : ""}`}
            style={{ padding: "10px", cursor: "pointer" }}
          >
            <div className="row">
              <div className="col-4">
                <img src={tab === "premium" ? phonepay : tab === "kyc" ? kyc : cal} />
              </div>
              <div className="col-6 align-self-center">
                <h6>
                  {tab === "premium"
                    ? "Pay Premium Online"
                    : tab === "kyc"
                    ? "KYC Update"
                    : "Calculator"}
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div style={{ flex: 1, padding: "20px" }}>
        {renderContent()}
      </div>
    </div>

                  </div>
                </div>
              </li>
              <NavLink
                to="/contact-us"
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              >
                Contact Us
              </NavLink>

          

            </Nav>

            {/* Login Button */}
            <Link target="_blank" to="https://krishfinance.com/login.php">
              <Button >
                Portfolio login
              </Button></Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <nav className="custom-navbar">
        <div className="custom-navbar-container">
          <div className="custom-brand">
            <Link to="/">
              <img
                src={logo}
                alt="Krishangi Logo"
                className="d-inline-block align-top logoKF"
              />
            </Link>
          </div>
          <button className="custom-toggler" onClick={toggleMenu}>
            {isMenuOpen ? (
              <span className="custom-icon close-icon">&#10005;</span>
            ) : (
              <span className="custom-icon hamburger-icon">&#9776;</span>
            )}
          </button>
        </div>




        <div className={`custom-menu ${isMenuOpen ? "open" : ""}`}>
          <NavLink to="/" className="custom-nav-link">Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "custom-nav-link active" : "custom-nav-link"}>About Us</NavLink>
          <NavLink to="/career" className={({ isActive }) => isActive ? "custom-nav-link active" : "custom-nav-link"}>Career</NavLink>
          <div className="nav-dropdown">
            <button className="nav-dropdown-toggle" onClick={toggleDropdown}>
              Services {isDropdownOpen ? (
  // Up Arrow SVG
  <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.53033 0.46967C6.23744 0.176777 5.76256 0.176777 5.46967 0.46967L0.696699 5.24264C0.403806 5.53553 0.403806 6.01041 0.696699 6.3033C0.989592 6.59619 1.46447 6.59619 1.75736 6.3033L6 2.06066L10.2426 6.3033C10.5355 6.59619 11.0104 6.59619 11.3033 6.3033C11.5962 6.01041 11.5962 5.53553 11.3033 5.24264L6.53033 0.46967ZM6.75 2L6.75 1L5.25 1L5.25 2L6.75 2Z" fill="#2D2D2D"/>
  </svg>
) : (
  // Down Arrow SVG
  <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.46967 6.53033C5.76256 6.82322 6.23744 6.82322 6.53033 6.53033L11.3033 1.75736C11.5962 1.46447 11.5962 0.989593 11.3033 0.696699C11.0104 0.403806 10.5355 0.403806 10.2426 0.696699L6 4.93934L1.75736 0.696699C1.46447 0.403806 0.989593 0.403806 0.696699 0.696699C0.403806 0.989592 0.403806 1.46447 0.696699 1.75736L5.46967 6.53033ZM5.25 5L5.25 6L6.75 6L6.75 5L5.25 5Z" fill="#2D2D2D"/>
  </svg>
)}
            </button>
            <div className={`nav-dropdown-menu ${isDropdownOpen ? "open" : ""}`}>
              <NavLink to="/financial-planning" className="nav-dropdown-item">Financial Planning</NavLink>
              <NavLink to="/portfolio-management-services" className="nav-dropdown-item">Portfolio Management</NavLink>
              <NavLink to="/alternative-investment-funds" className="nav-dropdown-item">Alternative Investment Funds</NavLink>
              <NavLink to="/mutual-fund" className="nav-dropdown-item">Mutual Funds</NavLink>
              <NavLink to="/general-insurance" className="nav-dropdown-item">General Insurance</NavLink>
              <NavLink to="/loan" className="nav-dropdown-item">Loan</NavLink>
              <NavLink to="/will-estate-planning" className="nav-dropdown-item">Will & Estate Planning</NavLink>
              <NavLink to="/life-insurnace" className="nav-dropdown-item">Life Insurance</NavLink>

            </div>

          </div>
          <NavLink to="/contact-us" className={({ isActive }) => isActive ? "custom-nav-link active" : "custom-nav-link"}>Contact Us</NavLink>

          {/* Dropdown starts here */}

        </div>
      </nav>


      <main>



        <section className="banner">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 align-self-center">
                <div className="left-content-banner">
                  <h5 ref={headingRef}>
                    <img src={iconkrishangi} className='img-fluid abstracticon' /> Creating Wealth Through Financial Goal Planning
                  </h5>
                  <div id="bgblue1" ref={buttonRef} data-bs-toggle="modal" data-bs-target="#myModal">
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

      <Trade/>


    </>

  )
}



