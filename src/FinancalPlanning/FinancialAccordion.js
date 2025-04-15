import React, { useState } from "react";
import icon from '../krishangiicon.png'
const faqs = [
  {
    id: 1,
    question: " Why is financial planning important?",
    answer:
      "It helps you manage money wisely, set goals, reduce risks, and secure your future.",
  },
  {
    id: 2,
    question: "When should I start financial planning?",
    answer:
      "The sooner, the better! Early planning helps build wealth, manage risks, and achieve long-term financial stability.",
  },
  {
    id: 3,
    question: "Do I need to have a high income to start financial planning?",
    answer:
      "Not at all. Financial planning is for everyone, regardless of income. The earlier you start, the   better your chances of long-term financial success.",
  },
  {
    id: 4,
    question: "What kind of goals can financial planning help me with?",
    answer:
      " Our plans help you prepare for: Buying a home, Funding education, Retirement planning, Emergency savings and Building long-term wealth",
  },
  {
    id: 5,
    question: "What’s included in your financial planning service?",
    answer:
      " We cover: Budgeting & expense control, Investment & savings strategy, Debt management, Insurance & risk coverage, Tax planning, and Ongoing reviews",
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
        <h3><img src={icon} className="img-fluid abstracticon"/> Our Approach to <span className="highlight">Financial Planning</span></h3>
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
