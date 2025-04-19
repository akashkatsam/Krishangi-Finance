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
        <h3> </h3>
        <h3><img src={icon} className="img-fluid abstracticon"/> Our <span className="highlight"> Will & Estate Planning </span> Services</h3>

        <p className="paraaccordian">At Krishangi Finance, we offer holistic solutions to maintain your wealth and facilitate a
        smooth transition of assets.</p>
        

        

        <div className="contentcard">
          <h4>1.  Will Drafting & Execution
          </h4>
          <p>Legally sound will tailored to your financial goals.
Executed with precision and stored securely for your peace of mind.
</p>



          

        </div><div className="contentcard">
          <h4>2.  Trust & Wealth Protection
          </h4>
          <p>Set up family trusts to manage and protect your wealth.
Secure the financial future of beneficiaries
          </p>
        </div>


        <div className="contentcard">
          <h4> 3.  Tax-Efficient Estate Structuring

          </h4>
          <p>Minimize inheritance tax and maximize wealth transfer.
Ensure your estate is structured for financial efficiency.
          </p>
        </div>



        <div className="contentcard">
          <h4>4. Business Succession Planning
          </h4>
          <p>Smooth leadership and ownership transition for family businesses.
Protect business continuity and family interests.


          </p>
        </div>

        <div className="contentcard">
          <h4>5. Power of Attorney & Guardianship

          </h4>
          <p>Assign trusted individuals to manage your financial or healthcare decisions.
Ensure the well-being of dependents and minors.

          </p>
        </div>

      </div>
  
        
      </section>
  );
};

export default FinancialAccordion;
