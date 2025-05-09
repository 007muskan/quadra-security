"use client";

import { LockIcon } from "lucide-react";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function SiteVisitForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    area: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Submit logic here
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="block  bg-white/10 md:p-6 p-4 md:rounded-3xl rounded-2xl shadow-2xl text-center md:w-[400px]  h-[300px] md:h-auto text-white relative backdrop-blur-xl"
    >
      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2 shadow-md">
        <LockIcon className="text-black" />
      </div>

      <h2 className="font-urbanist font-semibold md:text-xl md:mb-6 mb-3 md:mt-8 mt-2">
        Schedule a Free <br /> Site Visit
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col md:gap-4 gap-3">
        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="text"
          name="name"
          placeholder="NAME"
          value={formData.name}
          onChange={handleChange}
          className="px-4 md:py-3 py-1 text-sm rounded-md bg-transparent border border-white placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
          required
        />
        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="tel"
          name="phone"
          placeholder="PHONE NO"
          value={formData.phone}
          onChange={handleChange}
          className="px-4 md:py-3 py-1  text-sm rounded-md bg-transparent border border-white placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
          required
        />
        <motion.select
          whileFocus={{ scale: 1.02 }}
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="px-4 md:py-3 py-1 text-sm  rounded-md  bg-transparent border border-white  focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
          required
        >
          <option value=""  className="bg-white" disabled>
            SELECT SERVICE
          </option>
          <option value="cctv" className="text-black">CCTV Installation</option>
          <option value="alarm" className="text-black">Alarm Systems</option>
          <option value="access" className="text-black">Access Control</option>
        </motion.select>
        <motion.select
          whileFocus={{ scale: 1.02 }}
          name="area"
          value={formData.area}
          onChange={handleChange}
          className="px-4 md:py-3 py-1 rounded-md text-sm  bg-transparent border border-white text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
          required
        >
          <option value="" disabled>
            SELECT AREA
          </option>
          <option value="north" className="text-black">North Zone</option>
          <option value="south" className="text-black">South Zone</option>
          <option value="east" className="text-black">East Zone</option>
          <option value="west" className="text-black">West Zone</option>
        </motion.select>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="md:mt-4 bg-[#01024E] text-sm  hover:bg-[#01013a] transition-all text-white font-semibold md:py-3 py-2 rounded-md tracking-widest shadow-md"
        >
          SUBMIT
        </motion.button>
      </form>
    </motion.div>
  );
}
