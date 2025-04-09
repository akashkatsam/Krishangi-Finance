import React, { useState } from "react";

const faqs = [
  {
    id: 1,
    question: " What are Portfolio Management Services (PMS)?",
    answer:
      "PMS is a professional service where experts manage your investments based on your financial goals and risk appetite.",
  },
  {
    id: 2,
    question: "Who should invest in PMS?",
    answer:
      "PMS is ideal for high-net-worth individuals (HNIs) seeking personalized investment strategies and expert management of their portfolios.",
  },
  {
    id: 3,
    question: "How does Krishangi Finance personalize my portfolio?",
    answer:
      "We assess your financial goals, risk appetite, and investment horizon, then build a diversified strategy tailored to your needs and lifestyle.",
  },
  {
    id: 4,
    question: "How is risk managed in my portfolio?",
    answer:
      "Through strategic diversification, continuous monitoring, and proactive adjustments, we minimize the impact of market volatility and protect your wealth.",
  },
  {
    id: 5,
    question: "What’s the difference between PMS and regular investing?",
    answer:
      "With Portfolio Management Services, you get: Professional expertise, Personalized strategies, Risk optimization, and  Active rebalancing, unlike regular investing, it’s a hands-on, tailored experience.",
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
