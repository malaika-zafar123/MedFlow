
import React from "react";
import { Link } from "react-router-dom";
import {
  FaUserPlus,
  FaShieldAlt,
  FaFileInvoice,
  FaPaperPlane,
  FaMoneyBillWave,
  FaSearchDollar,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

const workflowSteps = [
  {
    number: "01",
    icon: <FaUserPlus />,
    title: "Patient Registration",
    description:
      "Patient information is collected, including personal details, contact information, and insurance details.",
  },
  {
    number: "02",
    icon: <FaShieldAlt />,
    title: "Insurance Verification",
    description:
      "Insurance coverage and patient eligibility are checked before providing healthcare services.",
  },
  {
    number: "03",
    icon: <FaFileInvoice />,
    title: "Medical Coding",
    description:
      "Medical diagnoses and procedures are translated into standardized codes for accurate billing.",
  },
  {
    number: "04",
    icon: <FaPaperPlane />,
    title: "Claims Submission",
    description:
      "Accurate medical claims are prepared and submitted to insurance companies for reimbursement.",
  },
  {
    number: "05",
    icon: <FaMoneyBillWave />,
    title: "Payment Posting",
    description:
      "Payments received from insurance companies and patients are recorded in the billing system.",
  },
  {
    number: "06",
    icon: <FaSearchDollar />,
    title: "Denial Management & Follow-up",
    description:
      "Denied or unpaid claims are reviewed, corrected when appropriate, and followed up to support payment collection.",
  },
];

const Workflow = () => {
  return (
    <div className="bg-white">

      {/* Hero Section */}
      <section className="bg-[#12304A] py-20 px-5 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-teal-400 font-semibold uppercase tracking-widest text-sm">
            Our Process
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Understanding the RCM Workflow
          </h1>

          <p className="text-gray-300 max-w-3xl mx-auto mt-6 leading-8">
            Discover how Revenue Cycle Management connects every stage of
            healthcare billing, from patient registration to final payment.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-7 py-3 rounded-lg font-semibold mt-8 transition"
          >
            Talk to Our Team <FaArrowRight />
          </Link>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-5 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#12304A]">
            What is Revenue Cycle Management?
          </h2>

          <p className="text-gray-600 leading-8 mt-5">
            Revenue Cycle Management (RCM) is the financial process used by
            healthcare organizations to manage patient accounts, insurance
            claims, billing, payments, and revenue collection. An effective
            RCM workflow helps improve billing accuracy and maintain a
            smooth financial process.
          </p>
        </div>
      </section>

      {/* Workflow Steps */}
      <section className="bg-slate-50 py-20 px-5 md:px-12">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">
            <span className="text-teal-600 font-semibold uppercase tracking-widest text-sm">
              Step-by-Step Process
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-[#12304A] mt-3">
              Our Complete RCM Process
            </h2>

            <p className="text-gray-600 mt-4">
              Six important stages of the healthcare revenue cycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workflowSteps.map((step) => (
              <div
                key={step.number}
                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center text-2xl">
                    {step.icon}
                  </div>

                  <span className="text-3xl font-bold text-gray-200">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#12304A] mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-5 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div>
            <span className="text-teal-600 font-semibold uppercase tracking-widest text-sm">
              Why It Matters
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-[#12304A] mt-3">
              A Better Workflow for Better Revenue Management
            </h2>

            <p className="text-gray-600 mt-5 leading-8">
              A well-managed RCM process helps healthcare providers reduce
              billing errors, manage claims efficiently, and improve financial
              visibility.
            </p>
          </div>

          <div className="space-y-5">
            {[
              "Improved billing accuracy",
              "Efficient claims processing",
              "Better payment tracking",
              "Reduced claim denials",
              "Clearer revenue visibility",
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-4">
                <FaCheckCircle className="text-teal-500 text-xl shrink-0" />
                <span className="text-[#12304A] font-semibold">
                  {benefit}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-5 md:px-12 pb-20">
        <div className="max-w-7xl mx-auto bg-[#12304A] rounded-3xl p-10 md:p-14 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Improve Your RCM Process?
          </h2>

          <p className="text-gray-300 mt-5 max-w-2xl mx-auto leading-7">
            Explore how MedFlow RCM can support your healthcare billing
            and revenue management needs.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-8 bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            Contact Us <FaArrowRight />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Workflow;
