import React from "react";
import { Link } from "react-router-dom";
import {
    FaProjectDiagram,
    FaCalculator,
    FaQuestionCircle,
    FaArrowRight,
} from "react-icons/fa";

const resources = [
    {
        icon: <FaProjectDiagram />,
        title: "RCM Workflow",
        description:
            "Understand how the revenue cycle works, from patient registration and insurance verification to claim submission and final payment.",
        link: "/resources/workflow",
        button: "Explore Workflow",
    },
    {
        icon: <FaCalculator />,
        title: "Revenue Calculator",
        description:
            "Explore how claim amounts, denial rates, and recovery scenarios can affect a healthcare provider's revenue.",
        link: "/resources/revenue-calculator",
        button: "Calculate Revenue",
    },
    {
        icon: <FaQuestionCircle />,
        title: "Frequently Asked Questions",
        description:
            "Find answers to common questions about medical billing, claims management, payment posting, and RCM services.",
        link: "/resources/faqs",
        button: "View FAQs",
    },
];

const Resources = () => {
    return (
        <section className="bg-white py-20 px-5 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">

                {/* Section Heading */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <span className="text-sm font-semibold uppercase tracking-widest text-teal-600">
                        Knowledge Center
                    </span>

                    <h2 className="text-3xl md:text-4xl font-bold text-[#12304A] mt-3">
                        Resources to Help You Grow
                    </h2>

                    <p className="text-gray-600 mt-4 leading-7">
                        Explore helpful resources to understand healthcare revenue cycle
                        management and make better financial decisions for your practice.
                    </p>
                </div>

                {/* Resource Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {resources.map((item, index) => (
                        <div
                            key={index}
                            className="group bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-teal-400 transition duration-300"
                        >
                            {/* Icon */}
                            <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-teal-50 text-teal-600 text-3xl mb-6 group-hover:bg-teal-500 group-hover:text-white transition duration-300">
                                {item.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-[#12304A] mb-4">
                                {item.title}
                            </h3>

                            <p className="text-gray-600 leading-7 mb-7">
                                {item.description}
                            </p>

                            {/* Button */}
                            <Link
                                to={item.link}
                                className="inline-flex items-center gap-2 font-semibold text-teal-600 hover:text-[#12304A] transition"
                            >
                                {item.button}
                                <FaArrowRight className="text-sm group-hover:translate-x-1 transition" />
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 bg-[#12304A] rounded-2xl p-8 md:p-12 text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                        Need Help Understanding Your RCM?
                    </h3>

                    <p className="text-gray-200 mt-4 max-w-2xl mx-auto leading-7">
                        Our team can help you understand your revenue cycle and explore
                        ways to improve your billing process.
                    </p>

                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 mt-7 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-7 py-3 rounded-lg transition"
                    >
                        Contact Our Team
                        <FaArrowRight />
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default Resources;