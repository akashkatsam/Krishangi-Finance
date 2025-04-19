import React, { useState } from "react";
const faqs = [
  {
    id: 1,
    question: "What types of loans does Krishangi Finance offer?",
    answer:
      "We help you access personal loans, home loans, business loans, and loans against property through trusted lending partners.",
  },
  {
    id: 2,
    question: "How can I apply for a loan?",
    answer:
      "You can apply online or visit our branch. Our experts will guide you through the process for quick approval.",
  },
  {
    id: 3,
    question: "How do I know which loan is right for me?",
    answer:
      "Our team provides personalized guidance after understanding your financial needs, repayment capacity, and goals to recommend the most suitable loan product. ",
  },
  {
    id: 4,
    question: "How fast is the loan approval process?",
    answer:
      "With our hassle-free process and minimal paperwork, most loans are approved within a few working days, sometimes within 48 hours!",
  },
  {
    id: 5,
    question: "Are self-employed individuals eligible for loans?",
    answer:
      "Yes, we assist self-employed professionals, business owners, and freelancers in accessing customized loan solutions through our lending partners. ",
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
