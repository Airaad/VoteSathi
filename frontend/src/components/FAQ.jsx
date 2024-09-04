import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
  {
    question: "What is blockchain voting?",
    answer:
      "Blockchain voting is a secure and transparent method of voting where the vote is recorded on a blockchain, ensuring that it cannot be altered.",
  },
  {
    question: "How do I vote?",
    answer:
      "You can vote by logging in to the platform, selecting your candidate, and submitting your vote through the secure blockchain network.",
  },
  {
    question: "Is my vote anonymous?",
    answer:
      "Yes, blockchain voting ensures that your vote is anonymous and cannot be traced back to you.",
  },
  {
    question: "Can I vote multiple times?",
    answer:
      "No, each voter is allowed to vote only once, and the blockchain ensures that no duplicate votes are recorded.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl p-4 mx-auto my-5">
      <h2 className="text-2xl font-semibold text-center mb-4">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200">
            <button
              className="flex justify-between items-center w-full p-4 text-left text-sm font-medium text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <FiChevronDown
                className={`${
                  openIndex === index ? "transform rotate-180" : ""
                } w-5 h-5 text-purple-500 transition-transform duration-200`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-screen" : "max-h-0"
              }`}
            >
              <p className="p-4 text-sm text-gray-500">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
