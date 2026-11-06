import { Link } from "react-router-dom";
import {
    FaHeartbeat,
    FaBullseye,
    FaEye,
    FaShieldAlt,
    FaChartLine,
    FaUsers,
    FaCheckCircle,
    FaArrowRight,
    FaAward,
    FaHandshake,
    FaLightbulb,
    FaFileInvoiceDollar,
} from "react-icons/fa";

const About = () => {
    const benefits = [
        {
            icon: <FaShieldAlt />,
            title: "Accuracy & Reliabaility",
            description: "We focus on accurate billing processes and organized claim management to support reliable revenue operations."
        },
        {
            icon: <FaChartLine />,
            title: "Revenue Optimization",
            description:
                "Our RCM approach helps healthcare providers identify workflow improvements and manage revenue more effectively.",
        },
        {
            icon: <FaUsers />,
            title: "Dedicated Support",
            description:
                "We believe in clear communication and understanding the individual needs of every healthcare organization.",
        },
        {
            icon: <FaAward />,
            title: "Quality Service",
            description:
                "We aim to deliver consistent service quality through organized workflows and attention to detail.",
        },
    ];

    const values = [
        {
            icon: <FaShieldAlt />,
            title: "Integrity",
            description:
                "We believe in honest communication and responsible business practices.",
        },
        {
            icon: <FaHandshake />,
            title: "Trust",
            description:
                "We value long-term relationships built on transparency and reliability.",
        },
        {
            icon: <FaLightbulb />,
            title: "Innovation",
            description:
                "We continuously explore better ways to improve RCM workflows.",
        },
        {
            icon: <FaHeartbeat />,
            title: "Commitment",
            description:
                "We are committed to supporting healthcare providers and their operations.",
        },
    ];
    return (
        <main className="bg-background">

            {/* Hero Section */}
            <section className="bg-primary px-5 py-20 text-center md:px-8">
                <div>
                    <span className="inline-block rounded-full
            bg-secondary/15 px-5 py-2 text-sm font-bold
            uppercase text-secondary">
                        About MedFlow RCM</span>

                    <h1 className="mt-6 text-4xl font-extraboldleading-tight text-white sm:text-5xl lg:text-6xl">
                        Simplifying Healthcare{" "}
                        <span className="text-secondary">
                            Revenue Management
                        </span>
                    </h1>
                    <p
                        className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/75"
                    >
                        We aim to help healthcare providers simplify
                        revenue cycle operations through organized medical billing, claims management, and reliable RCM solutions.
                    </p>

                    <Link
                        to="/contact"
                        className="mt-8 inline-flex items-center gap-3 rounded-full bg-secondary px-8 py-4 
                        font-bold text-white transition hover:bg-white hover:text-primary"
                    >
                        Get in Touch
                        <FaArrowRight />
                    </Link>
                </div>
            </section>

            {/* Who We Are */}
            <section className="px-5 py-20 md:px-8">

                <div className="mx-auto grid max-w-7xl
                grid-cols-1 items-center gap-14 lg:grid-cols-2">

                    {/* Left side */}
                    <div>

                        <span className="font-bold uppercase
                  tracking-widest text-secondary">
                            Who We Are
                        </span>

                        <h2 className="mt-4 text-3xl font-extrabold
                    leading-tight text-primary sm:text-4xl">
                            Your Partner in{" "}
                            <span className="text-secondary">
                                Revenue Cycle Management
                            </span>
                        </h2>

                        <p className="mt-6 leading-8 text-primary/70">
                            MedFlow RCM is a healthcare revenue cycle management service concept focused on helping
                            healthcare providers manage their billing and financial workflows.                </p>

                        <p className="mt-4 leading-8 text-primary/70">
                            From medical billing and coding to claims management and payment posting, our goal is
                            to make revenue cycle operations more organized and efficient.
                        </p>

                        <div className="mt-7 space-y-4">

                            <div className="flex items-center gap-3">
                                <FaCheckCircle className="shrink-0 text-secondary" />
                                <span className="font-medium text-primary">
                                    Organized Billing Workflows
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaCheckCircle className="shrink-0 text-secondary" />
                                <span className="font-medium text-primary">
                                    Efficient Claims Management
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaCheckCircle className="shrink-0 text-secondary" />
                                <span className="font-medium text-primary">
                                    Revenue Cycle Support
                                </span>
                            </div>

                        </div>

                    </div>

                    {/* Right side */}
                    <div className="relative">

                        <div
                            className="rounded-3xl bg-primary
              p-8 sm:p-12"
                        >

                            <div className="mx-auto flex h-24 w-24
              items-center justify-center rounded-3xl
              bg-secondary text-5xl text-white">
                                <FaFileInvoiceDollar />
                            </div>

                            <h3 className="mt-8 text-center text-2xl
              font-bold text-white">
                                MedFlow RCM
                            </h3>

                            <p className="mt-3 text-center leading-7
              text-white/75">
                                Streamline. Optimize. Grow.
                            </p>

                            <div className="mt-10 grid grid-cols-2 gap-4">

                                <div className="rounded-xl bg-white/10 p-5 text-center">
                                    <FaChartLine className="mx-auto text-2xl text-secondary" />
                                    <p className="mt-3 text-sm font-semibold text-white">
                                        Revenue Focus
                                    </p>
                                </div>

                                <div className="rounded-xl bg-white/10 p-5 text-center">
                                    <FaUsers className="mx-auto text-2xl text-secondary" />
                                    <p className="mt-3 text-sm font-semibold text-white">
                                        Provider Support
                                    </p>
                                </div>

                            </div>

                        </div>

                        <div className="absolute -bottom-5 -left-3
            -z-10 h-28 w-28 rounded-3xl bg-secondary/20" />

                    </div>

                </div>
            </section>

 {/* Mission & Vision */}
      <section className="bg-primary/5 px-5 py-20 md:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">

            <span className="font-bold uppercase
            tracking-widest text-secondary">
              Our Purpose
            </span>

            <h2 className="mt-3 text-3xl font-extrabold
            text-primary sm:text-4xl">
              Mission & Vision
            </h2>

            <p className="mx-auto mt-4 max-w-2xl
            leading-7 text-primary/70">
              Our purpose is to support better healthcare
              financial operations through reliable RCM practices.
            </p>

          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

            {/* Mission */}
            <div className="rounded-2xl border border-primary/10
            bg-white p-8 transition hover:border-secondary hover:shadow-lg">

              <div className="flex h-16 w-16 items-center
              justify-center rounded-2xl bg-secondary/10
              text-3xl text-secondary">
                <FaBullseye />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-primary">
                Our Mission
              </h3>

              <p className="mt-4 leading-8 text-primary/70">
                Our mission is to simplify revenue cycle
                management for healthcare providers by
                supporting accurate billing, organized
                claims processing, and efficient financial workflows.
              </p>

            </div>

            {/* Vision */}
            <div className="rounded-2xl border border-primary/10
            bg-white p-8 transition hover:border-secondary hover:shadow-lg">

              <div className="flex h-16 w-16 items-center
              justify-center rounded-2xl bg-secondary/10
              text-3xl text-secondary">
                <FaEye />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-primary">
                Our Vision
              </h3>

              <p className="mt-4 leading-8 text-primary/70">
                Our vision is to become a trusted RCM
                solutions partner known for transparency,
                service quality, and continuous improvement
                in healthcare revenue operations.
              </p>
            </div>
          </div>
        </div>
      </section>
            {/* Why Choose Us */}
      <section className="px-5 py-20 md:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-14 max-w-2xl text-center">

            <span className="font-bold uppercase
            tracking-widest text-secondary">
              Why Choose Us
            </span>

            <h2 className="mt-3 text-3xl font-extrabold
            text-primary sm:text-4xl">
              Why MedFlow RCM?
            </h2>

            <p className="mt-4 leading-7 text-primary/70">
              We focus on practical RCM support that helps
              healthcare providers manage their operations.
            </p>

          </div>

          <div className="grid grid-cols-1 gap-7
          sm:grid-cols-2 lg:grid-cols-4">

            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="group rounded-2xl border
                border-primary/10 bg-white p-7
                transition duration-300 hover:-translate-y-2
                hover:border-secondary hover:shadow-xl"
              >

                <div className="flex h-14 w-14 items-center
                justify-center rounded-xl bg-secondary/10
                text-2xl text-secondary transition
                group-hover:bg-secondary group-hover:text-white">
                  {benefit.icon}
                </div>

                <h3 className="mt-6 text-lg font-bold
                text-primary group-hover:text-secondary">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-primary/70">
                  {benefit.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Core Values */}
      <section className="bg-primary px-5 py-20 md:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-14 max-w-2xl text-center">

            <span className="font-bold uppercase
            tracking-widest text-secondary">
              What We Believe
            </span>

            <h2 className="mt-3 text-3xl font-extrabold
            text-white sm:text-4xl">
              Our Core Values
            </h2>

            <p className="mt-4 leading-7 text-white/70">
              The principles that guide our approach
              to healthcare revenue cycle management.
            </p>

          </div>

          <div className="grid grid-cols-1 gap-7
          sm:grid-cols-2 lg:grid-cols-4">

            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-white/15
                bg-white/5 p-7 text-center transition
                hover:border-secondary hover:bg-white/10"
              >

                <div className="mx-auto flex h-16 w-16
                items-center justify-center rounded-2xl
                bg-secondary text-3xl text-white">
                  {value.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold text-white">
                  {value.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/70">
                  {value.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Bottom CTA */}
      <section className="px-5 py-20 text-center md:px-8">

        <div className="mx-auto max-w-3xl">

          <span className="font-bold uppercase
          tracking-widest text-secondary">
            Let's Work Together
          </span>

          <h2 className="mt-4 text-3xl font-extrabold
          text-primary sm:text-4xl">
            Ready to Simplify Your Revenue Cycle?
          </h2>

          <p className="mt-5 leading-7 text-primary/70">
            Connect with MedFlow RCM to explore solutions
            designed around your healthcare business needs.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center
            gap-3 rounded-full bg-secondary px-8 py-4
            font-bold text-white transition hover:bg-primary"
          >
            Contact Our Team
            <FaArrowRight />
          </Link>

        </div>

      </section>
        </main>
    )
}

export default About;