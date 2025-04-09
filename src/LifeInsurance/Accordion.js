import React, { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "What is Life Insurance?",
    answer:
      "Life insurance provides financial protection to your family by offering a lump sum payout in case of your unfortunate demise.",
  },
  {
    id: 2,
    question: "Why should I get Life Insurance?",
    answer:
      "It ensures your loved ones are financially secure, covering expenses like loans, education, and daily living costs.",
  },
  {
    id: 3,
    question: "What’s the best age to buy life insurance?",
    answer:
      "The earlier, the better. Buying young means lower premiums and higher coverage—plus, you lock in benefits early.",
  },
  {
    id: 4,
    question: "Do I get any returns from a term plan?",
    answer:
      "Standard-term plans don’t offer maturity returns. However, return-of-premium options are available at higher premiums.",
  },
  {
    id: 5,
    question: "Can life insurance help with tax savings?",
    answer:
      "Yes. Premiums paid qualify for tax deductions under Section 80C, and death/maturity benefits are usually tax-free under Section 10(10D) of the Income Tax Act.",
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
