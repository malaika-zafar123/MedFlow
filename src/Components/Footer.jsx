import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowRight,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaHeartbeat,
} from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const services = [
    {
      name: "Medical Billing",
      path: "/services/medical-billing",
    },
    {
      name: "Medical Coding",
      path: "/services/medical-coding",
    },
    {
      name: "Claims Management",
      path: "/services/claims-management",
    },
    {
      name: "Payment Posting",
      path: "/services/payment-posting",
    },
    {
      name: "Denial Management",
      path: "/services/denial-management",
    },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Solutions", path: "/solutions" },
    { name: "About Us", path: "/about" },
    { name: "Resources", path: "/resources/rcm-workflow" },
    { name: "Contact Us", path: "/contact" },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }

    setMessage(
      "Thank you for your interest! Newsletter integration is not connected yet."
    );

    setEmail("");
  };

  return (
    <footer className="bg-[#061f3d] text-white">

      {/* Newsletter Section */}
      <div className="border-b border-white/15">
        <div
          className="mx-auto flex max-w-7xl flex-col
          gap-6 px-5 py-10 md:flex-row md:items-center
          md:justify-between md:px-8"
        >
          <div>
            <span
              className="mb-2 inline-block text-sm font-bold
              uppercase tracking-widest text-secondary"
            >
              Stay Connected
            </span>

            <h2 className="text-2xl font-bold sm:text-3xl">
              Get the Latest RCM Insights
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-white/75">
              Receive healthcare billing updates, revenue cycle
              tips, and industry insights.
            </p>
          </div>

          <div className="w-full md:max-w-md">
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setMessage("");
                }}
                placeholder="Enter your email address"
                aria-label="Email address"
                className="min-w-0 flex-1 rounded-lg border
                border-white/20 bg-white px-4 py-3
                text-primary outline-none placeholder:text-primary/50
                focus:border-secondary"
              />

              <button
                type="submit"
                className="flex items-center justify-center
                gap-2 rounded-lg bg-secondary px-5 py-3
                font-bold text-white transition hover:bg-white
                hover:text-primary"
              >
                Subscribe
                <FaArrowRight className="text-xs" />
              </button>
            </form>

            {message && (
              <p
                aria-live="polite"
                className="mt-3 text-sm text-secondary"
              >
                {message}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl grid-cols-1
      gap-10 px-5 py-12 sm:grid-cols-2 md:px-8
      lg:grid-cols-4">

        {/* Company Information */}
        <div>
          <Link to="/" className="mb-5 inline-flex items-center gap-3">
            <div
              className="flex h-12 w-12 items-center
              justify-center rounded-xl bg-white"
            >
                <img src={Logo} alt="" />
            </div>

            <div>
              <h2 className="text-xl font-extrabold tracking-tight">
                MedFlow{" "}
                <span className="text-secondary">RCM</span>
              </h2>

              <p className="text-xs tracking-wide text-white/70">
                Streamline. Optimize. Grow.
              </p>
            </div>
          </Link>

          <p className="max-w-xs text-sm leading-7 text-white/75">
            Helping healthcare providers simplify medical billing,
            improve claims management, and optimize their
            revenue cycle operations.
          </p>

          {/* Social Media */}
          <div className="mt-6 flex items-center gap-3">

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center
              justify-center rounded-full border border-white/20
              transition hover:border-secondary hover:bg-secondary"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center
              justify-center rounded-full border border-white/20
              transition hover:border-secondary hover:bg-secondary"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center
              justify-center rounded-full border border-white/20
              transition hover:border-secondary hover:bg-secondary"
            >
              <FaInstagram />
            </a>

          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="mb-5 text-lg font-bold">
            Our Services
          </h3>

          <div  />

          <ul className="space-y-3">
            {services.map((service) => (
              <li key={service.name}>
                <Link
                  to={service.path}
                  className="text-sm text-white/75
                  transition hover:text-secondary"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-5 text-lg font-bold">
            Quick Links
          </h3>

          <div />

          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="text-sm text-white/75
                  transition hover:text-secondary"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="mb-5 text-lg font-bold">
            Contact Information
          </h3>

          <div  />

          <ul className="space-y-5">

            <li className="flex items-start gap-3">
              <FaEnvelope className="mt-1 shrink-0 text-secondary" />

              <div>
                <p className="mb-1 text-sm font-semibold">
                  Email Address
                </p>

                <a
                  href="mailto:info@medflowrcm.com"
                  className="break-all text-sm text-white/75
                  transition hover:text-secondary"
                >
                  info@medflowrcm.com
                </a>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <FaPhoneAlt className="mt-1 shrink-0 text-secondary" />

              <div>
                <p className="mb-1 text-sm font-semibold">
                  Phone Number
                </p>

                <a
                  href="tel:+15551234567"
                  className="text-sm text-white/75
                  transition hover:text-secondary"
                >
                  +1 (555) 123-4567
                </a>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 shrink-0 text-secondary" />

              <div>
                <p className="mb-1 text-sm font-semibold">
                  Office Location
                </p>

                <p className="text-sm leading-6 text-white/75">
                  Serving Healthcare Providers Across the USA
                </p>
              </div>
            </li>

          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/15">
        <div
          className="mx-auto flex max-w-7xl flex-col
          gap-4 px-5 py-5 text-center sm:flex-row
          sm:items-center sm:justify-between sm:px-8 sm:text-left"
        >
          <p className="text-sm text-white/70">
            © {new Date().getFullYear()} MedFlow RCM.
            All rights reserved.
          </p>

          <div className="flex flex-wrap items-center
          justify-center gap-5 text-sm sm:justify-end">
            <Link
              to="/privacy-policy"
              className="text-white/70 transition hover:text-secondary"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="text-white/70 transition hover:text-secondary"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;