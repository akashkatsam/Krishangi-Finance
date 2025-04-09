import React, { useState } from "react";
const faqs = [
  {
    id: 1,
    question: "What are Alternative Investment Funds (AIFs)?",
    answer:
      "AIFs are privately pooled investment funds that invest in non-traditional assets like private equity, venture capital, hedge funds, and real estate.",
  },
  {
    id: 2,
    question: "Who should invest in AIFs?",
    answer:
      "AIFs are suited for high-net-worth investors seeking diversified, high-growth opportunities beyond conventional stocks and bonds.",
  },
  {
    id: 3,
    question: "How are AIFs different from mutual funds?",
    answer:
      "While mutual funds are public market instruments, AIFs involve private market opportunities. They offer customized strategies and potentially higher returns with proportionate risks.",
  },
  {
    id: 4,
    question: "Are AIFs safe to invest in?",
    answer:
      "AIFs involve higher risk than traditional instruments, but with strategic selection, risk management, and professional oversight, they offer balanced exposure and optimized outcomes.",
  },
  {
    id: 5,
    question: "What is the minimum investment required for AIFs?",
    answer:
      "Typically, AIFs in India require a minimum investment of ₹1 crore, as mandated by SEBI. We help investors align the entry point with their financial goals.",
  }
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
