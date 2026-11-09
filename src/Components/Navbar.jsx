import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

import {
  FaChevronDown,
  FaBars,
  FaTimes,
  FaArrowRight,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);

  const services = [
    {
      name: "Medical Billing",
      path: "/services/medical-billing",
    },
    {
      name: "Claims Management",
      path: "/services/claims-management",
    },
    {
      name: "Payment Posting",
      path: "/services/payment",
    },
  ];

  const resources = [
    {
      name: "RCM Workflow",
      path: "/resources/workflow",
    },
    {
      name: "Revenue Calculator",
      path: "/resources/revenue-calculator",
    },
    {
      name: "FAQs",
      path: "/resources/faqs",
    },
  ];

  const closeMenus = () => {
    setActiveDropdown(null);
    setMobileMenu(false);
  };

  const renderDropdown = (title, items) => (
    <div
      key={title}
      className="relative"
      onMouseEnter={() => setActiveDropdown(title)}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <button
        type="button"
        onClick={() =>
          setActiveDropdown(
            activeDropdown === title ? null : title
          )
        }
        aria-expanded={activeDropdown === title}
        className="flex items-center gap-2 py-3 text-sm font-semibold
        text-primary transition hover:text-secondary"
      >
        {title}

        <FaChevronDown
          className={`text-[10px] transition-transform duration-200 ${
            activeDropdown === title ? "rotate-180" : ""
          }`}
        />
      </button>

      {activeDropdown === title && (
        <div
          className="absolute left-0 top-full z-50 w-64
          rounded-xl border border-primary/10 bg-background
          p-2 shadow-lg"
        >
          {items.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={closeMenus}
              className="block rounded-lg px-4 py-3 text-sm
              font-medium text-primary transition
              hover:bg-secondary/10 hover:text-secondary"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-background">

      {/* Top Contact Bar */}
      <div className="hidden bg-primary text-white md:block">
        <div
          className="mx-auto flex max-w-7xl items-center
          justify-between px-6 py-2 text-xs"
        >
          <div className="flex items-center gap-6">

            {/* Email */}
            <a
              href="mailto:info@medflowrcm.com"
              className="flex items-center gap-2 transition
              hover:text-secondary"
            >
              <FaEnvelope className="text-secondary" />
              <span>info@medflowrcm.com</span>
            </a>

            {/* Phone */}
            <a
              href="tel:+15551234567"
              className="flex items-center gap-2 transition
              hover:text-secondary"
            >
              <FaPhoneAlt className="text-secondary" />
              <span>+1 (555) 123-4567</span>
            </a>

          </div>

          <span className="font-medium">
            Your Trusted RCM Partner
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className="mx-auto flex max-w-7xl items-center
        justify-between px-4 py-3 md:px-6"
      >

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenus}
          className="flex shrink-0 items-center gap-2"
        >
          <img
            src={Logo}
            alt="MedFlow RCM Logo"
            className="h-14 w-14 object-contain sm:h-16 sm:w-16"
          />

          <div>
            <h1 className="text-xl font-extrabold tracking-tight
            text-primary sm:text-2xl">
              MedFlow{" "}
              <span className="text-secondary">RCM</span>
            </h1>

            <p className="text-[10px] tracking-wide text-primary/70">
              Streamline. Optimize. Grow.
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-5 lg:flex xl:gap-6">

          <Link
            to="/"
            className="py-3 text-sm font-semibold text-primary
            transition hover:text-secondary"
          >
            Home
          </Link>

          {renderDropdown("Services", services)}

          {renderDropdown("Resources", resources)}

          <Link
            to="/solutions"
            className="py-3 text-sm font-semibold text-primary
            transition hover:text-secondary"
          >
            Solutions
          </Link>

          <Link
            to="/about"
            className="py-3 text-sm font-semibold text-primary
            transition hover:text-secondary"
          >
            About Us
          </Link>

          <Link
            to="/contact"
            className="py-3 text-sm font-semibold text-primary
            transition hover:text-secondary"
          >
            Contact
          </Link>

        </div>

        {/* Demo Button */}
        <Link
          to="/contact"
          className="hidden items-center gap-2 rounded-full
          bg-secondary px-4 py-3 text-sm font-bold text-white
          transition hover:bg-primary xl:flex"
        >
          Get a Free Demo
          <FaArrowRight className="text-xs" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenu(!mobileMenu)}
          aria-label={mobileMenu ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenu}
          className="rounded-lg border border-primary/20
          p-2 text-primary transition hover:bg-secondary/10
          lg:hidden"
        >
          {mobileMenu ? (
            <FaTimes className="text-xl" />
          ) : (
            <FaBars className="text-xl" />
          )}
        </button>

      </nav>

      {/* Mobile Navigation */}
      {mobileMenu && (
        <div
          className="border-t border-primary/10 bg-background
          px-5 py-4 shadow-lg lg:hidden"
        >
          <div className="flex flex-col">

            {/* Home */}
            <Link
              to="/"
              onClick={closeMenus}
              className="border-b border-primary/10 py-3
              font-semibold text-primary transition
              hover:text-secondary"
            >
              Home
            </Link>

            {/* Mobile Services */}
            <button
              type="button"
              onClick={() =>
                setActiveDropdown(
                  activeDropdown === "MobileServices"
                    ? null
                    : "MobileServices"
                )
              }
              className="flex items-center justify-between
              border-b border-primary/10 py-3 font-semibold
              text-primary"
            >
              Services

              <FaChevronDown
                className={`text-xs transition-transform ${
                  activeDropdown === "MobileServices"
                    ? "rotate-180"
                    : ""
                }`}
              />
            </button>

                 {activeDropdown === "MobileServices" &&
              services.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={closeMenus}
                  className="py-3 pl-4 text-sm text-primary/80
                  transition hover:text-secondary"
                >
                  {item.name}   
                </Link>
              ))}

            {/* Mobile Resources */}
            <button
              type="button"
              onClick={() =>
                setActiveDropdown(
                  activeDropdown === "MobileResources"
                    ? null
                    : "MobileResources"
                )
              }
              className="flex items-center justify-between
              border-b border-primary/10 py-3 font-semibold
              text-primary"
            >
              Resources

              <FaChevronDown
                className={`text-xs transition-transform ${
                  activeDropdown === "MobileResources"
                    ? "rotate-180"
                    : ""
                }`}
              />
            </button>

            {activeDropdown === "MobileResources" &&
              resources.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={closeMenus}
                  className="py-3 pl-4 text-sm text-primary/80
                  transition hover:text-secondary"
                >
                  {item.name}
                </Link>
              ))}

            {/* Solutions */}
            <Link
              to="/solutions"
              onClick={closeMenus}
              className="border-b border-primary/10 py-3
              font-semibold text-primary transition
              hover:text-secondary"
            >
              Solutions
            </Link>

            {/* About Us */}
            <Link
              to="/about"
              onClick={closeMenus}
              className="border-b border-primary/10 py-3
              font-semibold text-primary transition
              hover:text-secondary"
            >
              About Us
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              onClick={closeMenus}
              className="border-b border-primary/10 py-3
              font-semibold text-primary transition
              hover:text-secondary"
            >
              Contact
            </Link>

            {/* Mobile Contact Details */}
            <div className="mt-4 flex flex-col gap-3 text-sm">

              <a
                href="mailto:info@medflowrcm.com"
                className="flex items-center gap-3 text-primary"
              >
                <FaEnvelope className="text-secondary" />
                info@medflowrcm.com
              </a>

              <a
                href="tel:+15551234567"
                className="flex items-center gap-3 text-primary"
              >
                <FaPhoneAlt className="text-secondary" />
                +1 (555) 123-4567
              </a>

            </div>

            {/* Mobile Demo Button */}
            <Link
              to="/contact"
              onClick={closeMenus}
              className="mt-5 flex items-center justify-center
              gap-2 rounded-full bg-secondary px-5 py-3
              font-bold text-white transition hover:bg-primary"
            >
              Get a Free Demo
              <FaArrowRight className="text-xs" />
            </Link>

          </div>
        </div>
      )}

    </header>
  );
};

export default Navbar; 