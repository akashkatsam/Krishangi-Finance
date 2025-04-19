

import React, { useState } from "react";
import icon from '../krishangiicon.png'

const PortfolioAccordion = () => {
 

  return (
    <section id="accordionservice">
    <div className="container">

      <h3><img src={icon} className="img-fluid abstracticon"/> Our <span className="highlight">Portfolio Management</span> Approach </h3>

      <p className="paraaccordian">At Krishangi Finance, we follow a client-centric approach to maximize<br></br> investment potential:</p>


      <div className="contentcard">
        <h4>1. Understanding Your Financial Objectives

        </h4>
        <p>We assess your investment goals, risk tolerance, and financial preferences to provide
strategies aligned with the selected PMS offering.
 </p>
      </div>

      <div className="contentcard">
        <h4>2. Strategic Asset Allocation
        </h4>
        <p>Our team ensures a balanced mix of equities, mutual funds, fixed-income securities, and alternative investments to optimize returns while mitigating risks.

        </p>



      </div>


      <div className="contentcard">
        <h4> 3. Active Portfolio Monitoring & Optimization

        </h4>
        <p>We continuously track market trends and adjust your portfolio to align with changing financial conditions, ensuring long-term stability and profitability.
        </p>
      </div>



      <div className="contentcard">
        <h4>4. Risk Management & Wealth Protection
        </h4>
        <p>With a keen focus on risk assessment, we take proactive measures to shield your investments from market fluctuations and economic uncertainties.

        </p>
      </div>


    </div>
  </section>
  );
};

export default PortfolioAccordion;
