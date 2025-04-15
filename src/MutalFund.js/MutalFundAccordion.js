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

const MutalFundAccordion = () => {
  const [openId, setOpenId] = useState(faqs[0].id); // Initialize with first FAQ ID

  const toggleAccordion = (id) => {
    // Prevent closing if it's the only open item
    setOpenId(openId === id && openId !== faqs[0].id ? null : id);
  };

  return (
    <section id="accordionservice">
      <div className="container">
      <h3><img src={icon} className="img-fluid abstracticon"/> Our <span className="highlight">Mutual Fund</span>  Investment Approach </h3>

        <p className="paraaccordian">At Krishangi Finance, we provide personalized mutual fund solutions based on your needs:<br></br></p>




        <div className="contentcard">
          <h4>1.   Understanding Your Financial Goals

          </h4>
          <p>We assess your investment objectives, risk profile, and time horizon to recommend the best mutual fund options.
          </p>





        </div><div className="contentcard">
          <h4>2.  Selecting the Right Mutual Funds


          </h4>
          <p>We curate a mix of:

          </p>
          <ul>
            <li>Equity Mutual Funds – For high-growth, long-term wealth accumulation.
            </li>
            <li>Debt Mutual Funds – For stable, low-risk returns.</li>
            <li>Hybrid/Balanced Funds – For a combination of security and growth.</li>
            <li>Tax-Saving ELSS Funds – For wealth creation with tax benefits.
            </li>
            </ul>
        </div>


        <div className="contentcard">
          <h4> 3.  Strategic Investment Planning

          </h4>
          <p>We design customized SIP (Systematic Investment Plan) and lump sum strategies, ensuring consistent growth and volatility control.

          </p>
        </div>



        <div className="contentcard">
          <h4>4. Continuous Monitoring & Portfolio Review
          </h4>
          <p>We provide regular performance tracking and portfolio adjustments to align your investments with evolving financial goals.

          </p>
        </div>


      
      
        <div className="contentcard">
        <h4>5. Travel Insurance
        </h4>
        <p>Coverage for trip cancellations, medical emergencies, and lost baggage.
          Secure your travels with global coverage options.

        </p>
      </div>
      </div>
      

    </section >
  );
};

export default MutalFundAccordion;
