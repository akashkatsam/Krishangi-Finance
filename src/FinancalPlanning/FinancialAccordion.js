import React, { useState } from "react";
import icon from '../krishangiicon.png'

const FinancialAccordion = () => {

  
  return (
    <section id="accordionservice">
      <div className="container">
        <h3><img src={icon} className="img-fluid abstracticon"/> Our Approach to <span className="highlight">Financial Planning</span></h3>
        <p className="paraaccordian">At Krishangi Finance, we take a personalized approach to 
        <br></br>financial planning:</p>
        

        <div className="contentcard">
          <h4>1. Understanding Your Goals
          </h4>
          <p>We start by analyzing your financial goal, income, expenses, and future aspirations to create
          a customized strategy that aligns with your needs.
          </p>
        </div>

        <div className="contentcard">
          <h4>2. Creating a Tailored Financial Plan
          </h4>
          <p>Our experts design a step-by-step plan covering:

          </p>

          <ul>


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
          <p>Your financial journey evolves, and so should your plan. We provide ongoing support,
          reviewing and adjusting financial strategy to achieve your goals.
          </p>
        </div>

        
      </div>
    </section>
  );
};

export default FinancialAccordion;
