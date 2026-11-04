import {
  FaHeartbeat,
  FaArrowRight,
  FaCheck,
  FaChartLine,
  FaClock,
  FaHospital,
} from "react-icons/fa";

import {
  FiArrowUpRight,
  FiActivity,
} from "react-icons/fi";

import { HiOutlineArrowTrendingUp } from "react-icons/hi2";

//Hero Image
import HeroImg from "../assets/HeroImg.jpg";

//Services page
import Services from "./Services";

//Resources page
import Resources from "./Resources";

//Solutions page
import Solutions from "./Solutions";


 function Hero() {
  return (
    <section
      id="/"
      className="relative  overflow-hidden bg-[#061f3d] text-white"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-32 -top-40 h-[500px] w-[500px] rounded-full bg-teal-500/15 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 left-1/3 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-3xl" />

      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-2 lg:gap-10 lg:px-12 lg:py-24">

        {/* LEFT CONTENT */}
        <div className="relative z-10">

          {/* Badge */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/10 px-4 py-2 text-sm font-medium text-teal-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-teal-400" />

            Healthcare Revenue Cycle Management
          </div>

          {/* Heading */}
          <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl md:text-6xl">
            Maximize Your Revenue
            <br />
            with{" "}
            <span className="bg-gradient-to-r from-teal-300 to-cyan-400 bg-clip-text text-transparent">
              MedFlow RCM
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
            End-to-end RCM solutions to streamline your billing,
            reduce claim denials, and improve financial performance.
            Focus on patient care while we help simplify your
            revenue cycle.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#free-demo"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-teal-400 px-7 py-4 font-bold text-[#062642] shadow-lg shadow-teal-500/20 transition duration-300 hover:-translate-y-1 hover:bg-teal-300"
            >
              Try Free RCM Analysis

              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/30 px-7 py-4 font-semibold text-white transition duration-300 hover:border-teal-400 hover:bg-white/10"
            >
              Explore Our Services
              <FiArrowUpRight className="text-lg" />
            </a>
          </div>

          {/* Statistics */}
          <div className="mt-12 grid grid-cols-3 gap-4 border-t border-white/15 pt-8">

            <div>
              <div className="flex items-center gap-2">
                <FaCheck className="text-2xl text-teal-400" />

                <span className="text-xl font-extrabold sm:text-2xl">
                  99%+
                </span>
              </div>

              <p className="mt-2 text-xs leading-5 text-slate-400 sm:text-sm">
                Claim Accuracy
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <FaChartLine className="text-2xl text-teal-400" />

                <span className="text-xl font-extrabold sm:text-2xl">
                  30%+
                </span>
              </div>

              <p className="mt-2 text-xs leading-5 text-slate-400 sm:text-sm">
                Revenue Boost
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <FaClock className="text-2xl text-teal-400" />

                <span className="text-xl font-extrabold sm:text-2xl">
                  24/7
                </span>
              </div>

              <p className="mt-2 text-xs leading-5 text-slate-400 sm:text-sm">
                Support
              </p>
            </div>

          </div>

          <p className="mt-4 text-xs text-slate-500">
            * Statistics are illustrative placeholders for this demo.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative mx-auto w-full max-w-2xl lg:ml-auto">

          {/* Image Frame */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#103b5e] shadow-2xl shadow-black/30">

            <img
              src={HeroImg}
              alt="Healthcare professional working with medical technology"
              className="h-[360px] w-full object-cover sm:h-[450px] lg:h-[610px]"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#061f3d]/90 via-[#061f3d]/10 to-[#061f3d]/10" />

            {/* Floating Healthcare Icon
            <div className="absolute right-5 top-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/30 bg-white/15 text-3xl text-teal-300 shadow-xl backdrop-blur-xl sm:right-8 sm:top-8 sm:h-20 sm:w-20 sm:text-4xl">
              <FaHeartbeat />
            </div> */}

            {/* Bottom Image Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div className="max-w-sm rounded-2xl border border-white/20 bg-[#08294c]/80 p-5 shadow-xl backdrop-blur-xl">

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-400/15 text-2xl text-teal-300">
                    <HiOutlineArrowTrendingUp />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold">
                      Smarter Revenue Management
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-300">
                      Better visibility. Streamlined billing.
                      More informed decisions.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        
          {/* Floating Bottom Card */}
          <div className="absolute -bottom-5 right-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 text-[#09294c] shadow-xl sm:right-8">

            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-xl text-teal-600">
                <FaCheck />
              </div>

              <div>
                <p className="text-sm font-bold">
                  Revenue Cycle Insights
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Clearer billing visibility
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

    <Services/>
      <Resources/>
      <Solutions/>
    </section>
  );
}

export default Hero;