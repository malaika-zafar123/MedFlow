
import { Link } from "react-router-dom";

import {
  FaClipboardCheck,
  FaFileInvoice,
  FaSearch,
  FaCheckCircle,
  FaArrowRight,
  FaShieldAlt,
  FaChartLine,
  FaClock,
} from "react-icons/fa";

const ClaimsManagement = () => {
  const features = [
    {
      icon: <FaFileInvoice />,
      title: "Claim Submission",
      description:
        "We prepare and submit accurate medical claims to insurance companies for faster processing.",
    },
    {
      icon: <FaSearch />,
      title: "Claim Tracking",
      description:
        "Monitor claim status and stay updated throughout the reimbursement process.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Denial Management",
      description:
        "Identify claim denials, review issues, and support the resubmission process.",
    },
    {
      icon: <FaChartLine />,
      title: "Performance Monitoring",
      description:
        "Track claim performance and identify opportunities to improve revenue cycle operations.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Claim Preparation",
      description:
        "Patient and insurance information is reviewed to prepare accurate claims.",
    },
    {
      number: "02",
      title: "Claim Submission",
      description:
        "Prepared claims are submitted to the appropriate insurance companies.",
    },
    {
      number: "03",
      title: "Claim Tracking",
      description:
        "Submitted claims are monitored to check their processing status.",
    },
    {
      number: "04",
      title: "Payment & Follow-up",
      description:
        "Payments are reviewed and unpaid or denied claims are followed up.",
    },
  ];

  return (
    <div className="bg-white">

      {/* Hero Section */}
      <section className="bg-[#12304A] px-6 py-20 text-white lg:px-16">

        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

          <div>
            <span className="mb-5 inline-block rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-[#14B8A6]">
              Our Services / Claims Management
            </span>

            <h1 className="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl">
              Smart & Efficient
              <span className="block text-[#14B8A6]">
                Claims Management
              </span>
            </h1>

            <p className="mb-8 max-w-xl leading-8 text-gray-200">
              Simplify your medical claims process with MedFlow RCM.
              We help healthcare providers manage claim submissions,
              track claim status, reduce errors, and improve
              reimbursement operations.
            </p>

            <div className="flex flex-wrap gap-4">

              <Link
                to="/contact"
                className="flex items-center gap-2 rounded-full bg-[#14B8A6] px-7 py-3 font-bold text-white transition hover:bg-white hover:text-[#12304A]"
              >
                Get a Free Demo
                <FaArrowRight />
              </Link>

              <Link
                to="/contact"
                className="rounded-full border border-white px-7 py-3 font-semibold transition hover:bg-white hover:text-[#12304A]"
              >
                Contact Us
              </Link>

            </div>
          </div>

          {/* Hero Icon Card */}
          <div className="flex justify-center">

            <div className="flex h-72 w-72 items-center justify-center rounded-full bg-[#14B8A6]/10 sm:h-96 sm:w-96">

              <div className="flex h-52 w-52 flex-col items-center justify-center rounded-3xl bg-white text-center shadow-2xl sm:h-64 sm:w-64">

                <FaClipboardCheck className="mb-5 text-7xl text-[#14B8A6] sm:text-8xl" />

                <h3 className="text-xl font-bold text-[#12304A]">
                  Claims Management
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Accurate. Organized. Efficient.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Introduction Section */}
      <section className="px-6 py-20 lg:px-16">

        <div className="mx-auto max-w-4xl text-center">

          <span className="font-semibold uppercase tracking-widest text-[#14B8A6]">
            About Claims Management
          </span>

          <h2 className="mb-6 mt-4 text-3xl font-extrabold text-[#12304A] sm:text-4xl">
            Manage Claims with Confidence
          </h2>

          <p className="text-base leading-8 text-gray-600">
            Claims management is an important part of the healthcare
            revenue cycle. It involves preparing, submitting,
            monitoring, and following up on medical claims sent
            to insurance companies. MedFlow RCM helps organize
            this process so healthcare providers can focus more
            on patient care.
          </p>

        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 px-6 py-20 lg:px-16">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">

            <span className="font-semibold uppercase tracking-widest text-[#14B8A6]">
              What We Offer
            </span>

            <h2 className="mb-4 mt-3 text-3xl font-extrabold text-[#12304A] sm:text-4xl">
              Our Claims Management Services
            </h2>

            <p className="mx-auto max-w-2xl leading-7 text-gray-600">
              Complete support to help healthcare practices
              manage their medical claims efficiently.
            </p>

          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">

            {features.map((item, index) => (

              <div
                key={index}
                className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#12304A] text-2xl text-[#14B8A6] transition group-hover:bg-[#14B8A6] group-hover:text-white">
                  {item.icon}
                </div>

                <h3 className="mb-3 text-xl font-bold text-[#12304A]">
                  {item.title}
                </h3>

                <p className="text-sm leading-7 text-gray-600">
                  {item.description}
                </p>

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* Process Section */}
      <section className="px-6 py-20 lg:px-16">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">

            <span className="font-semibold uppercase tracking-widest text-[#14B8A6]">
              Our Workflow
            </span>

            <h2 className="mb-4 mt-3 text-3xl font-extrabold text-[#12304A] sm:text-4xl">
              How Claims Management Works
            </h2>

            <p className="text-gray-600">
              A simple and organized process from submission to payment.
            </p>

          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

            {steps.map((step) => (

              <div
                key={step.number}
                className="relative rounded-2xl border border-gray-100 p-7 transition hover:border-[#14B8A6] hover:shadow-lg"
              >

                <span className="mb-5 block text-4xl font-extrabold text-[#14B8A6]/40">
                  {step.number}
                </span>

                <h3 className="mb-3 text-xl font-bold text-[#12304A]">
                  {step.title}
                </h3>

                <p className="text-sm leading-7 text-gray-600">
                  {step.description}
                </p>

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-[#12304A] px-6 py-16 text-white lg:px-16">

        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">

          <div className="text-center">
            <FaCheckCircle className="mx-auto mb-4 text-4xl text-[#14B8A6]" />
            <h3 className="mb-2 text-xl font-bold">Fewer Errors</h3>
            <p className="text-sm leading-6 text-gray-300">
              Support accurate claim preparation and submission.
            </p>
          </div>

          <div className="text-center">
            <FaClock className="mx-auto mb-4 text-4xl text-[#14B8A6]" />
            <h3 className="mb-2 text-xl font-bold">Better Tracking</h3>
            <p className="text-sm leading-6 text-gray-300">
              Keep track of claim status and pending payments.
            </p>
          </div>

          <div className="text-center">
            <FaChartLine className="mx-auto mb-4 text-4xl text-[#14B8A6]" />
            <h3 className="mb-2 text-xl font-bold">Improved Workflow</h3>
            <p className="text-sm leading-6 text-gray-300">
              Organize claim activities and follow-up processes.
            </p>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">

        <div className="mx-auto max-w-5xl rounded-3xl bg-[#14B8A6]/10 px-6 py-14 text-center sm:px-12">

          <h2 className="mb-5 text-3xl font-extrabold text-[#12304A] sm:text-4xl">
            Let's Improve Your Claims Process
          </h2>

          <p className="mx-auto mb-8 max-w-2xl leading-7 text-gray-600">
            Partner with MedFlow RCM to organize your claims
            management process and support your practice's
            financial operations.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-[#12304A] px-8 py-4 font-bold text-white transition hover:bg-[#14B8A6]"
          >
            Talk to Our Team
            <FaArrowRight />
          </Link>

        </div>

      </section>

    </div>
  );
};

export default ClaimsManagement;
