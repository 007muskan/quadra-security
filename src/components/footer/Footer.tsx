import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b to-[#0e0542] from-[#2716be] text-white py-12 px-4 font-[family-name:var(--font-urbanist)]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* ABOUT */}
        <div>
          <h3 className="font-semibold text-lg mb-4">ABOUT</h3>
          <ul className="space-y-2 text-sm">
            <li>Our Company</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="font-semibold text-lg mb-4">SERVICES</h3>
          <ul className="space-y-2 text-sm">
            <li>CCTV Installation</li>
            <li>24/7 Remote Monitoring</li>
            <li>Custom Security Systems</li>
            <li>Maintenance & Support</li>
          </ul>
        </div>

        {/* LOCATIONS */}
        <div>
          <h3 className="font-semibold text-lg mb-4">LOCATIONS</h3>
          <ul className="space-y-2 text-sm">
            <li>Gurgaon</li>
            <li>DLF Phase 2</li>
            <li>Cyber City</li>
            <li>Sohna Road</li>
          </ul>
        </div>

        {/* BRAND & CONTACT */}
        <div>
          <h3 className="font-bold text-xl mb-1">QUADRA SECURITY</h3>
          <p className="text-sm mb-3">Protecting What Matters Most</p>
          <div className="text-sm space-y-1">
            <p>📍 Gurgaon, Haryana</p>
            <p>📞 +91 98XXXXXX85</p>
            <p>✉️ contact@quadrasecurity.in</p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-xl">
            <FaInstagram className="hover:text-pink-500 transition" />
            <FaYoutube className="hover:text-red-500 transition" />
            <FaLinkedin className="hover:text-blue-400 transition" />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white mt-10 pt-6 text-center text-sm">
        © 2025 Quadra Security. All rights reserved.
      </div>
    </footer>
  );
}
