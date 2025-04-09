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

const LoanAccordian = () => {
  const [openId, setOpenId] = useState(faqs[0].id); // Initialize with first FAQ ID

  const toggleAccordion = (id) => {
    // Prevent closing if it's the only open item
    setOpenId(openId === id && openId !== faqs[0].id ? null : id);
  };

  return (
    <section id="accordionservice">
    <div className="container">
      <h3>Our Loan Offerings</h3>
      <p className="paraaccordian">At Krishangi Finance, we offer a wide range of secured and unsecured loan options   <br></br> to meet diverse financial needs:</p>
      

      

      <div className="contentcard">
        <h4>1.  Home Loans
        </h4>
        <p>Affordable financing to buy, build, or renovate your dream home.
Flexible tenure options and low interest rates.
</p>



        

      </div><div className="contentcard">
        <h4>2.  Business Loans

        </h4>
        <p>Funding solutions for business expansion, working capital, and asset purchases.
Customized loans for SMEs and large enterprises.
        </p>
      </div>


      <div className="contentcard">
        <h4> 3.  Personal Loans

        </h4>
        <p>Instant funds for medical expenses, travel, weddings, or emergencies.
Unsecured loans with flexible repayment plans.
        </p>
      </div>



      <div className="contentcard">
        <h4>4. Loan Against Property
        </h4>
        <p>Unlock the value of your property to secure high-value funding.
Lower interest rates compared to unsecured loans.


        </p>
      </div>

      
      <div className="contentcard">
        <h4>5. Vehicle Loans

        </h4>
        <p>Financing options for new and used cars, bikes, and commercial vehicles.
Competitive EMIs and easy repayment terms.

        </p>
      </div>
    </div>
 

      
    </section>
  );
};

export default LoanAccordian;
