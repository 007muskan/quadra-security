"use client";

import { LockIcon } from "lucide-react";
import { useState } from "react";

export default function SiteVisitForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    area: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission (send to backend, etc.)
  };

  return (
    <div className="bg-white/12 p-6 rounded-3xl shadow-xl text-center md:w-[400px] text-white relative">
      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2">
       <LockIcon className="text-black"/>
      </div>

      <h2 className="font-urbanist font-semibold text-xl mb-6 mt-8">
        Schedule a Free <br /> Site Visit
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="NAME"
          value={formData.name}
          onChange={handleChange}
          className="md:px-4 md:py-3 rounded-md bg-transparent border border-white focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-white text-white"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="PHONE NO"
          value={formData.phone}
          onChange={handleChange}
          className="md:px-4 md:py-3 rounded-md bg-transparent border border-white focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-white text-white"
          required
        />
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="md:px-4 md:py-3 rounded-md bg-transparent border border-white focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
          required
        >
          <option value="" disabled>SELECT SERVICE</option>
          <option value="cctv">CCTV Installation</option>
          <option value="alarm">Alarm Systems</option>
          <option value="access">Access Control</option>
          {/* Add more services here */}
        </select>
        <select
          name="area"
          value={formData.area}
          onChange={handleChange}
          className="md:px-4 md:py-3 rounded-md bg-transparent border border-white focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
          required
        >
          <option value="" disabled>SELECT AREA</option>
          <option value="north">North Zone</option>
          <option value="south">South Zone</option>
          <option value="east">East Zone</option>
          <option value="west">West Zone</option>
          {/* Add more areas */}
        </select>

        <button
          type="submit"
          className="mt-4 bg-[#01024E] hover:bg-[#01013a] transition-all text-white font-semibold py-3 rounded-md tracking-widest"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}
