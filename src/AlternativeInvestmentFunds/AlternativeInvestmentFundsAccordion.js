import React, { useState } from "react";
import icon from '../krishangiicon.png'

const AlternativeInvestmentFundsAccordion = () => {

  return (
    <section id="accordionservice">
    <div className="container">
      <h3><img src={icon} className="img-fluid abstracticon"/> Our Approach to <span className="highlight"> Alternative Investments</span></h3>

      <p className="paraaccordian">At Krishangi Finance, we suggest research-driven approach <br></br>to AIF investments:</p>
      

      <div className="contentcard">
        <h4>1.  Understanding Your Investment Goals

        </h4>
        <p>We evaluate your financial objectives, risk tolerance, and liquidity preferences to recommend the most suitable alternative investment strategy.
        </p>
      </div>

      <div className="contentcard">
        <h4>2. Identifying High-Potential Investment Opportunities
        </h4>
        <p>Our team carefully selects AIFs across diverse categories such as:</p>
        <ul>
        <li>Private Equity & Venture Capital – Investing in high-growth businesses.</li>
<li>REITs– Exposure to premium REITs opportunities.</li>
<li>Hedge Funds & Structured Debt – Strategic alternatives for wealth growth

        </li>

        </ul>



        

      </div>


      <div className="contentcard">
        <h4> 3. Risk Management & Diversification

        </h4>
        <p>By spreading investments across multiple asset classes, we ensure stability and risk optimization while maximizing returns.
        </p>
      </div>



      <div className="contentcard">
        <h4>4. Continuous Performance Monitoring
        </h4>
        <p>We actively track market trends, economic factors, and investment performance, making data-driven adjustments to keep your portfolio optimized.

        </p>
      </div>

      
    </div>
  </section>
  );
};

export default AlternativeInvestmentFundsAccordion;
