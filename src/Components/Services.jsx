
import { Link } from "react-router-dom";
import {
  FaFileInvoiceDollar,
  FaClipboardCheck,
  FaMoneyBillWave,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Medical Billing",
    description:
      "We manage your medical billing process to help healthcare providers receive accurate and timely payments.",
    icon: <FaFileInvoiceDollar />,
    features: [
      "Accurate Medical Billing",
      "Patient Billing Management",
      "Payment Tracking",
    ],
    path: "/services/medical-billing",
  },
  {
    id: 2,
    title: "Claims Management",
    description:
      "Our claims management services help reduce errors, manage claim submissions, and improve the reimbursement process.",
    icon: <FaClipboardCheck />,
    features: [
      "Claims Submission",
      "Claim Tracking",
      "Denial Management",
    ],
    path: "/services/claims-management",
  },
  {
    id: 3,
    title: "Payment Posting",
    description:
      "We provide accurate payment posting services to maintain financial records and track every payment efficiently.",
    icon: <FaMoneyBillWave />,
    features: [
      "Payment Posting",
      "ERA and EOB Processing",
      "Payment Reconciliation",
    ],
    path: "/services/payment",
  },
];

const Services = () => {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-16">

      {/* Section Heading */}
      <div className="mx-auto mb-14 max-w-3xl text-center">

        <span className="mb-4 inline-block rounded-full bg-teal-50 px-5 py-2 text-sm font-semibold text-teal-600">
          Our Services
        </span>

        <h2 className="mb-5 text-3xl font-extrabold text-[#12304A] sm:text-4xl lg:text-5xl">
          Complete RCM Solutions for
          <span className="text-[#14B8A6]"> Healthcare Providers</span>
        </h2>

        <p className="text-base leading-7 text-gray-600">
          We provide reliable revenue cycle management services
          designed to simplify medical billing, improve claims
          processing, and support your financial growth.
        </p>

      </div>

      {/* Services Cards */}
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">

        {services.map((service) => (

          <div
            key={service.id}
            className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:border-[#14B8A6] hover:shadow-xl"
          >

            {/* Icon */}
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-[#12304A] text-3xl text-[#14B8A6] transition group-hover:bg-[#14B8A6] group-hover:text-white">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="mb-4 text-2xl font-bold text-[#12304A]">
              {service.title}
            </h3>

            {/* Description */}
            <p className="mb-6 leading-7 text-gray-600">
              {service.description}
            </p>

            {/* Features */}
            <ul className="mb-7 space-y-3">

              {service.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-sm text-gray-700"
                >
                  <FaCheckCircle className="shrink-0 text-[#14B8A6]" />
                  {feature}
                </li>
              ))}

            </ul>

            {/* Learn More */}
            <Link
              to={service.path}
              className="inline-flex items-center gap-2 font-bold text-[#12304A] transition hover:text-[#14B8A6]"
            >
              Learn More
              <FaArrowRight className="transition group-hover:translate-x-2" />
            </Link>

          </div>

        ))}

      </div>

      {/* Bottom CTA */}
      <div className="mx-auto mt-16 max-w-5xl rounded-2xl bg-[#12304A] px-6 py-12 text-center sm:px-12">

        <h3 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
          Ready to Improve Your Revenue Cycle?
        </h3>

        <p className="mb-7 text-gray-200">
          Let MedFlow RCM help you simplify billing and improve
          your practice's financial performance.
        </p>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-[#14B8A6] px-7 py-3 font-bold text-white transition hover:bg-white hover:text-[#12304A]"
        >
          Get a Free Demo
          <FaArrowRight />
        </Link>

      </div>

    </section>
  );
};

export default Services;
