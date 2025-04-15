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

const LifeInsuranceAccordion = () => {
  const [openId, setOpenId] = useState(faqs[0].id); // Initialize with first FAQ ID

  const toggleAccordion = (id) => {
    // Prevent closing if it's the only open item
    setOpenId(openId === id && openId !== faqs[0].id ? null : id);
  };

  return (
    <section id="accordionservice">
    <div className="container">
      <h3>Our Life Insurance Solutions</h3>
      <p className="paraaccordian">At Krishangi Finance, we offer a range of tailored life insurance plans 

 <br></br> to fit your unique needs:</p>
      

      

      <div className="contentcard">
        <h4>1.  Term Life Insurance
        </h4>
        <p>High coverage at an affordable premium.
Ensures your family’s financial well-being during unforeseen events.
</p>



        

      </div><div className="contentcard">
        <h4>2.  Whole Life Insurance
        </h4>
        <p>Lifetime coverage with a savings component.
Helps build wealth while securing your family’s future.
        </p>
      </div>


      <div className="contentcard">
        <h4> 3.  Endowment & Investment Plans

        </h4>
        <p>Combines life cover with investment benefits.
Helps in wealth creation for future financial goals.
        </p>
      </div>



      <div className="contentcard">
        <h4>4. Child Protection Plans
        </h4>
        <p>Secures your child’s education and future needs.
Ensures financial stability even in case of unexpected events.


        </p>
      </div>

      <div className="contentcard">
        <h4>5. Retirement & Pension Plans

        </h4>
        <p>Guaranteed income for post-retirement years.
Ensures financial independence and a stress-free future.

        </p>
      </div>

    </div>
      
      
  </section>
  );
};

export default LifeInsuranceAccordion;
