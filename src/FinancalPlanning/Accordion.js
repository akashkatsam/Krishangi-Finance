import React, { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "Why is financial planning important?",
    answer:
      "It helps you manage money wisely, set goals and secure your future.",
  },
  {
    id: 2,
    question: "When should I start financial planning?",
    answer:
      "The sooner, the better! Early planning helps build wealth, manage risks, and achieve long-term financial stability.",
  },
  {
    id: 3,
    question: "Do I need to have a high income to start financial planning",
    answer:
      "Not at all. Financial planning is for everyone, regardless of income. The earlier you start, the better your chances of long-term financial success.",
  },
  {
    id: 4,
    question: "What kind of goals can financial planning help me with?",
    answer:
      "Our plans help you prepare for: Buying a home, Funding education, Retirement planning, Emergency savings and Building long-term wealth",
  },
  {
    id: 5,
    question: "What’s included in your financial planning service?",
    answer:
      "Investment & savings strategy, Debt management, Insurance & risk coverage, Tax planning, and Ongoing reviews",
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
