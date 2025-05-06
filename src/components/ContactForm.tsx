"use client";
import { motion, useInView } from "framer-motion";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    service: "CCTV Installation",
    address: "",
    pincode: "",
    date: "",
    timeSlot: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setMessage("Your request has been submitted successfully!");
        setFormData({
          name: "",
          mobile: "",
          email: "",
          service: "CCTV Installation",
          address: "",
          pincode: "",
          date: "",
          timeSlot: "",
        });
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setMessage("Error submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      {/* Hero Banner */}
      <div className="bg-gray-700 bg-opacity-80 bg-blend-overlay bg-[url('/hero-bg.png')] bg-cover bg-center py-24 md:py-32">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-white">Contact Us</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row gap-8 my-8">
        {/* Left Section */}
        <div className="w-full md:w-1/3">
          <h2 className="font-bold text-lg uppercase mb-2 text-black">
            GET IN TOUCH
          </h2>
          <p className="text-sm mb-4 text-black">
            Have questions or need a custom security plan? Our team is here to
            help — friendly, fast, and knowledgeable. Call us, message us, or
            request a free consultation today.
          </p>

          <div className="flex items-start gap-3 mt-6">
            <div className="bg-[#418DDC] p-2 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-sm text-black">
                Office Location
              </h3>
              <p className="text-sm text-black">
                Orion Tech Park, Sector 63, Noida
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 mt-4">
            <div className="bg-[#418DDC] p-2 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-sm text-black">
                Call Us Directly
              </h3>
              <p className="text-sm text-black">+91-9958343210</p>
            </div>
          </div>

          <div className="flex items-start gap-3 mt-4">
            <div className="bg-[#418DDC] p-2 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-sm text-black">Send a Message</h3>
              <p className="text-sm text-black">contact@quadrasecurity.in</p>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="font-bold text-lg uppercase mb-4 text-black">
              SOCIAL LINKS
            </h2>
            <div className="flex gap-4 ">
              <a href="#" className="block text-center">
                <div>
                  <img
                    src="/instagram (2).png"
                    alt="Instagram"
                    className="h-10 w-10 mx-auto"
                  />
                </div>
                <span className="text-sm block mt-1 text-black">Instagram</span>
              </a>

              <a href="#" className="block text-center">
                <div>
                  <img
                    src="/youtube (2).png"
                    alt="YouTube"
                    className="h-10 w-10 mx-auto"
                  />
                </div>
                <span className="text-sm block mt-1">YouTube</span>
              </a>

              <a href="#" className="block text-center">
                <div>
                  <img
                    src="/linkedin (2).png"
                    alt="LinkedIn"
                    className="h-10 w-10 mx-auto"
                  />
                </div>
                <span className="text-sm block mt-1">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="w-full md:w-2/3 bg-blue-900 rounded-lg p-6 text-white">
          <div className="mb-4 text-sm">
            <span className="text-blue-300">+ </span>
            CCTV Installation in Gurgaon and Delhi NCR
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 bg-blue-800 border-none rounded text-white placeholder-blue-300"
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile Number"
                className="w-full p-3 bg-blue-800 border-none rounded text-white placeholder-blue-300"
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full p-3 bg-blue-800 border-none rounded text-white placeholder-blue-300"
                required
              />
            </div>

            <div className="mb-4 relative">
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full p-3 bg-blue-800 border-none rounded text-white appearance-none"
                required
              >
                <option value="CCTV Installation">CCTV Installation</option>
                <option value="Maintenance">Maintenance</option>
                <option value="Other">Other</option>
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg
                  className="h-4 w-4 text-blue-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            <div className="mb-4">
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter street address and locality"
                className="w-full p-3 bg-blue-800 border-none rounded text-white placeholder-blue-300"
                rows={2}
                required
              />
            </div>

            <div className="mb-4 relative">
              <div className="flex gap-2">
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  placeholder="Enter Pincode"
                  className="w-3/5 p-3 bg-blue-800 border-none rounded text-white placeholder-blue-300"
                />
                <div className="w-2/5 relative">
                  <select
                    name="city"
                    className="w-full p-3 bg-blue-800 border-none rounded text-white appearance-none"
                  >
                    <option value="Gurgaon">Gurgaon</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Noida">Noida</option>
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg
                      className="h-4 w-4 text-blue-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-4 flex gap-2">
              <div className="w-1/2 relative">
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full p-3 bg-blue-800 border-none rounded text-white placeholder-blue-300"
                  placeholder="Select Preferred Date"
                  required
                />
              </div>

              <div className="w-1/2 relative">
                <select
                  name="timeSlot"
                  value={formData.timeSlot}
                  onChange={handleChange}
                  className="w-full p-3 bg-blue-800 border-none rounded text-white appearance-none"
                  required
                >
                  <option value="">Select time slot</option>
                  <option value="Morning (9am - 12pm)">
                    Morning (9am - 12pm)
                  </option>
                  <option value="Afternoon (12pm - 3pm)">
                    Afternoon (12pm - 3pm)
                  </option>
                  <option value="Evening (3pm - 6pm)">
                    Evening (3pm - 6pm)
                  </option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg
                    className="h-4 w-4 text-blue-300"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-purple-600 text-white py-2 px-8 rounded-md hover:bg-purple-700 transition w-auto"
            >
              {loading ? "SUBMITTING..." : "GET CALL BACK"}
            </button>
          </form>

          {message && (
            <p className="text-center text-green-300 mt-4">{message}</p>
          )}

          {/* Map */}
        </div>
      </div>
    </div>
  );
}
