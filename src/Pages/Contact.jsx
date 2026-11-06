import { useState } from "react";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "", 
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact Form Data:", formData);

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    });
  };

  return (
    <main className="bg-background">

      {/* Contact Hero */}
      <section className="bg-primary px-5 py-20 text-center md:px-8">

        <div className="mx-auto max-w-3xl">

          <span
            className="inline-block rounded-full
            bg-secondary/15 px-5 py-2 text-sm
            font-bold uppercase tracking-wider text-secondary"
          >
            Get In Touch
          </span>

          <h1 className="mt-6 text-4xl font-extrabold
          leading-tight text-white sm:text-5xl lg:text-6xl">
            Let's Talk About Your{" "}
            <span className="text-secondary">
              RCM Needs
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl
          text-base leading-8 text-white/75">
            Have questions about our revenue cycle management
            services? Our team is ready to understand your
            needs and help you find the right solution.
          </p>

        </div>

      </section>

      {/* Contact Information */}
      <section className="px-5 py-16 md:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">

            <span className="font-bold uppercase
            tracking-widest text-secondary">
              Contact Information
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-primary">
              We're Here to Help
            </h2>

            <p className="mt-4 text-primary/70">
              Reach out to us through any of the following options.
            </p>

          </div>

          <div className="grid grid-cols-1 gap-6
          sm:grid-cols-2 lg:grid-cols-4">

            {/* Email */}
            <div className="rounded-2xl border border-primary/10
            bg-white p-7 text-center transition
            hover:-translate-y-2 hover:border-secondary hover:shadow-lg">

              <div className="mx-auto flex h-14 w-14
              items-center justify-center rounded-xl
              bg-secondary/10 text-2xl text-secondary">
                <FaEnvelope />
              </div>

              <h3 className="mt-5 font-bold text-primary">
                Email Us
              </h3>

              <a
                href="mailto:info@medflowrcm.com"
                className="mt-2 block break-all text-sm
                text-primary/70 hover:text-secondary"
              >
                info@medflowrcm.com
              </a>

            </div>

            {/* Phone */}
            <div className="rounded-2xl border border-primary/10
            bg-white p-7 text-center transition
            hover:-translate-y-2 hover:border-secondary hover:shadow-lg">

              <div className="mx-auto flex h-14 w-14
              items-center justify-center rounded-xl
              bg-secondary/10 text-2xl text-secondary">
                <FaPhoneAlt />
              </div>

              <h3 className="mt-5 font-bold text-primary">
                Call Us
              </h3>

              <a
                href="tel:+15551234567"
                className="mt-2 block text-sm
                text-primary/70 hover:text-secondary"
              >
                +1 (555) 123-4567
              </a>

            </div>

            {/* Location */}
            <div className="rounded-2xl border border-primary/10
            bg-white p-7 text-center transition
            hover:-translate-y-2 hover:border-secondary hover:shadow-lg">

              <div className="mx-auto flex h-14 w-14
              items-center justify-center rounded-xl
              bg-secondary/10 text-2xl text-secondary">
                <FaMapMarkerAlt />
              </div>

              <h3 className="mt-5 font-bold text-primary">
                Our Location
              </h3>

              <p className="mt-2 text-sm text-primary/70">
                Serving Healthcare Providers Across the USA
              </p>

            </div>

            {/* Working Hours */}
            <div className="rounded-2xl border border-primary/10
            bg-white p-7 text-center transition
            hover:-translate-y-2 hover:border-secondary hover:shadow-lg">

              <div className="mx-auto flex h-14 w-14
              items-center justify-center rounded-xl
              bg-secondary/10 text-2xl text-secondary">
                <FaClock />
              </div>

              <h3 className="mt-5 font-bold text-primary">
                Working Hours
              </h3>

              <p className="mt-2 text-sm text-primary/70">
                Monday – Friday
                <br />
                9:00 AM – 5:00 PM
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Contact Form Section */}
      <section className="bg-primary/5 px-5 py-20 md:px-8">

        <div className="mx-auto grid max-w-7xl
        grid-cols-1 gap-12 lg:grid-cols-2">

          {/* Left Content */}
          <div className="flex flex-col justify-center">

            <span className="font-bold uppercase
            tracking-widest text-secondary">
              Let's Connect
            </span>

            <h2 className="mt-4 text-3xl font-extrabold
            leading-tight text-primary sm:text-4xl">
              Ready to Improve Your{" "}
              <span className="text-secondary">
                Revenue Cycle?
              </span>
            </h2>

            <p className="mt-6 leading-8 text-primary/70">
              Tell us about your healthcare practice and
              your billing challenges. Our team can help
              you explore suitable revenue cycle management
              solutions for your organization.
            </p>

            <div className="mt-8 space-y-5">

              <div className="flex items-start gap-4">
                <FaCheckCircle className="mt-1 shrink-0 text-xl text-secondary" />

                <div>
                  <h3 className="font-bold text-primary">
                    Personalized Support
                  </h3>

                  <p className="mt-1 text-sm text-primary/70">
                    Discuss solutions based on your business needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaCheckCircle className="mt-1 shrink-0 text-xl text-secondary" />

                <div>
                  <h3 className="font-bold text-primary">
                    Professional Guidance
                  </h3>

                  <p className="mt-1 text-sm text-primary/70">
                    Understand available RCM service options.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaCheckCircle className="mt-1 shrink-0 text-xl text-secondary" />

                <div>
                  <h3 className="font-bold text-primary">
                    Simple Communication
                  </h3>

                  <p className="mt-1 text-sm text-primary/70">
                    Connect with our team through one simple form.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-primary/10
          bg-white p-6 shadow-lg sm:p-9">

            <h3 className="text-2xl font-bold text-primary">
              Send Us a Message
            </h3>

            <p className="mt-2 text-sm text-primary/70">
              Fill out the form below and tell us how we can help.
            </p>

            {submitted && (
              <div
                role="status"
                className="mt-6 rounded-xl border
                border-secondary/30 bg-secondary/10
                p-4 text-sm font-semibold text-primary"
              >
                Thank you! Your message has been recorded
                in this demo. Backend integration is still required.
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-7 space-y-5">

              {/* Name and Email */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm
                  font-semibold text-primary">
                    Full Name *
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full rounded-lg border
                    border-primary/20 bg-white px-4 py-3
                    text-sm text-primary outline-none
                    transition focus:border-secondary"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm
                  font-semibold text-primary">
                    Email Address *
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="w-full rounded-lg border
                    border-primary/20 bg-white px-4 py-3
                    text-sm text-primary outline-none
                    transition focus:border-secondary"
                  />
                </div>

              </div>

              {/* Phone and Company */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm
                  font-semibold text-primary">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className="w-full rounded-lg border
                    border-primary/20 bg-white px-4 py-3
                    text-sm text-primary outline-none
                    transition focus:border-secondary"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm
                  font-semibold text-primary">
                    Company Name
                  </label>

                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Enter company name"
                    className="w-full rounded-lg border
                    border-primary/20 bg-white px-4 py-3
                    text-sm text-primary outline-none
                    transition focus:border-secondary"
                  />
                </div>

              </div>

              {/* Service Dropdown */}
              <div>
                <label className="mb-2 block text-sm
                font-semibold text-primary">
                  Interested Service *
                </label>

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border
                  border-primary/20 bg-white px-4 py-3
                  text-sm text-primary outline-none
                  transition focus:border-secondary"
                >
                  <option value="">Select a Service</option>
                  <option value="Medical Billing">Medical Billing</option>
                  <option value="Medical Coding">Medical Coding</option>
                  <option value="Claims Management">Claims Management</option>
                  <option value="Payment Posting">Payment Posting</option>
                  <option value="Denial Management">Denial Management</option>
                  <option value="Credentialing">Credentialing Services</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm
                font-semibold text-primary">
                  Your Message *
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements..."
                  rows="5"
                  required
                  className="w-full resize-none rounded-lg
                  border border-primary/20 bg-white
                  px-4 py-3 text-sm text-primary
                  outline-none transition focus:border-secondary"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="flex w-full items-center
                justify-center gap-3 rounded-lg
                bg-secondary px-6 py-4 font-bold
                text-white transition hover:bg-primary"
              >
                Send Message
                <FaArrowRight />
              </button>

              <p className="text-center text-xs leading-5 text-primary/60">
                Please do not include patient names, medical records,
                or other sensitive health information in this form.
              </p>

            </form>

          </div>

        </div>

      </section>

      {/* Bottom CTA */}
      <section className="px-5 py-16 text-center md:px-8">

        <div className="mx-auto max-w-3xl">

          <h2 className="text-3xl font-extrabold text-primary">
            Let's Build a Better Revenue Cycle Together
          </h2>

          <p className="mt-4 leading-7 text-primary/70">
            Connect with MedFlow RCM and explore solutions
            designed for your healthcare organization.
          </p>

          <a
            href="mailto:info@medflowrcm.com"
            className="mt-7 inline-flex items-center
            gap-3 rounded-full bg-primary px-8 py-4
            font-bold text-white transition hover:bg-secondary"
          >
            Email Our Team
            <FaArrowRight />
          </a>

        </div>

      </section>

    </main>
  );
};

export default Contact;
