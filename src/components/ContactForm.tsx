"use client";

import { useState } from "react";

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
      <div className="bg-gray-700 bg-opacity-80 bg-blend-overlay bg-[url('/hero-bg.png')] bg-cover bg-center py-16">
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
            <div className="bg-blue-500 p-2 rounded-md">
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
            <div className="bg-blue-500 p-2 rounded-md">
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
            <div className="bg-blue-500 p-2 rounded-md">
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
            <div className="flex gap-4">
              <a href="#" className="block">
                <div className="border border-gray-300 p-2 rounded-full bg-[#418DDC]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                <span className="text-sm block mt-1 text-white">Instagram</span>
              </a>

              <a href="#" className="block">
                <div className="border border-gray-300 p-2 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </div>
                <span className="text-sm block mt-1">Youtube</span>
              </a>

              <a href="#" className="block">
                <div className="border border-gray-300 p-2 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
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
          <div className="mt-8 rounded-lg overflow-hidden border-4 border-white">
            <div className="bg-gray-200 h-32 relative">
              <img
                src="/api/placeholder/400/320"
                alt="Map location"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <svg
                    className="h-10 w-10 text-red-600"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-blue-900 p-4">
              <h3 className="font-medium text-lg">Quadra Security</h3>
              <p className="text-sm text-gray-300">
                Orion Tech Park, Sector 63, Noida
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
