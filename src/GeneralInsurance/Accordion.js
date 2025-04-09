import React, { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "What is General Insurance?",
    answer:
      "General insurance provides financial protection against risks like health issues, accidents, property damage, and travel emergencies.",
  },
  {
    id: 2,
    question: "Why is General Insurance important?",
    answer:
      "It protects you from unexpected financial losses, ensuring stability and peace of mind during emergencies.",
  },
  {
    id: 3,
    question: " What’s the difference between General Insurance and Life Insurance?",
    answer:
      "Life insurance covers death or life-related events, offering payouts to beneficiaries.General insurance covers non-life risks—like health, property damage, travel, and liability.",
  },
  {
    id: 4,
    question: "Can I hold multiple general insurance policies?",
    answer:
      "Yes! You can have separate policies for health, motor, home, and travel.Each covers a different risk and offers specific benefits.",
  },
  {
    id: 5,
    question: "What is a deductible in general insurance?",
    answer:
      "A deductible is the amount you pay out of pocket before the insurance kicks in.Higher deductibles = Lower premiums (and vice versa).",
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
