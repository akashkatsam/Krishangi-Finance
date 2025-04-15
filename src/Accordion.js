import React, { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "What is the main goal of financial management?",
    answer:
      "The main goal is to maximize wealth, ensure financial stability, and optimize resources for long-term growth and profitability.",
  },
  {
    id: 2,
    question: "Why should I consider investing in mutual funds?",
    answer:
      "Mutual funds offer diversification, professional management, and flexibility, helping optimise returns with lower risk and effort",
  },
  {
    id: 3,
    question: "How can I effectively manage my investment portfolio?",
    answer:
      "Effective portfolio management involves selecting a balanced mix of assets, diversifying investments to manage risk, and regularly reviewing performance to align with financial goals.",
  },
  {
    id: 4,
    question: "Should I take an active or passive approach to investing?",
    answer:
      "Active investing aims to beat the market through frequent trades, while passive investing follows a steady, low-cost strategy like index funds.",
  },
  {
    id: 5,
    question: "What factors should I consider when choosing a loan?",
    answer:
      "Key factors include interest rates, repayment terms, loan tenure, and additional costs. Comparing options ensures the best choice based on financial needs and repayment capacity.",
  },
];

const Accordion = () => {
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
   <section id="accordian">
     <div className="container">
      <h3>Frequently Asked Questions</h3>
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

export default Accordion;
