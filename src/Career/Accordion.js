import React, { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "Who can be a Sub-Broker?",
    answer:
      "Anyone with an interest in finance, sales experience, or a passion to grow in the financial industry can become a sub-broker with Krishangi Finance.",
  },
  {
    id: 2,
    question: "What are the benefits of becoming a Sub-Broker?",
    answer:
      "Enjoy high earning potential, training support, and access to a wide range of financial products under a trusted brand name.",
  },
  {
    id: 3,
    question: "Is prior experience necessary to become a sub-broker?",
    answer:
      "No, prior experience is not mandatory.",
  },
  {
    id: 4,
    question: "How much can I earn as a sub-broker?",
    answer:
      "Your income depends on your performance and client base.",
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
