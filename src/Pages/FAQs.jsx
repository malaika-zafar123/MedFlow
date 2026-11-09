
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaQuestionCircle,
  FaPlus,
  FaMinus,
  FaArrowRight,
} from "react-icons/fa";

const faqData = [
  {
    question: "What is Revenue Cycle Management (RCM)?",
    answer:
      "Revenue Cycle Management (RCM) is the financial process healthcare organizations use to manage patient registration, insurance verification, medical billing, claims, payments, and revenue collection.",
  },
  {
    question: "What services does MedFlow RCM provide?",
    answer:
      "MedFlow RCM provides healthcare revenue cycle support, including medical billing, claims management, payment posting, and related billing workflow services.",
  },
  {
    question: "What is medical billing?",
    answer:
      "Medical billing is the process of preparing and submitting healthcare claims to insurance companies and managing payments for medical services provided to patients.",
  },
  {
    question: "What is claims management?",
    answer:
      "Claims management involves preparing, submitting, tracking, and reviewing insurance claims to help healthcare providers receive appropriate reimbursement.",
  },
  {
    question: "What is payment posting?",
    answer:
      "Payment posting is the process of recording payments received from insurance companies and patients in the healthcare billing system.",
  },
  {
    question: "What is claim denial management?",
    answer:
      "Claim denial management involves reviewing rejected insurance claims, identifying the reasons for rejection, correcting errors when appropriate, and submitting appeals when applicable.",
  },
  {
    question: "Why is insurance verification important?",
    answer:
      "Insurance verification helps confirm a patient's insurance coverage and eligibility before services are provided. It can help reduce billing issues and unexpected claim rejections.",
  },
  {
    question: "How can RCM improve a healthcare practice?",
    answer:
      "An organized RCM process can improve billing accuracy, support timely claim follow-up, provide better payment tracking, and help healthcare practices manage their financial operations.",
  },
  {
    question: "Can I request a free RCM consultation?",
    answer:
      "Yes. You can contact the MedFlow RCM team through the Contact page to discuss your practice's billing needs and request a consultation.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white">

      {/* Hero Section */}
      <section className="bg-[#12304A] py-20 px-5 md:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="w-16 h-16 bg-teal-500/20 text-teal-400 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6">
            <FaQuestionCircle />
          </div>

          <span className="text-teal-400 font-semibold uppercase tracking-widest text-sm">
            Help Center
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Frequently Asked Questions
          </h1>

          <p className="text-gray-300 mt-6 max-w-2xl mx-auto leading-8">
            Find answers to common questions about Revenue Cycle Management,
            medical billing, claims management, and our services.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-5 md:px-12 bg-slate-50">
        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-12">
            <span className="text-teal-600 font-semibold uppercase tracking-widest text-sm">
              Got Questions?
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-[#12304A] mt-3">
              How Can We Help You?
            </h2>

            <p className="text-gray-600 mt-4">
              Click on any question below to discover its answer.
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:border-teal-400 transition"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between gap-4 text-left p-5 md:p-6"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-semibold text-[#12304A] text-base md:text-lg">
                    {faq.question}
                  </span>

                  <span className="text-teal-600 shrink-0">
                    {openIndex === index ? (
                      <FaMinus />
                    ) : (
                      <FaPlus />
                    )}
                  </span>
                </button>

                {openIndex === index && (
                  <div className="px-5 md:px-6 pb-6">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-600 leading-7">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-5 md:px-12">
        <div className="max-w-7xl mx-auto bg-[#12304A] rounded-3xl p-10 md:p-14 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Still Have Questions?
          </h2>

          <p className="text-gray-300 mt-5 max-w-2xl mx-auto leading-7">
            Our team is ready to help you understand our services and
            find the right RCM solutions for your practice.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-8 bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            Contact Our Team <FaArrowRight />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default FAQs;
