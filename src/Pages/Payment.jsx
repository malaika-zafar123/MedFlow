
import { Link } from "react-router-dom";

import {
  FaMoneyBillWave,
  FaCreditCard,
  FaFileInvoiceDollar,
  FaClipboardCheck,
  FaArrowRight,
  FaCheckCircle,
  FaChartLine,
  FaClock,
  FaShieldAlt,
} from "react-icons/fa";

const Payment = () => {

  const services = [
    {
      icon: <FaMoneyBillWave />,
      title: "Payment Recording",
      description:
        "Record insurance and patient payments accurately to maintain updated financial records.",
    },
    {
      icon: <FaFileInvoiceDollar />,
      title: "ERA & EOB Processing",
      description:
        "Review Electronic Remittance Advice and Explanation of Benefits to understand payment details.",
    },
    {
      icon: <FaCreditCard />,
      title: "Patient Payment Posting",
      description:
        "Record patient payments and maintain organized billing information.",
    },
    {
      icon: <FaClipboardCheck />,
      title: "Payment Reconciliation",
      description:
        "Compare received payments with expected amounts to identify discrepancies.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Payment Collection",
      description:
        "Receive payment information from insurance companies and patients.",
    },
    {
      number: "02",
      title: "Payment Review",
      description:
        "Review payment details and verify the corresponding claims.",
    },
    {
      number: "03",
      title: "Payment Posting",
      description:
        "Enter payments into the billing system and update patient accounts.",
    },
    {
      number: "04",
      title: "Reconciliation",
      description:
        "Review outstanding balances and identify payment differences.",
    },
  ];

  const benefits = [
    {
      icon: <FaCheckCircle />,
      title: "Accurate Records",
      description:
        "Maintain organized and accurate payment information.",
    },
    {
      icon: <FaClock />,
      title: "Time Efficiency",
      description:
        "Simplify payment recording and reduce manual administrative work.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Reliable Processing",
      description:
        "Follow organized procedures for handling payment information.",
    },
    {
      icon: <FaChartLine />,
      title: "Financial Visibility",
      description:
        "Understand payment status and monitor outstanding balances.",
    },
  ];

  return (
    <div className="bg-white">

      {/* Hero Section */}
      <section className="bg-[#12304A] px-6 py-20 text-white lg:px-16">

        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

          <div>

            <span className="mb-5 inline-block rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-[#14B8A6]">
              Our Services / Payment Posting
            </span>

            <h1 className="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl">
              Accurate & Efficient
              <span className="block text-[#14B8A6]">
                Payment Posting
              </span>
            </h1>

            <p className="mb-8 max-w-xl leading-8 text-gray-200">
              Manage healthcare payments with MedFlow RCM.
              We help healthcare providers record payments,
              process ERA and EOB information, reconcile
              accounts, and maintain accurate financial records.
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

          {/* Hero Icon */}
          <div className="flex justify-center">

            <div className="flex h-72 w-72 items-center justify-center rounded-full bg-[#14B8A6]/10 sm:h-96 sm:w-96">

              <div className="flex h-52 w-52 flex-col items-center justify-center rounded-3xl bg-white text-center shadow-2xl sm:h-64 sm:w-64">

                <FaMoneyBillWave className="mb-5 text-7xl text-[#14B8A6] sm:text-8xl" />

                <h3 className="text-xl font-bold text-[#12304A]">
                  Payment Posting
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Accurate. Organized. Reliable.
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
            About Payment Posting
          </span>

          <h2 className="mb-6 mt-4 text-3xl font-extrabold text-[#12304A] sm:text-4xl">
            Simplifying Healthcare Payments
          </h2>

          <p className="leading-8 text-gray-600">
            Payment posting is an important part of Revenue Cycle
            Management. It involves recording payments received
            from insurance companies and patients into the
            healthcare billing system. It also includes reviewing
            adjustments, identifying outstanding balances, and
            maintaining accurate financial records.
          </p>

        </div>

      </section>

      {/* Services Section */}
      <section className="bg-gray-50 px-6 py-20 lg:px-16">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">

            <span className="font-semibold uppercase tracking-widest text-[#14B8A6]">
              What We Provide
            </span>

            <h2 className="mb-4 mt-3 text-3xl font-extrabold text-[#12304A] sm:text-4xl">
              Our Payment Posting Services
            </h2>

            <p className="mx-auto max-w-2xl leading-7 text-gray-600">
              Professional payment management solutions
              designed for healthcare providers.
            </p>

          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">

            {services.map((service, index) => (

              <div
                key={index}
                className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#14B8A6] hover:shadow-xl"
              >

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#12304A] text-2xl text-[#14B8A6] transition group-hover:bg-[#14B8A6] group-hover:text-white">
                  {service.icon}
                </div>

                <h3 className="mb-3 text-xl font-bold text-[#12304A]">
                  {service.title}
                </h3>

                <p className="text-sm leading-7 text-gray-600">
                  {service.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Workflow Section */}
      <section className="px-6 py-20 lg:px-16">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">

            <span className="font-semibold uppercase tracking-widest text-[#14B8A6]">
              Our Workflow
            </span>

            <h2 className="mb-4 mt-3 text-3xl font-extrabold text-[#12304A] sm:text-4xl">
              How Payment Posting Works
            </h2>

            <p className="text-gray-600">
              A simple process for managing healthcare payments.
            </p>

          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

            {steps.map((step) => (

              <div
                key={step.number}
                className="rounded-2xl border border-gray-100 p-7 transition hover:border-[#14B8A6] hover:shadow-lg"
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
      <section className="bg-[#12304A] px-6 py-20 text-white lg:px-16">

        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">

            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Why Choose MedFlow RCM?
            </h2>

            <p className="mt-4 text-gray-300">
              Making healthcare payment management simpler and more organized.
            </p>

          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

            {benefits.map((item, index) => (

              <div key={index} className="text-center">

                <div className="mb-5 flex justify-center text-4xl text-[#14B8A6]">
                  {item.icon}
                </div>

                <h3 className="mb-3 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="text-sm leading-7 text-gray-300">
                  {item.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">

        <div className="mx-auto max-w-5xl rounded-3xl bg-[#14B8A6]/10 px-6 py-14 text-center sm:px-12">

          <h2 className="mb-5 text-3xl font-extrabold text-[#12304A] sm:text-4xl">
            Improve Your Payment Management
          </h2>

          <p className="mx-auto mb-8 max-w-2xl leading-7 text-gray-600">
            Let MedFlow RCM help you organize payment records
            and improve your revenue cycle operations.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-[#12304A] px-8 py-4 font-bold text-white transition hover:bg-[#14B8A6]"
          >
            Get Started
            <FaArrowRight />
          </Link>

        </div>

      </section>

    </div>
  );
};

export default Payment;
