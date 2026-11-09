import {Link} from "react-router-dom";

import {
  FaFileInvoiceDollar,
  FaUserMd,
  FaClipboardList,
  FaMoneyBillWave,
  FaCheckCircle,
  FaArrowRight,
  FaShieldAlt,
  FaChartLine,
  FaClock,
} from "react-icons/fa";

const MedicalBilling = () =>{
 const services = [
    {
      icon: <FaFileInvoiceDollar />,
      title: "Charge Entry",
      description:
        "Accurate entry of medical services and charges to maintain proper billing records.",
    },
    {
      icon: <FaClipboardList />,
      title: "Medical Claims Processing",
      description:
        "Prepare and process medical claims with accurate patient and insurance information.",
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Payment Processing",
      description:
        "Manage payments and maintain organized financial records for healthcare providers.",
    },
    {
      icon: <FaUserMd />,
      title: "Patient Billing",
      description:
        "Manage patient billing statements and help maintain clear billing communication.",
    },
  ];
  const steps = [
    {
      number: "01",
      title: "Patient Registration",
      description:
        "Collect patient details and necessary insurance information.",
    },
    {
      number: "02",
      title: "Charge Entry",
      description:
        "Record medical procedures and services accurately.",
    },
    {
      number: "03",
      title: "Claim Submission",
      description:
        "Prepare and submit claims to the relevant insurance companies.",
    },
    {
      number: "04",
      title: "Payment Posting",
      description:
        "Record received payments and review outstanding balances.",
    },
  ];

  const benefits = [
    {
      icon: <FaCheckCircle />,
      title: "Billing Accuracy",
      description:
        "Help reduce billing errors through accurate data entry and review.",
    },
    {
      icon: <FaClock />,
      title: "Time Saving",
      description:
        "Reduce administrative workload for healthcare providers.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure Processes",
      description:
        "Support responsible handling of sensitive billing information.",
    },
    {
      icon: <FaChartLine />,
      title: "Better Revenue Tracking",
      description:
        "Maintain organized financial records and monitor billing performance.",
    },
  ];
return(
  <main className="bg-primary">
   
        {/* Hero Section */}
      <section className="bg-[#12304A] px-6 py-20 text-white lg:px-16">

        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

          <div>

            <span className="mb-5 inline-block rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-[#14B8A6]">
              Our Services / Medical Billing
            </span>

            <h1 className="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl">
              Professional
              <span className="block text-[#14B8A6]">
                Medical Billing Services
              </span>
            </h1>

            <p className="mb-8 max-w-xl leading-8 text-gray-200">
              Simplify your healthcare billing operations with
              MedFlow RCM. We help healthcare providers manage
              patient billing, charge entry, claims processing,
              and payment records efficiently.
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

          {/* Hero Illustration */}
          <div className="flex justify-center">

            <div className="flex h-72 w-72 items-center justify-center rounded-full bg-[#14B8A6]/10 sm:h-96 sm:w-96">

              <div className="flex h-52 w-52 flex-col items-center justify-center rounded-3xl bg-white text-center shadow-2xl sm:h-64 sm:w-64">

                <FaFileInvoiceDollar className="mb-5 text-7xl text-[#14B8A6] sm:text-8xl" />

                <h3 className="text-xl font-bold text-[#12304A]">
                  Medical Billing
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Accurate. Reliable. Efficient.
                </p>

              </div>

            </div>

          </div>

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
              Our Medical Billing Services
            </h2>

            <p className="mx-auto max-w-2xl leading-7 text-gray-600">
              Complete billing support to help healthcare
              practices manage their financial operations.
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
              How Medical Billing Works
            </h2>

            <p className="text-gray-600">
              A simple step-by-step medical billing process.
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
              Supporting healthcare providers with organized billing solutions.
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
            Simplify Your Medical Billing Today
          </h2>

          <p className="mx-auto mb-8 max-w-2xl leading-7 text-gray-600">
            Let MedFlow RCM support your billing operations
            with organized and reliable revenue cycle solutions.
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

  </main>
)

}
export default MedicalBilling;