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

const FinancialAccordion = () => {
  const [openId, setOpenId] = useState(faqs[0].id); // Initialize with first FAQ ID

  const toggleAccordion = (id) => {
    // Prevent closing if it's the only open item
    setOpenId(openId === id && openId !== faqs[0].id ? null : id);
  };

  return (
    <section id="accordionservice">
      <div className="container">
        <h3>Our Approach to Financial Planning</h3>
        <p>At Krishangi Finance, we take a personalized approach <br></br>to financial planning:</p>
        <div className="accordion" id="faqAccordion">
          {faqs.map((faq) => (
            <div className="accordion-item" key={faq.id}>
              <h2 className="accordion-header">
                <button
                  className={`accordion-button ${openId === faq.id ? "" : "collapsed"}`}
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                >
                  {faq.question}
                </button>
              </h2>
              <div
                className={`accordion-collapse ${openId === faq.id ? "show" : ""}`}
                style={{
                  maxHeight: openId === faq.id ? "500px" : "0",
                  overflow: "hidden",
                  transition: "max-height 1s ease-in-out",
                }}
              >
                <div className="accordion-body">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinancialAccordion;
