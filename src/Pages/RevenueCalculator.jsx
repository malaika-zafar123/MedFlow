
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaCalculator,
  FaMoneyBillWave,
  FaChartLine,
  FaArrowRight,
} from "react-icons/fa";

const RevenueCalculator = () => {
  const [claimAmount, setClaimAmount] = useState(100000);
  const [denialRate, setDenialRate] = useState(10);
  const [recoveryRate, setRecoveryRate] = useState(70);

  // Revenue Calculations
  const deniedAmount = (claimAmount * denialRate) / 100;

  const recoveredAmount = (deniedAmount * recoveryRate) / 100;

  const unrecoveredAmount = deniedAmount - recoveredAmount;

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="bg-white">

      {/* Hero Section */}
      <section className="bg-[#12304A] py-20 px-5 md:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-teal-400 font-semibold uppercase tracking-widest text-sm">
            Revenue Calculator
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Calculate Your Revenue Potential
          </h1>

          <p className="text-gray-300 mt-6 leading-8">
            Understand how claim denials can affect your revenue and explore
            a sample recovery scenario with our interactive calculator.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 px-5 md:px-12 bg-slate-50">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#12304A]">
              Revenue Recovery Calculator
            </h2>

            <p className="text-gray-600 mt-3">
              Enter your billing details to see an estimated result.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Input Form */}
            <div className="bg-white rounded-2xl shadow-md p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-teal-50 text-teal-600 p-3 rounded-xl">
                  <FaCalculator className="text-2xl" />
                </div>

                <h3 className="text-xl font-bold text-[#12304A]">
                  Enter Your Details
                </h3>
              </div>

              {/* Monthly Claims */}
              <div className="mb-7">
                <label className="block text-[#12304A] font-semibold mb-3">
                  Monthly Claim Amount ($)
                </label>

                <input
                  type="number"
                  min="0"
                  value={claimAmount}
                  onChange={(e) =>
                    setClaimAmount(Math.max(0, Number(e.target.value)))
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                  placeholder="Enter monthly claim amount"
                />
              </div>

              {/* Denial Rate */}
              <div className="mb-7">
                <div className="flex justify-between mb-3">
                  <label className="font-semibold text-[#12304A]">
                    Claim Denial Rate
                  </label>

                  <span className="font-bold text-teal-600">
                    {denialRate}%
                  </span>
                </div>

                <input
                  type="range"
                  min="0"
                  max="100"
                  value={denialRate}
                  onChange={(e) => setDenialRate(Number(e.target.value))}
                  className="w-full accent-teal-500 cursor-pointer"
                />

                <div className="flex justify-between text-sm text-gray-400">
                  <span>0%</span>
                  <span>100%</span>
                </div>
              </div>

              {/* Recovery Rate */}
              <div className="mb-7">
                <div className="flex justify-between mb-3">
                  <label className="font-semibold text-[#12304A]">
                    Estimated Recovery Rate
                  </label>

                  <span className="font-bold text-teal-600">
                    {recoveryRate}%
                  </span>
                </div>

                <input
                  type="range"
                  min="0"
                  max="100"
                  value={recoveryRate}
                  onChange={(e) => setRecoveryRate(Number(e.target.value))}
                  className="w-full accent-teal-500 cursor-pointer"
                />

                <div className="flex justify-between text-sm text-gray-400">
                  <span>0%</span>
                  <span>100%</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setClaimAmount(100000);
                  setDenialRate(10);
                  setRecoveryRate(70);
                }}
                className="text-teal-600 font-semibold hover:text-[#12304A] transition"
              >
                Reset Calculator
              </button>
            </div>

            {/* Results */}
            <div className="bg-[#12304A] rounded-2xl shadow-md p-8 text-white">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-white/10 p-3 rounded-xl text-teal-400">
                  <FaChartLine className="text-2xl" />
                </div>

                <h3 className="text-xl font-bold">
                  Estimated Results
                </h3>
              </div>

              <div className="space-y-5">

                <div className="bg-white/10 rounded-xl p-5">
                  <p className="text-gray-300 text-sm">
                    Total Monthly Claims
                  </p>

                  <h3 className="text-2xl font-bold mt-2">
                    {formatCurrency(claimAmount)}
                  </h3>
                </div>

                <div className="bg-white/10 rounded-xl p-5">
                  <p className="text-gray-300 text-sm">
                    Estimated Denied Amount
                  </p>

                  <h3 className="text-2xl font-bold mt-2 text-orange-300">
                    {formatCurrency(deniedAmount)}
                  </h3>
                </div>

                <div className="bg-teal-500 rounded-xl p-5">
                  <p className="text-white/90 text-sm">
                    Potential Recovered Revenue
                  </p>

                  <h3 className="text-3xl font-bold mt-2">
                    {formatCurrency(recoveredAmount)}
                  </h3>
                </div>

                <div className="bg-white/10 rounded-xl p-5">
                  <p className="text-gray-300 text-sm">
                    Estimated Unrecovered Amount
                  </p>

                  <h3 className="text-2xl font-bold mt-2">
                    {formatCurrency(unrecoveredAmount)}
                  </h3>
                </div>

              </div>

              <p className="text-gray-300 text-sm mt-6 leading-6">
                <FaMoneyBillWave className="inline text-teal-400 mr-2" />
                These figures are illustrative estimates, not guaranteed
                financial results.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-5 md:px-12">
        <div className="max-w-7xl mx-auto bg-teal-50 rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold text-[#12304A]">
            Want to Improve Your Revenue Cycle?
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Contact MedFlow RCM to explore billing and claims management
            solutions for your healthcare organization.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-7 bg-[#12304A] hover:bg-teal-600 text-white px-7 py-3 rounded-lg font-semibold transition"
          >
            Contact Us <FaArrowRight />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default RevenueCalculator;
