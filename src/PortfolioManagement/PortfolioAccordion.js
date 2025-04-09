

import React, { useState } from "react";

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

const PortfolioAccordion = () => {
  const [openId, setOpenId] = useState(faqs[0].id); // Initialize with first FAQ ID

  const toggleAccordion = (id) => {
    // Prevent closing if it's the only open item
    setOpenId(openId === id && openId !== faqs[0].id ? null : id);
  };

  return (
    <section id="accordionservice">
    <div className="container">
      <h3>Our Portfolio Management Approach</h3>
      <p className="paraaccordian">At Krishangi Finance, we follow a structured, client-centric approach  <br></br>to maximize investment potential:</p>


      <div className="contentcard">
        <h4>1. Understanding Your Financial Objectives

        </h4>
        <p>We assess your investment goals, risk tolerance, and financial preferences to craft a customized portfolio strategy.
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
