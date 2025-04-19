import React, { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "What are Mutual Funds?",
    answer:
      "Mutual funds pool money from multiple investors to invest in stocks, bonds, or other assets, managed by professional fund managers.",
  },
  {
    id: 2,
    question: "Why should I invest in Mutual Funds?",
    answer:
      "They offer diversification, professional management, and flexible investment options, making them ideal for wealth growth and financial security.",
  },
  {
    id: 3,
    question: "Are mutual funds safe to invest in?",
    answer:
      "While most investments are not risk-free, mutual funds offer diversification and professional management to manage risks better than direct market exposure.",
  },
  {
    id: 4,
    question: "What’s the minimum amount needed to start investing in mutual funds?",
    answer:
      "You can start with as low as ₹500/month via SIPs. We suggest investments based on your budget and long-term financial vision.",
  },
  {
    id: 5,
    question: "Can mutual funds help save taxes?",
    answer:
      "Yes! ELSS (Equity-Linked Saving Schemes) qualify for deductions under Section 80C of the Income Tax Act, helping you save while you invest.",
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
