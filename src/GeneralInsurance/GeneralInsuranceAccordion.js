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

const GeneralInsuranceAccordion = () => {
  const [openId, setOpenId] = useState(faqs[0].id); // Initialize with first FAQ ID

  const toggleAccordion = (id) => {
    // Prevent closing if it's the only open item
    setOpenId(openId === id && openId !== faqs[0].id ? null : id);
  };

  return (
    <section id="accordionservice">
    <div className="container">
      <h3>Our General Insurance Offerings</h3>
      <p className="paraaccordian">At Krishangi Finance, we offer a range of tailored insurance solutions<br></br></p>
      

      

      <div className="contentcard">
        <h4>1.  Health Insurance
        </h4>
        <ul>
        <li>Coverage for medical expenses, hospitalization, and critical illness.</li>
<li>Individual, family, and corporate health insurance plans.</li>

        </ul>



        

      </div><div className="contentcard">
        <h4>2.  Motor Insurance

        </h4>
        <p>Protection for cars, bikes, and commercial vehicles against accidents, theft, and damage.
Third-party and comprehensive coverage options.
        </p>
      </div>


      <div className="contentcard">
        <h4> 3. Home Insurance

        </h4>
        <p>Covers damages due to fire, theft, floods, and natural calamities.
Protection for structure and valuable belongings inside the home
        </p>
      </div>



      <div className="contentcard">
        <h4>4. Business & Commercial Insurance
        </h4>
        <p>Protection against operational risks, property damage, and liabilities.
Tailored coverage for SMEs, large enterprises, and professionals.

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


      
    </section>
  );
};

export default GeneralInsuranceAccordion;
