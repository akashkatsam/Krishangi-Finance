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

const FinancialAccordion = () => {
  const [openId, setOpenId] = useState(faqs[0].id); // Initialize with first FAQ ID

  const toggleAccordion = (id) => {
    // Prevent closing if it's the only open item
    setOpenId(openId === id && openId !== faqs[0].id ? null : id);
  };

  return (
    <section id="accordionservice">
      <div className="container">
        <h3><img src={icon} className="img-fluid abstracticon"/> Our Approach to Financial Planning</h3>
        <p className="paraaccordian">At Krishangi Finance, we take a personalized approach <br></br>to financial planning:</p>
        

        <div className="contentcard">
          <h4>1. Understanding Your Goals
          </h4>
          <p>We start by analyzing your financial situation, income, expenses, and future aspirations to create a customized strategy that aligns with your needs.
          </p>
        </div>

        <div className="contentcard">
          <h4>2. Creating a Tailored Financial Plan
          </h4>
          <p>Our experts design a step-by-step plan covering:

          </p>

          <ul>


          <li>Budgeting & Expense Management</li>
                    <li>Savings & Investment Strategies</li>
                    <li>Debt Management & Reduction</li>
                    <li>Risk Assessment & Protection</li>





          </ul>


        </div>


        <div className="contentcard">
          <h4> 3.  Implementing Smart Financial Strategies

          </h4>
          <p>With a focus on wealth growth and security, we implement diversified investment strategies while ensuring tax efficiency and volatility control.
          </p>
        </div>



        <div className="contentcard">
          <h4>4. Continuous Monitoring & Adjustments
          </h4>
          <p>Your financial journey evolves, and so should your plan. We provide ongoing support, reviewing and adjusting your financial strategy to keep you on track.

          </p>
        </div>

        
      </div>
    </section>
  );
};

export default FinancialAccordion;
