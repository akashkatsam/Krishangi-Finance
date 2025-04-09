import React, { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "What is Will & Estate Planning?",
    answer:
      "It is the process of legally managing and distributing your assets to ensure your wealth is passed on according to your wishes.",
  },
  {
    id: 2,
    question: "Why is Will & Estate Planning important?",
    answer:
      "It helps prevent legal disputes, ensures financial well-being for your loved ones, and provides a smooth transfer of assets.",
  },
  {
    id: 3,
    question: "What’s the difference between a Will and a Trust?",
    answer:
      "A Will outlines how your assets should be distributed after your death, while a Trust allows you to transfer assets during your lifetime or after, offering more control, privacy, and tax benefits.",
  },
  {
    id: 4,
    question: "Do I need a Will if I don’t own much?",
    answer:
      "Yes. Even a basic Will can ensure your assets like bank accounts, jewelry, or investments go to the right people and not into legal limbo.",
  },
  {
    id: 5,
    question: "What is Power of Attorney (POA), and why is it needed?",
    answer:
      "A POA lets you appoint someone to make financial or medical decisions on your behalf if you become incapacitated. It ensures your affairs are handled as per your values.",
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
