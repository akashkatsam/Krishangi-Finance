


import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './Home';
import Header from './Header';
import Aboutpage from './Aboutpage';
import Contact from './Contact';
import Financalplanning from './FinancalPlanning/Financalplanning.js'
import Career from './Career/Career.js';
import Loan from './Loan/Loan.js';
import Portfolio from './PortfolioManagement/Portfolio.js';
import EstatePlanning from './EstatePlanning/EstatePlanning.js';
import AlternativeInvestmentFunds from './AlternativeInvestmentFunds/AlternativeInvestmentFunds.js';
import LifeInsurance from './LifeInsurance/LifeInsurance.js';
import MutalFund from './MutalFund.js/MutalFund.js';
import GeneralInsurance from './GeneralInsurance/GeneralInsurance.js';
import Blog from './Blog/Blog.js';

function App() {
  return (
    <Router>
      <div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/financial-planning" element={<Financalplanning />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/career" element={<Career />} />
          <Route path="/loan" element={<Loan />} />
          <Route path="/financial-planning" element={<Financalplanning />} />
          <Route path="/portfolio-management-services" element={<Portfolio />} />
          <Route path="/will-estate-planning" element={<EstatePlanning />} />
          <Route path="/alternative-investment-funds" element={<AlternativeInvestmentFunds />} />
          <Route path="/life-insurnace" element={<LifeInsurance />} />
          <Route path="/mutual-fund" element={<MutalFund />} />
          <Route path="/general-insurance" element={<GeneralInsurance />} />
          <Route path="/investment-inside" element={<Blog />} />









          





        </Routes>
      </div>
    </Router>
  );
}

export default App;
