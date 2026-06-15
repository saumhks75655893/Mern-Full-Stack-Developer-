import React from "react";

const faqs = [
  {
    question: "What courses do you offer?",
    answer:
      "We offer courses in Web Development, React, JavaScript, Python, UI/UX Design, and more.",
  },
  {
    question: "Are the courses beginner-friendly?",
    answer:
      "Yes, all courses are designed with beginners in mind and include step-by-step explanations.",
  },
  {
    question: "Will I get a certificate after completion?",
    answer:
      "Yes, a certificate is provided after successfully completing the course requirements.",
  },
  {
    question: "Can I access the courses on mobile devices?",
    answer:
      "Absolutely. Our platform is fully responsive and works on phones, tablets, and desktops.",
  },
  {
    question: "Do I get lifetime access?",
    answer:
      "Yes, once enrolled, you can access the course materials anytime.",
  },
];

export default function FAQ() {
  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-4xl mx-auto px-4">

        <h2 className="text-4xl font-bold text-center mb-4">
          Frequently Asked Questions
        </h2>

        <p className="text-center text-base-content/70 mb-10">
          Find answers to the most common questions about our platform.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="collapse collapse-arrow bg-base-100 shadow-md"
            >
              <input
                type="radio"
                name="faq-accordion"
                defaultChecked={index === 0}
              />

              <div className="collapse-title text-lg font-semibold">
                {faq.question}
              </div>

              <div className="collapse-content">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}