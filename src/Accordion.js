import React, { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "Who can benefit from Krishangi Finance’s services?",
    answer:
      "Our services are ideal for individuals, families, professionals, and business owners looking to manage, protect, or transfer their wealth efficiently",
  },
  {
    id: 2,
    question: "Is Krishangi Finance regulated?",
    answer:
      "Yes. We operate within a well-defined regulatory framework, ensuring that all recommendations and services are fully compliant with Indian financial regulations.",
  },
  {
    id: 3,
    question: "What is the first step to getting started?",
    answer:
      "Simply reach out to us. Our team will understand your goals and guide you through a personalized financial roadmap.",
  },
  {
    id: 4,
    question: "Can I get help with estate and will planning?",
    answer:"Absolutely. We assist in creating structured estate plans that ensure your legacy is preserved and passed on according to your wishes.",
  },
  {
    id: 5,
    question: "Is your consultation customized or one-size-fits-all?",
    answer:
      "Every client receives a personalized financial strategy. We believe every financial journey is unique and treat it with the care, expertise, and attention it deserves.",
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
