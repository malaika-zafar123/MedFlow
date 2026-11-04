import { Link } from "react-router-dom";
import {
  FaHospital,
  FaUserMd,
  FaTooth,
  FaHeartbeat,
  FaFileInvoiceDollar,
  FaChartLine,
  FaShieldAlt,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

const solutions = [
  {
    icon: <FaHospital />,
    title: "Hospitals & Healthcare Centers",
    description:
      "Organized billing and claims management support to help healthcare facilities manage complex revenue cycle operations.",
    features: [
      "Medical billing support",
      "Claims tracking",
      "Payment management",
    ],
  },
  {
    icon: <FaUserMd />,
    title: "Private Medical Practices",
    description:
      "Revenue cycle solutions designed to support independent physicians and medical practices with their billing processes.",
    features: [
      "Patient billing support",
      "Insurance verification",
      "Revenue tracking",
    ],
  },
  {
    icon: <FaTooth />,
    title: "Dental Clinics",
    description:
      "Billing workflow support that helps dental practices organize insurance claims and patient payment records.",
    features: [
      "Dental claim management",
      "Insurance coordination",
      "Payment posting",
    ],
  },
  {
    icon: <FaHeartbeat />,
    title: "Specialty Clinics",
    description:
      "Flexible RCM support for specialty healthcare providers with different billing and documentation requirements.",
    features: [
      "Specialty billing support",
      "Claim follow-up",
      "Denial management",
    ],
  },
];

const benefits = [
  {
    icon: <FaFileInvoiceDollar />,
    title: "Accurate Billing",
    description:
      "Support accurate claim preparation and organized billing workflows.",
  },
  {
    icon: <FaChartLine />,
    title: "Revenue Visibility",
    description:
      "Improve visibility into claims, payments, and outstanding balances.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Reliable Processes",
    description:
      "Follow organized workflows for handling billing and financial information.",
  },
];

const Solutions = () => {
  return (
    <div className="bg-white">

      {/* Hero Section */}
      <section className="bg-[#12304A] py-20 px-5 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-teal-400 font-semibold uppercase tracking-widest text-sm">
            Healthcare Solutions
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4">
            RCM Solutions Designed for Your Practice
          </h1>

          <p className="text-gray-300 max-w-3xl mx-auto mt-6 leading-8">
            Every healthcare organization has different financial needs.
            MedFlow RCM provides organized revenue cycle support to help
            healthcare providers manage billing, claims, and payments.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-7 py-3 rounded-lg font-semibold mt-8 transition"
          >
            Explore Our Solutions <FaArrowRight />
          </Link>
        </div>
      </section>

      {/* Solutions Cards */}
      <section className="py-20 px-5 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">
            <span className="text-teal-600 font-semibold uppercase tracking-widest text-sm">
              Who We Support
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-[#12304A] mt-3">
              Solutions for Different Healthcare Providers
            </h2>

            <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-7">
              Our solutions are designed around the billing and revenue
              management needs of different healthcare organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            {solutions.map((item, index) => (
              <div
                key={index}
                className="bg-white p-7 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-teal-400 transition duration-300"
              >
                <div className="w-14 h-14 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center text-2xl mb-6">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-[#12304A] mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-7 text-sm mb-6">
                  {item.description}
                </p>

                <div className="space-y-3">
                  {item.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <FaCheckCircle className="text-teal-500 shrink-0" />
                      <span className="text-sm text-gray-600">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-5 md:px-12">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">
            <span className="text-teal-600 font-semibold uppercase tracking-widest text-sm">
              Our Approach
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-[#12304A] mt-3">
              Why Choose MedFlow RCM?
            </h2>

            <p className="text-gray-600 mt-4">
              Organized processes that support better revenue management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition"
              >
                <div className="w-16 h-16 mx-auto bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center text-3xl mb-5">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-[#12304A] mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-5 md:px-12 pb-20">
        <div className="max-w-7xl mx-auto bg-[#12304A] rounded-3xl p-10 md:p-14 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Let's Find the Right Solution for Your Practice
          </h2>

          <p className="text-gray-300 mt-5 max-w-2xl mx-auto leading-7">
            Connect with our team to discuss your healthcare billing and
            revenue cycle management requirements.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-8 bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            Get in Touch <FaArrowRight />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Solutions;
