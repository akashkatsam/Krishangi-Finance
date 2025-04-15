import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home';
import Header from './Header';
import Aboutpage from './Aboutpage';
import Contact from './Contact';
import Financialplanning from './FinancalPlanning/Financalplanning.js';
import Career from './Career/Career.js';
import Loan from './Loan/Loan.js';
import Portfolio from './PortfolioManagement/Portfolio.js';
import EstatePlanning from './EstatePlanning/EstatePlanning.js';
import AlternativeInvestmentFunds from './AlternativeInvestmentFunds/AlternativeInvestmentFunds.js';
import LifeInsurance from './LifeInsurance/LifeInsurance.js';
import MutalFund from './MutalFund.js/MutalFund.js';
import GeneralInsurance from './GeneralInsurance/GeneralInsurance.js';
import Blog from './Blog/Blog.js';
import Preloader from './Preloader';
import Blog1 from './Blog/Blog1.js';
import Blog2 from './Blog/Blog2.js';
import Blog3 from './Blog/Blog3.js';
import Blog4 from './Blog/Blog4.js';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {

      window.scrollTo({ top: 0, behavior: 'smooth' });
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // show preloader for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <Router>
      {/* Optional Header */}
      {/* <Header /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/financial-planning" element={<Financialplanning />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/career" element={<Career />} />
        <Route path="/loan" element={<Loan />} />
        <Route path="/portfolio-management-services" element={<Portfolio />} />
        <Route path="/will-estate-planning" element={<EstatePlanning />} />
        <Route path="/alternative-investment-funds" element={<AlternativeInvestmentFunds />} />
        <Route path="/life-insurnace" element={<LifeInsurance />} />
        <Route path="/mutual-fund" element={<MutalFund />} />
        <Route path="/general-insurance" element={<GeneralInsurance />} />
        <Route path="/investment-inside" element={<Blog />} />
        <Route path="/Financial-Goal-Planning" element={<Blog1 />} />
        <Route path="/blog2" element={<Blog2 />} />
        <Route path="/blog3" element={<Blog3 />} />
        <Route path="/blog4" element={<Blog4 />} />





      </Routes>
    </Router>
  );
}

export default App;
