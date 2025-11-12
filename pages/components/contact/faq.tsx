import { useState } from "react";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long are the sessions?",
      answer:
        "Initial consultations are 50 minutes and free of charge, allowing us to dive deep into your health goals and progress.",
    },
    {
      question: "Do you offer virtual sessions?",
      answer: "Yes! We offer worldwide virtual consultations.",
    },
    {
      question: "Do you provide meal plans?",
      answer: "Yes, we customize meal plans based on your needs.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We offer plans based on your budget and health needs.",
    },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-12 lg:mt-24">
      <h2 className="text-2xl lg:text-[48px] font-semibold mb-6">
        Frequently Asked Questions
      </h2>

      <div className="divide-y divide-gray-200">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="py-4 cursor-pointer transition-all duration-200"
          >
            <div
              className="flex justify-between items-center py-4"
              onClick={() => toggle(index)}
            >
              <h3
                className={`text-lg font-medium transition-colors duration-200 ${
                  openIndex === index ? "text-[#4A7A8C]" : "text-black"
                }`}
              >
                {faq.question}
              </h3>
              {openIndex === index ? (
                <BiChevronUp className="text-gray-500 w-5 h-5" />
              ) : (
                <BiChevronDown className="text-gray-500 w-5 h-5" />
              )}
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-600 text-base pb-4">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
