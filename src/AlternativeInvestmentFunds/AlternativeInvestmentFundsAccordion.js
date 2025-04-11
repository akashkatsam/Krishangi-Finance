import React, { useState } from "react";
import icon from '../krishangiicon.png'
const faqs = [
  {
    id: 1,
    question: "What is the main goal of financial management?",
    answer:
      "The main goal of financial management is to maximize shareholder wealth by ensuring efficient allocation of resources, managing risks, and making profitable investments.",
  },
  {
    id: 2,
    question: "Why should I consider investing in mutual funds?",
    answer:
      "Mutual funds offer diversification, professional management, and liquidity, making them a great investment option for individuals who want exposure to different asset classes with minimal effort.",
  },
  {
    id: 3,
    question: "How can I effectively manage my investment portfolio?",
    answer:
      "To effectively manage your investment portfolio, regularly assess your risk tolerance, diversify investments, stay informed about market trends, and periodically rebalance your portfolio to align with your financial goals.",
  },
  {
    id: 4,
    question: "Should I take an active or passive approach to investing?",
    answer:
      "An active approach involves frequent trading to outperform the market, while a passive approach focuses on long-term growth using index funds. The choice depends on your risk tolerance, investment knowledge, and time commitment.",
  },
  {
    id: 5,
    question: "What factors should I consider when choosing a loan?",
    answer:
      "When choosing a loan, consider factors such as interest rates, repayment terms, loan fees, credit score requirements, and flexibility in case of financial difficulties.",
  },
];

const AlternativeInvestmentFundsAccordion = () => {
  const [openId, setOpenId] = useState(faqs[0].id); // Initialize with first FAQ ID

  const toggleAccordion = (id) => {
    // Prevent closing if it's the only open item
    setOpenId(openId === id && openId !== faqs[0].id ? null : id);
  };

  return (
    <section id="accordionservice">
    <div className="container">
      <h3><img src={icon} className="img-fluid abstracticon"/> Our Approach to <span className="highlight"> Alternative Investments</span></h3>

      <p className="paraaccordian">At Krishangi Finance, we ensure a structured and research-driven approach   <br></br>to AIF investments:</p>
      

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
<li>Real Estate Funds – Exposure to premium real estate opportunities.</li>
<li>Hedge Funds & Structured Debt – Strategic alternatives for wealth growth.

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
